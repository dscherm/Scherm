// API Configuration
const API_BASE = 'https://www.thecocktaildb.com/api/json/v1/1';

// State Management
let currentSearchType = 'name';
let savedCocktails = JSON.parse(localStorage.getItem('savedCocktails')) || [];
let compareList = []; // up to 4 cocktails for comparison
const MAX_COMPARE = 4;

// DOM Elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultsSection = document.getElementById('results-section');
const cocktailModal = document.getElementById('cocktail-modal');
const ingredientModal = document.getElementById('ingredient-modal');
const liquorSelection = document.getElementById('liquor-selection');

// Tab Navigation
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.dataset.tab;

        // Update active tab button
        document.querySelectorAll('.tab-btn').forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        // Update active tab content
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        document.getElementById(`${tabName}-tab`).classList.add('active');

        // Load saved cocktails if switching to create tab
        if (tabName === 'create') {
            displaySavedCocktails();
        }
        // Initialize inventory if switching to inventory tab
        if (tabName === 'inventory') {
            initInventory();
        }
    });
});

// Search Type Selection
document.querySelectorAll('.search-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentSearchType = btn.dataset.type;

        // Update active button
        document.querySelectorAll('.search-type-btn').forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        // Update UI based on search type
        if (currentSearchType === 'liquor') {
            searchInput.style.display = 'none';
            searchBtn.style.display = 'none';
            liquorSelection.style.display = 'grid';
        } else if (currentSearchType === 'random') {
            searchInput.style.display = 'none';
            searchBtn.style.display = 'none';
            liquorSelection.style.display = 'none';
            getRandomCocktail();
        } else {
            searchInput.style.display = 'block';
            searchBtn.style.display = 'block';
            liquorSelection.style.display = 'none';

            // Update placeholder
            if (currentSearchType === 'name') {
                searchInput.placeholder = 'Search for a cocktail by name...';
            } else if (currentSearchType === 'ingredient') {
                searchInput.placeholder = 'Search by ingredient (e.g., vodka, lime)...';
            }
        }
    });
});

// Liquor Selection
document.querySelectorAll('.liquor-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const liquor = btn.dataset.liquor;
        searchByLiquor(liquor);
    });
});

// Debounce helper
function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

// Search Button
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});
searchInput.addEventListener('input', debounce(() => {
    if (searchInput.value.trim().length >= 3) performSearch();
}, 400));

// Perform Search
async function performSearch() {
    const query = searchInput.value.trim();

    if (!query && currentSearchType !== 'random') {
        alert('Please enter a search term');
        return;
    }

    showLoading();

    try {
        let url;
        if (currentSearchType === 'name') {
            url = `${API_BASE}/search.php?s=${encodeURIComponent(query)}`;
        } else if (currentSearchType === 'ingredient') {
            url = `${API_BASE}/filter.php?i=${encodeURIComponent(query)}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (data.drinks) {
            // If we got simplified results (from filter), fetch full details
            if (currentSearchType === 'ingredient') {
                const detailedDrinks = await Promise.all(
                    data.drinks.slice(0, 12).map(drink => fetchCocktailById(drink.idDrink))
                );
                displayCocktails(detailedDrinks.filter(d => d !== null));
            } else {
                displayCocktails(data.drinks);
            }
        } else {
            resultsSection.innerHTML = '<div class="empty-state">No cocktails found. Try a different search!</div>';
        }
    } catch (error) {
        console.error('Error fetching cocktails:', error);
        resultsSection.innerHTML = '<div class="empty-state">Error loading cocktails. Please try again.</div>';
    }
}

// Search by Liquor
async function searchByLiquor(liquor) {
    showLoading();

    try {
        const response = await fetch(`${API_BASE}/filter.php?i=${encodeURIComponent(liquor)}`);
        const data = await response.json();

        if (data.drinks) {
            const detailedDrinks = await Promise.all(
                data.drinks.slice(0, 12).map(drink => fetchCocktailById(drink.idDrink))
            );
            displayCocktails(detailedDrinks.filter(d => d !== null));
        } else {
            resultsSection.innerHTML = '<div class="empty-state">No cocktails found with this liquor.</div>';
        }
    } catch (error) {
        console.error('Error fetching cocktails:', error);
        resultsSection.innerHTML = '<div class="empty-state">Error loading cocktails. Please try again.</div>';
    }
}

// Get Random Cocktail
async function getRandomCocktail() {
    showLoading();

    try {
        const response = await fetch(`${API_BASE}/random.php`);
        const data = await response.json();

        if (data.drinks) {
            displayCocktails(data.drinks);
        }
    } catch (error) {
        console.error('Error fetching random cocktail:', error);
        resultsSection.innerHTML = '<div class="empty-state">Error loading cocktail. Please try again.</div>';
    }
}

// Fetch Cocktail by ID
async function fetchCocktailById(id) {
    try {
        const response = await fetch(`${API_BASE}/lookup.php?i=${id}`);
        const data = await response.json();
        return data.drinks ? data.drinks[0] : null;
    } catch (error) {
        console.error('Error fetching cocktail details:', error);
        return null;
    }
}

// Display Cocktails
function displayCocktails(cocktails) {
    resultsSection.innerHTML = '';

    cocktails.forEach(cocktail => {
        const card = createCocktailCard(cocktail);
        resultsSection.appendChild(card);
    });
}

// Create Cocktail Card
function createCocktailCard(cocktail) {
    const card = document.createElement('div');
    card.className = 'cocktail-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${cocktail.strDrink}`);

    const cocktailId = cocktail.idDrink || cocktail.id;

    card.innerHTML = `
        <img src="${cocktail.strDrinkThumb}/preview" alt="${cocktail.strDrink}" loading="lazy" decoding="async">
        <div class="cocktail-card-content">
            <h3>${cocktail.strDrink}</h3>
            ${cocktail.strCategory ? `<span class="category">${cocktail.strCategory}</span>` : ''}
            ${cocktail.strGlass ? `<p class="glass-type">Served in: ${cocktail.strGlass}</p>` : ''}
            <button class="compare-add-btn" data-cocktail-id="${cocktailId}" aria-label="Add ${cocktail.strDrink} to comparison">Compare</button>
        </div>
    `;

    card.querySelector('.compare-add-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        addToCompare(cocktail);
    });

    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('compare-add-btn')) {
            showCocktailDetail(cocktail);
        }
    });

    return card;
}

// Show Cocktail Detail
function showCocktailDetail(cocktail) {
    const ingredients = [];

    // Extract ingredients and measurements
    for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        const measure = cocktail[`strMeasure${i}`];

        if (ingredient) {
            ingredients.push({
                name: ingredient,
                measure: measure || 'To taste'
            });
        }
    }

    const detailContent = `
        <div class="cocktail-detail-header">
            <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
            <h2>${cocktail.strDrink}</h2>
        </div>
        <div class="cocktail-detail-body">
            <div class="cocktail-tags">
                ${cocktail.strCategory ? `<span class="tag">${cocktail.strCategory}</span>` : ''}
                ${cocktail.strAlcoholic ? `<span class="tag">${cocktail.strAlcoholic}</span>` : ''}
                ${cocktail.strGlass ? `<span class="tag">${cocktail.strGlass}</span>` : ''}
            </div>

            <div class="ingredients-section">
                <h3>Ingredients</h3>
                ${ingredients.map(ing => `
                    <div class="ingredient-item" data-ingredient="${ing.name}">
                        <span class="ingredient-name">${ing.name}</span>
                        <span class="ingredient-measure">${ing.measure}</span>
                    </div>
                `).join('')}
            </div>

            <div class="instructions-section">
                <h3>Instructions</h3>
                <p>${cocktail.strInstructions || 'No instructions available.'}</p>
            </div>
        </div>
    `;

    document.getElementById('cocktail-detail').innerHTML = detailContent;

    // Add click handlers to ingredients
    document.querySelectorAll('.ingredient-item').forEach(item => {
        item.addEventListener('click', () => {
            const ingredientName = item.dataset.ingredient;
            showIngredientDetail(ingredientName);
        });
    });

    cocktailModal.style.display = 'block';
}

// Show Ingredient Detail
async function showIngredientDetail(ingredientName) {
    const detailContent = `
        <div class="ingredient-detail-content">
            <h2>${ingredientName}</h2>

            <div class="ingredient-options">
                <button class="ingredient-option-btn active" data-option="brands">Popular Brands</button>
                <button class="ingredient-option-btn" data-option="alternatives">Alternatives</button>
            </div>

            <div class="brands-list active">
                ${getBrandsForIngredient(ingredientName)}
            </div>

            <div class="alternatives-list">
                ${getAlternativesForIngredient(ingredientName)}
            </div>
        </div>
    `;

    document.getElementById('ingredient-detail').innerHTML = detailContent;

    // Add option button handlers
    document.querySelectorAll('.ingredient-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.ingredient-option-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const option = btn.dataset.option;
            document.querySelector('.brands-list').classList.toggle('active', option === 'brands');
            document.querySelector('.alternatives-list').classList.toggle('active', option === 'alternatives');
        });
    });

    ingredientModal.style.display = 'block';
}

// Get Brands for Ingredient (Mock data - you can expand this)
function getBrandsForIngredient(ingredient) {
    const brands = {
        'Vodka': ['Absolut', 'Grey Goose', 'Smirnoff', 'Belvedere', 'Tito\'s'],
        'Rum': ['Bacardi', 'Captain Morgan', 'Malibu', 'Havana Club', 'Appleton Estate'],
        'Gin': ['Tanqueray', 'Bombay Sapphire', 'Hendrick\'s', 'Beefeater', 'Gordon\'s'],
        'Tequila': ['Patrón', 'Don Julio', 'Jose Cuervo', 'Herradura', 'Casamigos'],
        'Whiskey': ['Jack Daniel\'s', 'Jim Beam', 'Johnnie Walker', 'Maker\'s Mark', 'Crown Royal'],
        'Bourbon': ['Maker\'s Mark', 'Woodford Reserve', 'Buffalo Trace', 'Wild Turkey', 'Four Roses'],
        'Triple sec': ['Cointreau', 'Grand Marnier', 'DeKuyper', 'Combier'],
        'Vermouth': ['Martini & Rossi', 'Dolin', 'Carpano', 'Noilly Prat'],
        'Lime juice': ['Fresh squeezed', 'Nellie & Joe\'s', 'Rose\'s', 'ReaLime'],
        'Lemon juice': ['Fresh squeezed', 'Santa Cruz Organic', 'ReaLemon'],
        'Orange juice': ['Fresh squeezed', 'Tropicana', 'Simply Orange', 'Minute Maid'],
        'Cranberry juice': ['Ocean Spray', 'Northland', 'Lakewood Organic'],
        'Pineapple juice': ['Dole', 'Del Monte', 'Lakewood Organic'],
        'Tomato juice': ['Campbell\'s', 'Sacramento', 'Clamato'],
        'Ginger beer': ['Fever-Tree', 'Gosling\'s', 'Bundaberg', 'Cock\'n Bull'],
        'Tonic water': ['Fever-Tree', 'Q Mixers', 'Schweppes', 'Canada Dry'],
        'Club soda': ['Schweppes', 'Canada Dry', 'Perrier', 'San Pellegrino'],
        'Cola': ['Coca-Cola', 'Pepsi', 'Mexican Coke', 'Fentimans']
    };

    const ingredientBrands = brands[ingredient] || ['Generic/Store Brand', 'Premium Options Available'];

    return ingredientBrands.map(brand => `
        <div class="brand-item">
            <strong>${brand}</strong>
        </div>
    `).join('');
}

// Get Alternatives for Ingredient
function getAlternativesForIngredient(ingredient) {
    const alternatives = {
        'Vodka': ['White rum (lighter cocktails)', 'Gin (for more botanical flavor)', 'Sake (for Asian-inspired drinks)'],
        'Rum': ['Vodka (cleaner taste)', 'Cachaca (Brazilian alternative)', 'Bourbon (richer flavor)'],
        'Gin': ['Vodka (neutral base)', 'White rum (sweeter)', 'Aquavit (Scandinavian alternative)'],
        'Tequila': ['Mezcal (smokier)', 'White rum (sweeter)', 'Vodka (neutral)'],
        'Whiskey': ['Bourbon (sweeter)', 'Scotch (smokier)', 'Brandy (fruitier)', 'Dark rum (richer)'],
        'Bourbon': ['Rye whiskey (spicier)', 'Tennessee whiskey', 'Scotch (smokier)'],
        'Triple sec': ['Cointreau (premium)', 'Curaçao', 'Orange liqueur'],
        'Vermouth': ['Dry white wine + herbs', 'Lillet Blanc', 'Sake (for dry vermouth)'],
        'Lime juice': ['Lemon juice (less tart)', 'Yuzu juice (Asian citrus)', 'Fresh lime only!'],
        'Lemon juice': ['Lime juice (more tart)', 'Meyer lemon (sweeter)', 'Fresh lemon only!'],
        'Orange juice': ['Grapefruit juice (more tart)', 'Tangerine juice (sweeter)', 'Blood orange juice'],
        'Cranberry juice': ['Pomegranate juice', 'Cherry juice', 'Raspberry juice'],
        'Pineapple juice': ['Mango juice', 'Passion fruit juice', 'Guava juice'],
        'Sugar syrup': ['Honey syrup', 'Agave nectar', 'Maple syrup', 'Simple syrup'],
        'Grenadine': ['Pomegranate syrup', 'Cherry syrup', 'Raspberry syrup'],
        'Bitters': ['Angostura (classic)', 'Peychaud\'s (anise notes)', 'Orange bitters'],
        'Mint': ['Basil (herbal)', 'Cilantro (savory)', 'Rosemary (piney)'],
        'Club soda': ['Sparkling water', 'Tonic water (adds quinine)', 'Ginger ale (adds sweetness)']
    };

    const ingredientAlts = alternatives[ingredient] || ['Use as specified', 'Consult a mixologist for substitutions'];

    return ingredientAlts.map(alt => `
        <div class="alternative-item">
            ${alt}
        </div>
    `).join('');
}

// Modal Close Handlers
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        cocktailModal.style.display = 'none';
        ingredientModal.style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target === cocktailModal) {
        cocktailModal.style.display = 'none';
    }
    if (e.target === ingredientModal) {
        ingredientModal.style.display = 'none';
    }
});

// Create Your Own Cocktail
const addIngredientBtn = document.getElementById('add-ingredient-btn');
const ingredientsList = document.getElementById('ingredients-list');
const saveCocktailBtn = document.getElementById('save-cocktail-btn');

addIngredientBtn.addEventListener('click', () => {
    const row = document.createElement('div');
    row.className = 'ingredient-input-row';
    row.innerHTML = `
        <input type="text" placeholder="Ingredient" class="ingredient-name">
        <input type="text" placeholder="Measurement" class="ingredient-measure">
        <button class="remove-ingredient-btn">×</button>
    `;

    ingredientsList.appendChild(row);

    // Add remove handler
    row.querySelector('.remove-ingredient-btn').addEventListener('click', () => {
        row.remove();
    });
});

saveCocktailBtn.addEventListener('click', () => {
    const name = document.getElementById('cocktail-name').value.trim();
    const glass = document.getElementById('cocktail-glass').value;
    const instructions = document.getElementById('cocktail-instructions').value.trim();
    const imageUrl = document.getElementById('cocktail-image').value.trim();

    if (!name) {
        alert('Please enter a cocktail name');
        return;
    }

    // Collect ingredients
    const ingredients = [];
    document.querySelectorAll('.ingredient-input-row').forEach(row => {
        const ingredientName = row.querySelector('.ingredient-name').value.trim();
        const measure = row.querySelector('.ingredient-measure').value.trim();

        if (ingredientName) {
            ingredients.push({ name: ingredientName, measure: measure || 'To taste' });
        }
    });

    if (ingredients.length === 0) {
        alert('Please add at least one ingredient');
        return;
    }

    // Create cocktail object
    const newCocktail = {
        id: Date.now(),
        strDrink: name,
        strGlass: glass,
        strInstructions: instructions || 'Mix ingredients as desired.',
        strDrinkThumb: imageUrl || 'https://www.thecocktaildb.com/images/media/drink/default.jpg',
        strCategory: 'Custom',
        strAlcoholic: 'Unknown',
        ingredients: ingredients,
        custom: true
    };

    // Save to local storage
    savedCocktails.push(newCocktail);
    localStorage.setItem('savedCocktails', JSON.stringify(savedCocktails));

    // Show success message
    alert(`🍹 ${name} has been saved to your collection!`);

    // Reset form
    document.getElementById('cocktail-name').value = '';
    document.getElementById('cocktail-instructions').value = '';
    document.getElementById('cocktail-image').value = '';
    ingredientsList.innerHTML = `
        <div class="ingredient-input-row">
            <input type="text" placeholder="Ingredient" class="ingredient-name">
            <input type="text" placeholder="Measurement" class="ingredient-measure">
            <button class="remove-ingredient-btn" style="display: none;">×</button>
        </div>
    `;

    // Refresh saved cocktails display
    displaySavedCocktails();
});

// Display Saved Cocktails
function displaySavedCocktails() {
    const grid = document.getElementById('saved-cocktails-grid');

    if (savedCocktails.length === 0) {
        grid.innerHTML = '<div class="empty-state">No saved cocktails yet. Create your first one above!</div>';
        return;
    }

    grid.innerHTML = '';

    savedCocktails.forEach(cocktail => {
        const card = document.createElement('div');
        card.className = 'cocktail-card';

        card.innerHTML = `
            <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
            <div class="cocktail-card-content">
                <h3>${cocktail.strDrink}</h3>
                <span class="category">Custom Creation</span>
                <p class="glass-type">Served in: ${cocktail.strGlass}</p>
            </div>
        `;

        card.addEventListener('click', () => showCustomCocktailDetail(cocktail));

        grid.appendChild(card);
    });
}

// Show Custom Cocktail Detail
function showCustomCocktailDetail(cocktail) {
    const detailContent = `
        <div class="cocktail-detail-header">
            <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
            <h2>${cocktail.strDrink}</h2>
        </div>
        <div class="cocktail-detail-body">
            <div class="cocktail-tags">
                <span class="tag">${cocktail.strCategory}</span>
                <span class="tag">${cocktail.strGlass}</span>
                <span class="tag">Your Creation</span>
            </div>

            <div class="ingredients-section">
                <h3>Ingredients</h3>
                ${cocktail.ingredients.map(ing => `
                    <div class="ingredient-item" data-ingredient="${ing.name}">
                        <span class="ingredient-name">${ing.name}</span>
                        <span class="ingredient-measure">${ing.measure}</span>
                    </div>
                `).join('')}
            </div>

            <div class="instructions-section">
                <h3>Instructions</h3>
                <p>${cocktail.strInstructions}</p>
            </div>

            <button onclick="deleteCocktail(${cocktail.id})" style="margin-top: 20px; padding: 12px 30px; background: #dc3545; color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 1em;">
                Delete This Cocktail
            </button>
        </div>
    `;

    document.getElementById('cocktail-detail').innerHTML = detailContent;

    // Add click handlers to ingredients
    document.querySelectorAll('.ingredient-item').forEach(item => {
        item.addEventListener('click', () => {
            const ingredientName = item.dataset.ingredient;
            showIngredientDetail(ingredientName);
        });
    });

    cocktailModal.style.display = 'block';
}

// Delete Cocktail
function deleteCocktail(id) {
    if (confirm('Are you sure you want to delete this cocktail?')) {
        savedCocktails = savedCocktails.filter(c => c.id !== id);
        localStorage.setItem('savedCocktails', JSON.stringify(savedCocktails));
        cocktailModal.style.display = 'none';
        displaySavedCocktails();
    }
}

// Show Loading
function showLoading() {
    resultsSection.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Mixing up some cocktails...</p>
        </div>
    `;
}

// Comparison System
function addToCompare(cocktail) {
    if (compareList.length >= MAX_COMPARE) {
        alert('You can compare up to 4 cocktails. Remove one first.');
        return;
    }
    const id = cocktail.idDrink || cocktail.id;
    if (compareList.find(c => (c.idDrink || c.id) === id)) {
        alert('This cocktail is already in your comparison.');
        return;
    }
    compareList.push(cocktail);
    updateCompareUI();
    updateCompareButtons();
}

function removeFromCompare(index) {
    compareList.splice(index, 1);
    updateCompareUI();
    updateCompareButtons();
}

function updateCompareButtons() {
    document.querySelectorAll('.compare-add-btn').forEach(btn => {
        const id = btn.dataset.cocktailId;
        const inList = compareList.find(c => String(c.idDrink || c.id) === id);
        btn.textContent = inList ? 'Added' : 'Compare';
        btn.disabled = !!inList;
    });
    // Update tab badge
    const compareTab = document.getElementById('tab-compare');
    if (compareTab) {
        compareTab.textContent = compareList.length > 0
            ? `Compare (${compareList.length})`
            : 'Compare';
    }
}

function getIngredients(cocktail) {
    if (cocktail.custom && cocktail.ingredients) {
        return cocktail.ingredients.map(ing => ({ name: ing.name, measure: ing.measure }));
    }
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const name = cocktail[`strIngredient${i}`];
        const measure = cocktail[`strMeasure${i}`];
        if (name) ingredients.push({ name, measure: measure || 'To taste' });
    }
    return ingredients;
}

function updateCompareUI() {
    const slotsContainer = document.getElementById('compare-slots');
    const tableContainer = document.getElementById('compare-table-container');
    const clearBtn = document.getElementById('clear-compare-btn');

    if (compareList.length === 0) {
        slotsContainer.innerHTML = '<div class="empty-state">No cocktails selected for comparison. Search for cocktails and click "Compare" to add them.</div>';
        tableContainer.style.display = 'none';
        clearBtn.style.display = 'none';
        return;
    }

    // Show selected cocktail slots
    slotsContainer.innerHTML = compareList.map((cocktail, i) => `
        <div class="compare-slot">
            <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
            <span>${cocktail.strDrink}</span>
            <button class="compare-remove-btn" data-index="${i}" aria-label="Remove ${cocktail.strDrink} from comparison">&times;</button>
        </div>
    `).join('');

    slotsContainer.querySelectorAll('.compare-remove-btn').forEach(btn => {
        btn.addEventListener('click', () => removeFromCompare(parseInt(btn.dataset.index)));
    });

    if (compareList.length < 2) {
        tableContainer.style.display = 'none';
        clearBtn.style.display = 'none';
        return;
    }

    // Build comparison table
    clearBtn.style.display = 'block';
    tableContainer.style.display = 'block';

    // Collect all unique ingredients
    const allIngredientSets = compareList.map(c => getIngredients(c));
    const allIngredientNames = [...new Set(allIngredientSets.flat().map(i => i.name))];

    const thead = document.getElementById('compare-thead');
    const tbody = document.getElementById('compare-tbody');

    thead.innerHTML = `<tr>
        <th>Attribute</th>
        ${compareList.map(c => `<th>${c.strDrink}</th>`).join('')}
    </tr>`;

    let rows = '';

    // Category row
    rows += `<tr><td><strong>Category</strong></td>${compareList.map(c =>
        `<td>${c.strCategory || 'N/A'}</td>`).join('')}</tr>`;

    // Glass row
    rows += `<tr><td><strong>Glass</strong></td>${compareList.map(c =>
        `<td>${c.strGlass || 'N/A'}</td>`).join('')}</tr>`;

    // Alcoholic row
    rows += `<tr><td><strong>Type</strong></td>${compareList.map(c =>
        `<td>${c.strAlcoholic || 'N/A'}</td>`).join('')}</tr>`;

    // Ingredient rows with highlighting for common ingredients
    allIngredientNames.forEach(ingName => {
        const inCount = allIngredientSets.filter(set => set.some(i => i.name === ingName)).length;
        const isCommon = inCount > 1;
        rows += `<tr class="${isCommon ? 'common-ingredient' : ''}">
            <td><strong>${ingName}</strong>${isCommon ? ' <span class="common-badge">Common</span>' : ''}</td>
            ${allIngredientSets.map(set => {
                const found = set.find(i => i.name === ingName);
                return `<td>${found ? found.measure : '—'}</td>`;
            }).join('')}
        </tr>`;
    });

    tbody.innerHTML = rows;
}

document.getElementById('clear-compare-btn').addEventListener('click', () => {
    compareList = [];
    updateCompareUI();
    updateCompareButtons();
});

// Ingredient Inventory System
const COMMON_INGREDIENTS = [
    // Spirits
    'Vodka', 'Gin', 'Rum', 'White rum', 'Dark rum', 'Tequila', 'Whiskey', 'Bourbon',
    'Scotch', 'Brandy', 'Cognac', 'Mezcal', 'Rye whiskey',
    // Liqueurs
    'Triple sec', 'Cointreau', 'Grand Marnier', 'Kahlua', 'Amaretto', 'Baileys irish cream',
    'Blue Curacao', 'Campari', 'Chambord', 'Chartreuse', 'Creme de Cacao', 'Creme de Menthe',
    'Drambuie', 'Frangelico', 'Galliano', 'Maraschino liqueur', 'Midori melon liqueur',
    'Sloe gin', 'Southern Comfort', 'St-Germain',
    // Vermouth & Wine
    'Dry Vermouth', 'Sweet Vermouth', 'Champagne', 'Prosecco', 'Red Wine', 'White Wine',
    // Mixers
    'Club soda', 'Tonic water', 'Ginger ale', 'Ginger beer', 'Cola', 'Lemon-lime soda',
    'Cranberry juice', 'Orange juice', 'Pineapple juice', 'Tomato juice', 'Grapefruit juice',
    'Apple juice', 'Coconut cream', 'Coconut milk', 'Milk', 'Cream', 'Half-and-half',
    // Citrus & Fruit
    'Lime juice', 'Lemon juice', 'Lime', 'Lemon', 'Orange',
    // Sweeteners & Syrups
    'Simple syrup', 'Sugar syrup', 'Grenadine', 'Honey', 'Agave syrup', 'Maple syrup',
    'Orgeat syrup', 'Sugar',
    // Bitters & Extras
    'Angostura bitters', 'Orange bitters', 'Peychaud\'s bitters',
    'Tabasco sauce', 'Worcestershire sauce',
    // Garnishes & Others
    'Mint', 'Basil', 'Salt', 'Pepper', 'Nutmeg', 'Cinnamon',
    'Maraschino cherry', 'Olive', 'Egg white', 'Egg'
];

let inventory = JSON.parse(localStorage.getItem('barInventory')) || [];

function initInventory() {
    const grid = document.getElementById('inventory-grid');
    renderInventoryGrid(COMMON_INGREDIENTS);

    document.getElementById('inventory-search').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = COMMON_INGREDIENTS.filter(i => i.toLowerCase().includes(query));
        renderInventoryGrid(filtered);
    });

    document.getElementById('what-can-i-make-btn').addEventListener('click', findMakeableCocktails);
    document.getElementById('copy-shopping-list').addEventListener('click', copyShoppingList);
}

function renderInventoryGrid(ingredients) {
    const grid = document.getElementById('inventory-grid');
    grid.innerHTML = ingredients.map(ing => {
        const checked = inventory.includes(ing) ? 'checked' : '';
        const id = `inv-${ing.replace(/[^a-zA-Z0-9]/g, '-')}`;
        return `<label class="inventory-item ${checked ? 'selected' : ''}" for="${id}">
            <input type="checkbox" id="${id}" value="${ing}" ${checked}>
            <span>${ing}</span>
        </label>`;
    }).join('');

    grid.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', () => {
            if (cb.checked) {
                if (!inventory.includes(cb.value)) inventory.push(cb.value);
            } else {
                inventory = inventory.filter(i => i !== cb.value);
            }
            localStorage.setItem('barInventory', JSON.stringify(inventory));
            cb.closest('.inventory-item').classList.toggle('selected', cb.checked);
        });
    });
}

async function findMakeableCocktails() {
    if (inventory.length === 0) {
        alert('Check off some ingredients first!');
        return;
    }

    const makeableSection = document.getElementById('makeable-results');
    const cocktailsDiv = document.getElementById('makeable-cocktails');
    const heading = document.getElementById('makeable-heading');
    const shoppingSection = document.getElementById('shopping-list-section');

    cocktailsDiv.innerHTML = '<div class="loading"><div class="spinner"></div><p>Searching cocktails...</p></div>';
    makeableSection.style.display = 'block';
    shoppingSection.style.display = 'none';

    // Search by each inventory ingredient (limit to first 5 for performance)
    const searchIngredients = inventory.slice(0, 5);
    const allCocktails = new Map();

    for (const ing of searchIngredients) {
        try {
            const resp = await fetch(`${API_BASE}/filter.php?i=${encodeURIComponent(ing)}`);
            const data = await resp.json();
            if (data.drinks) {
                for (const drink of data.drinks) {
                    if (!allCocktails.has(drink.idDrink)) {
                        allCocktails.set(drink.idDrink, { ...drink, matchedIngredients: [ing] });
                    } else {
                        allCocktails.get(drink.idDrink).matchedIngredients.push(ing);
                    }
                }
            }
        } catch (e) { /* skip failed fetches */ }
    }

    // Fetch full details for top matches (sorted by most matched ingredients)
    const sorted = [...allCocktails.values()].sort((a, b) => b.matchedIngredients.length - a.matchedIngredients.length);
    const top = sorted.slice(0, 12);

    const detailed = [];
    for (const drink of top) {
        try {
            const resp = await fetch(`${API_BASE}/lookup.php?i=${drink.idDrink}`);
            const data = await resp.json();
            if (data.drinks) {
                const full = data.drinks[0];
                const ings = getIngredients(full);
                const have = ings.filter(i => inventory.some(inv => inv.toLowerCase() === i.name.toLowerCase()));
                const missing = ings.filter(i => !inventory.some(inv => inv.toLowerCase() === i.name.toLowerCase()));
                detailed.push({ ...full, have, missing, totalIngredients: ings.length });
            }
        } catch (e) { /* skip */ }
    }

    // Sort: fully makeable first, then by fewest missing
    detailed.sort((a, b) => a.missing.length - b.missing.length);

    const perfect = detailed.filter(d => d.missing.length === 0);
    const partial = detailed.filter(d => d.missing.length > 0 && d.missing.length <= 2);

    heading.textContent = perfect.length > 0
        ? `You can make ${perfect.length} cocktail${perfect.length > 1 ? 's' : ''}!`
        : 'No perfect matches, but close ones below:';

    let html = '';

    if (perfect.length > 0) {
        html += '<h4 class="makeable-subheading">Perfect Matches</h4>';
        html += perfect.map(c => renderMakeableCard(c, true)).join('');
    }

    if (partial.length > 0) {
        html += '<h4 class="makeable-subheading">Almost There (missing 1-2 ingredients)</h4>';
        html += partial.map(c => renderMakeableCard(c, false)).join('');
    }

    if (perfect.length === 0 && partial.length === 0) {
        html = '<div class="empty-state">No matches found. Try adding more ingredients to your bar!</div>';
    }

    cocktailsDiv.innerHTML = html;

    // Build shopping list from partial matches
    if (partial.length > 0) {
        const missingMap = new Map();
        partial.forEach(c => {
            c.missing.forEach(m => {
                if (!missingMap.has(m.name)) missingMap.set(m.name, []);
                missingMap.get(m.name).push(c.strDrink);
            });
        });

        const shoppingList = document.getElementById('shopping-list');
        shoppingList.innerHTML = [...missingMap.entries()]
            .sort((a, b) => b[1].length - a[1].length)
            .map(([name, cocktails]) =>
                `<li><strong>${name}</strong> — unlocks: ${cocktails.join(', ')}</li>`
            ).join('');
        shoppingSection.style.display = 'block';
    }
}

function renderMakeableCard(cocktail, isPerfect) {
    return `<div class="makeable-card ${isPerfect ? 'perfect' : 'partial'}">
        <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
        <div class="makeable-card-info">
            <h4>${cocktail.strDrink}</h4>
            <p>${cocktail.have.length}/${cocktail.totalIngredients} ingredients</p>
            ${cocktail.missing.length > 0
                ? `<p class="missing-ingredients">Missing: ${cocktail.missing.map(m => m.name).join(', ')}</p>`
                : '<p class="all-good">You have everything!</p>'}
        </div>
    </div>`;
}

function copyShoppingList() {
    const items = document.querySelectorAll('#shopping-list li');
    const text = [...items].map(li => li.textContent).join('\n');
    navigator.clipboard.writeText(text).then(() => {
        alert('Shopping list copied to clipboard!');
    });
}

// Keyboard Navigation System
(function initKeyboardNavigation() {
    let focusedCardIndex = -1;

    // Close modals on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (ingredientModal.style.display === 'block') {
                ingredientModal.style.display = 'none';
                return;
            }
            if (cocktailModal.style.display === 'block') {
                cocktailModal.style.display = 'none';
                return;
            }
        }

        // Arrow key navigation for cocktail cards
        const cards = Array.from(resultsSection.querySelectorAll('.cocktail-card'));
        if (cards.length === 0) return;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            focusedCardIndex = Math.min(focusedCardIndex + 1, cards.length - 1);
            cards[focusedCardIndex].focus();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            focusedCardIndex = Math.max(focusedCardIndex - 1, 0);
            cards[focusedCardIndex].focus();
        } else if (e.key === 'Enter' && document.activeElement.classList.contains('cocktail-card')) {
            e.preventDefault();
            document.activeElement.click();
        }
    });

    // Track focus on cards
    resultsSection.addEventListener('focusin', (e) => {
        const card = e.target.closest('.cocktail-card');
        if (card) {
            const cards = Array.from(resultsSection.querySelectorAll('.cocktail-card'));
            focusedCardIndex = cards.indexOf(card);
        }
    });
})();

// Seasonal Cocktail Recommendations
const SEASONAL_DATA = {
    spring: {
        title: 'Spring Sips',
        description: 'Light, floral, and refreshing cocktails perfect for warming days.',
        cocktails: ['Mojito', 'French 75', 'Gimlet', 'Aperol Spritz', 'Tom Collins', 'Paloma'],
        icon: '🌸'
    },
    summer: {
        title: 'Summer Coolers',
        description: 'Tropical, fruity, and ice-cold drinks to beat the heat.',
        cocktails: ['Margarita', 'Pina Colada', 'Daiquiri', 'Mai Tai', 'Tequila Sunrise', 'Caipirinha'],
        icon: '☀️'
    },
    fall: {
        title: 'Autumn Warmers',
        description: 'Spiced, rich, and warming cocktails for cozy evenings.',
        cocktails: ['Old Fashioned', 'Manhattan', 'Whiskey Sour', 'Hot Toddy', 'Boulevardier', 'Amaretto Sour'],
        icon: '🍂'
    },
    winter: {
        title: 'Winter Classics',
        description: 'Bold, spirited, and warming cocktails for cold nights.',
        cocktails: ['Espresso Martini', 'Irish Coffee', 'Negroni', 'Rob Roy', 'Brandy Alexander', 'Eggnog'],
        icon: '❄️'
    }
};

function getCurrentSeason() {
    const month = new Date().getMonth(); // 0-11
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'fall';
    return 'winter';
}

async function loadSeasonalRecommendations() {
    const season = getCurrentSeason();
    const data = SEASONAL_DATA[season];

    document.getElementById('seasonal-title').textContent = `${data.icon} ${data.title}`;
    document.getElementById('seasonal-description').textContent = data.description;

    const grid = document.getElementById('seasonal-cocktails');
    grid.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

    const cocktails = [];
    for (const name of data.cocktails) {
        try {
            const resp = await fetch(`${API_BASE}/search.php?s=${encodeURIComponent(name)}`);
            const result = await resp.json();
            if (result.drinks && result.drinks[0]) {
                cocktails.push(result.drinks[0]);
            }
        } catch (e) { /* skip */ }
    }

    if (cocktails.length === 0) {
        grid.innerHTML = '';
        return;
    }

    grid.innerHTML = cocktails.map(c => `
        <div class="seasonal-card" tabindex="0" role="button" aria-label="View ${c.strDrink}" data-id="${c.idDrink}">
            <img src="${c.strDrinkThumb}" alt="${c.strDrink}">
            <div class="seasonal-card-overlay">
                <h4>${c.strDrink}</h4>
            </div>
        </div>
    `).join('');

    grid.querySelectorAll('.seasonal-card').forEach((card, i) => {
        card.addEventListener('click', () => showCocktailDetail(cocktails[i]));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') showCocktailDetail(cocktails[i]);
        });
    });
}

// PWA: Service Worker Registration & Install Prompt
let deferredInstallPrompt = null;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    showInstallBanner();
});

function showInstallBanner() {
    const banner = document.createElement('div');
    banner.className = 'install-banner';
    banner.innerHTML = `
        <span>Install Cocktail Mixologist for offline access!</span>
        <button id="install-btn" aria-label="Install app">Install</button>
        <button id="dismiss-install" aria-label="Dismiss">&times;</button>
    `;
    document.body.prepend(banner);

    document.getElementById('install-btn').addEventListener('click', () => {
        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.then(() => {
            deferredInstallPrompt = null;
            banner.remove();
        });
    });

    document.getElementById('dismiss-install').addEventListener('click', () => banner.remove());
}

// Initialize on load
window.addEventListener('load', () => {
    getRandomCocktail();
    loadSeasonalRecommendations();
});
