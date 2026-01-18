// API Configuration
const API_BASE = 'https://www.thecocktaildb.com/api/json/v1/1';

// State Management
let currentSearchType = 'name';
let savedCocktails = JSON.parse(localStorage.getItem('savedCocktails')) || [];
let currentCocktailIngredients = []; // Track ingredients when creating

// DOM Elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultsSection = document.getElementById('results-section');
const cocktailModal = document.getElementById('cocktail-modal');
const ingredientModal = document.getElementById('ingredient-modal');
const liquorSelection = document.getElementById('liquor-selection');

// =============================================================================
// TAB NAVIGATION
// =============================================================================
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.dataset.tab;

        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        document.getElementById(`${tabName}-tab`).classList.add('active');

        if (tabName === 'create') {
            displaySavedCocktails();
        }
    });
});

// =============================================================================
// SEARCH TYPE SELECTION
// =============================================================================
document.querySelectorAll('.search-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentSearchType = btn.dataset.type;

        document.querySelectorAll('.search-type-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

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

// Search Button
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

// =============================================================================
// SEARCH FUNCTIONS
// =============================================================================
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

// =============================================================================
// DISPLAY FUNCTIONS
// =============================================================================
function displayCocktails(cocktails) {
    resultsSection.innerHTML = '';

    cocktails.forEach(cocktail => {
        const card = createCocktailCard(cocktail);
        resultsSection.appendChild(card);
    });
}

function createCocktailCard(cocktail) {
    const card = document.createElement('div');
    card.className = 'cocktail-card';

    // Get cocktail type based on ingredients
    const ingredients = extractIngredients(cocktail).map(ing => ing.name);
    const cocktailType = suggestCocktailType(ingredients);

    card.innerHTML = `
        <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
        <div class="cocktail-card-content">
            <h3>${cocktail.strDrink}</h3>
            ${cocktail.strCategory ? `<span class="category">${cocktail.strCategory}</span>` : ''}
            ${cocktailType ? `<span class="category">${cocktailType.name}</span>` : ''}
            ${cocktail.strGlass ? `<p class="glass-type">Served in: ${cocktail.strGlass}</p>` : ''}
        </div>
    `;

    card.addEventListener('click', () => showCocktailDetail(cocktail));

    return card;
}

function extractIngredients(cocktail) {
    const ingredients = [];

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

    return ingredients;
}

// =============================================================================
// COCKTAIL DETAIL WITH FLAVOR ANALYSIS
// =============================================================================
function showCocktailDetail(cocktail) {
    const ingredients = extractIngredients(cocktail);
    const ingredientNames = ingredients.map(ing => ing.name);

    // Analyze flavor profile
    const flavorProfile = analyzeCocktailFlavorProfile(ingredientNames);
    const cocktailType = suggestCocktailType(ingredientNames);

    // Get compatibility matrix
    const compatibilityMatrix = [];
    for (let i = 0; i < ingredientNames.length; i++) {
        for (let j = i + 1; j < ingredientNames.length; j++) {
            const score = calculateCompatibilityScore(ingredientNames[i], ingredientNames[j]);
            if (score > 0) {
                compatibilityMatrix.push({
                    ing1: ingredientNames[i],
                    ing2: ingredientNames[j],
                    score: score
                });
            }
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
                ${cocktailType ? `<span class="tag">${cocktailType.name}</span>` : ''}
            </div>

            <div class="graph-section">
                <h3>Cocktail Structure</h3>
                <p class="section-hint">Node size shows ingredient proportion. Click to view details, double-click to explore pairings.</p>
                <div id="cocktail-graph-container" class="cocktail-graph-container"></div>
            </div>

            <div class="flavor-profile-section">
                <h3>Flavor Profile</h3>
                <div class="flavor-tags">
                    ${flavorProfile.slice(0, 5).map(f => `
                        <span class="flavor-tag" style="opacity: ${f.score / Math.max(...flavorProfile.map(x => x.score))}">
                            ${f.flavor} ${getStrengthIndicator(f.score)}
                        </span>
                    `).join('')}
                </div>
            </div>

            <div class="ingredients-section">
                <h3>Ingredients</h3>
                <p class="section-hint">Click any ingredient to see flavor pairings and alternatives</p>
                ${ingredients.map(ing => {
                    const profile = getFlavorProfile(ing.name);
                    return `
                        <div class="ingredient-item ${profile ? 'has-profile' : ''}" data-ingredient="${ing.name}">
                            <span class="ingredient-name">
                                ${ing.name}
                                ${profile ? '<span class="profile-indicator">🎯</span>' : ''}
                            </span>
                            <span class="ingredient-measure">${ing.measure}</span>
                        </div>
                    `;
                }).join('')}
            </div>

            ${compatibilityMatrix.length > 0 ? `
                <div class="pairing-section">
                    <h3>Flavor Synergies</h3>
                    <p class="section-hint">These ingredients complement each other beautifully</p>
                    ${compatibilityMatrix.slice(0, 5).map(pair => `
                        <div class="pairing-item">
                            <span>${pair.ing1} + ${pair.ing2}</span>
                            <span class="compatibility-score">${getCompatibilityBadge(pair.score)}</span>
                        </div>
                    `).join('')}
                </div>
            ` : ''}

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
            showIngredientDetail(ingredientName, ingredientNames);
        });
    });

    cocktailModal.style.display = 'block';

    // Create interactive graph visualization (after modal is displayed so container has dimensions)
    setTimeout(() => {
        createCocktailGraph(
            'cocktail-graph-container',
            cocktail.strDrink,
            ingredients,
            (ingredientName, profile) => {
                showIngredientDetail(ingredientName, ingredientNames);
            }
        );
    }, 100);
}

// =============================================================================
// INGREDIENT DETAIL WITH FLAVOR PAIRINGS
// =============================================================================
function showIngredientDetail(ingredientName, cocktailIngredients = []) {
    const normalized = normalizeIngredient(ingredientName);
    const profile = FlavorProfiles[normalized];

    if (!profile) {
        // Fallback for ingredients not in our database
        document.getElementById('ingredient-detail').innerHTML = `
            <div class="ingredient-detail-content">
                <h2>${ingredientName}</h2>
                <p class="empty-state">Flavor profile data not available for this ingredient yet.</p>
            </div>
        `;
        ingredientModal.style.display = 'block';
        return;
    }

    // Get flavor tags
    const flavorTags = Object.entries(profile.flavors)
        .sort((a, b) => b[1] - a[1])
        .map(([flavor, weight]) => ({ flavor, weight }));

    // Get ingredient recommendations
    const recommendations = getIngredientRecommendations([normalized], cocktailIngredients);

    // Get alternatives with similar flavor profiles
    const alternatives = Object.keys(FlavorProfiles)
        .filter(ing => ing !== normalized && FlavorProfiles[ing].category === profile.category)
        .map(ing => ({
            ingredient: ing,
            similarity: calculateJaccardSimilarity(ingredientName, ing)
        }))
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, 5);

    const detailContent = `
        <div class="ingredient-detail-content">
            <h2>${ingredientName}</h2>
            <span class="category-badge">${profile.category.toUpperCase()}</span>

            <div class="flavor-section">
                <h3>Flavor Profile</h3>
                <div class="flavor-tags">
                    ${flavorTags.map(f => `
                        <span class="flavor-tag" style="font-size: ${0.9 + (f.weight * 0.2)}em">
                            ${f.flavor} ${getStrengthIndicator(f.weight)}
                        </span>
                    `).join('')}
                </div>
            </div>

            <div class="ingredient-options">
                <button class="ingredient-option-btn active" data-option="pairings">
                    Best Pairings ${recommendations.length > 0 ? `(${recommendations.length})` : ''}
                </button>
                <button class="ingredient-option-btn" data-option="alternatives">
                    Alternatives ${alternatives.length > 0 ? `(${alternatives.length})` : ''}
                </button>
            </div>

            <div class="pairings-list active">
                <p class="section-hint">Ingredients that pair exceptionally well with ${ingredientName}</p>
                ${recommendations.length > 0 ? recommendations.slice(0, 10).map(rec => `
                    <div class="pairing-item">
                        <div>
                            <strong>${rec.ingredient}</strong>
                            <span class="pairing-category">${rec.category}</span>
                        </div>
                        <div>
                            ${getCompatibilityBadge(rec.score)}
                            ${rec.pairingCount > 1 ? `<span class="synergy-badge">+${rec.pairingCount} synergies</span>` : ''}
                        </div>
                    </div>
                `).join('') : '<p class="empty-state">No specific pairings available</p>'}
            </div>

            <div class="alternatives-list">
                <p class="section-hint">Similar ingredients you can substitute</p>
                ${alternatives.length > 0 ? `
                    <div id="alternatives-graph-container" class="alternatives-graph-container"></div>
                    ${alternatives.map(alt => `
                        <div class="alternative-item">
                            <div>
                                <strong>${alt.ingredient}</strong>
                                <span class="similarity-score">
                                    ${Math.round(alt.similarity * 100)}% flavor match
                                </span>
                            </div>
                        </div>
                    `).join('')}
                ` : '<p class="empty-state">No alternatives found</p>'}
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
            document.querySelector('.pairings-list').classList.toggle('active', option === 'pairings');
            document.querySelector('.alternatives-list').classList.toggle('active', option === 'alternatives');

            // Create alternatives graph when alternatives tab is shown
            if (option === 'alternatives' && alternatives.length > 0) {
                setTimeout(() => {
                    const graphContainer = document.getElementById('alternatives-graph-container');
                    if (graphContainer && !graphContainer.querySelector('svg')) {
                        createAlternativesGraph('alternatives-graph-container', ingredientName, alternatives);
                    }
                }, 100);
            }
        });
    });

    ingredientModal.style.display = 'block';
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
function getStrengthIndicator(score) {
    if (score >= 3) return '●●●';
    if (score >= 2) return '●●';
    if (score >= 1) return '●';
    return '';
}

function getCompatibilityBadge(score) {
    if (score >= 3) return '<span class="compat-badge excellent">Excellent Match</span>';
    if (score >= 2) return '<span class="compat-badge good">Good Match</span>';
    if (score >= 1) return '<span class="compat-badge okay">Compatible</span>';
    return '<span class="compat-badge neutral">Neutral</span>';
}

// =============================================================================
// MODAL HANDLERS
// =============================================================================
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

// =============================================================================
// CREATE YOUR OWN COCKTAIL WITH SMART SUGGESTIONS
// =============================================================================
const addIngredientBtn = document.getElementById('add-ingredient-btn');
const ingredientsList = document.getElementById('ingredients-list');
const saveCocktailBtn = document.getElementById('save-cocktail-btn');

// Function to update recommendations
function updateIngredientRecommendations() {
    // Get current ingredients
    currentCocktailIngredients = [];
    document.querySelectorAll('.ingredient-input-row .ingredient-name').forEach(input => {
        const val = input.value.trim();
        if (val && FlavorProfiles[val]) {
            currentCocktailIngredients.push(val);
        }
    });

    // Get recommendations
    if (currentCocktailIngredients.length > 0) {
        const recommendations = getIngredientRecommendations(currentCocktailIngredients);

        // Show recommendation panel
        let recommendPanel = document.getElementById('recommendation-panel');
        if (!recommendPanel) {
            recommendPanel = document.createElement('div');
            recommendPanel.id = 'recommendation-panel';
            recommendPanel.className = 'recommendation-panel';
            ingredientsList.parentElement.insertBefore(recommendPanel, addIngredientBtn);
        }

        if (recommendations.length > 0) {
            recommendPanel.innerHTML = `
                <h4>Suggested Ingredients</h4>
                <p class="section-hint">Based on your current ingredients, these would pair well:</p>
                <div class="recommendation-chips">
                    ${recommendations.slice(0, 8).map(rec => `
                        <button class="recommendation-chip" data-ingredient="${rec.ingredient}">
                            ${rec.ingredient} ${getCompatibilityBadge(rec.score)}
                        </button>
                    `).join('')}
                </div>
            `;

            // Add click handlers
            recommendPanel.querySelectorAll('.recommendation-chip').forEach(chip => {
                chip.addEventListener('click', (e) => {
                    e.preventDefault();
                    const ingredient = chip.dataset.ingredient;

                    // Find empty input or create new one
                    const emptyInput = Array.from(document.querySelectorAll('.ingredient-input-row .ingredient-name'))
                        .find(input => !input.value.trim());

                    if (emptyInput) {
                        emptyInput.value = ingredient;
                    } else {
                        addIngredientBtn.click();
                        const newInput = document.querySelector('.ingredient-input-row:last-child .ingredient-name');
                        if (newInput) newInput.value = ingredient;
                    }

                    updateIngredientRecommendations();
                });
            });
        } else {
            recommendPanel.innerHTML = '';
        }
    }
}

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
        updateIngredientRecommendations();
    });

    // Add input handler for recommendations
    row.querySelector('.ingredient-name').addEventListener('input', debounce(updateIngredientRecommendations, 500));
});

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Save cocktail
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

    // Analyze cocktail
    const ingredientNames = ingredients.map(i => i.name);
    const cocktailType = suggestCocktailType(ingredientNames);
    const flavorProfile = analyzeCocktailFlavorProfile(ingredientNames);

    // Create cocktail object
    const newCocktail = {
        id: Date.now(),
        strDrink: name,
        strGlass: glass,
        strInstructions: instructions || 'Mix ingredients as desired.',
        strDrinkThumb: imageUrl || 'https://www.thecocktaildb.com/images/media/drink/default.jpg',
        strCategory: cocktailType ? cocktailType.name : 'Custom',
        strAlcoholic: 'Unknown',
        ingredients: ingredients,
        flavorProfile: flavorProfile,
        custom: true
    };

    // Save to local storage
    savedCocktails.push(newCocktail);
    localStorage.setItem('savedCocktails', JSON.stringify(savedCocktails));

    // Show success message
    alert(`🍹 ${name} has been saved as a ${cocktailType ? cocktailType.name : 'Custom'} cocktail!`);

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

    // Clear recommendations
    const recommendPanel = document.getElementById('recommendation-panel');
    if (recommendPanel) recommendPanel.innerHTML = '';

    // Refresh saved cocktails display
    displaySavedCocktails();
});

// =============================================================================
// SAVED COCKTAILS DISPLAY
// =============================================================================
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
                <span class="category">${cocktail.strCategory}</span>
                <p class="glass-type">Served in: ${cocktail.strGlass}</p>
            </div>
        `;

        card.addEventListener('click', () => showCustomCocktailDetail(cocktail));

        grid.appendChild(card);
    });
}

function showCustomCocktailDetail(cocktail) {
    const ingredientNames = cocktail.ingredients.map(i => i.name);
    const flavorProfile = cocktail.flavorProfile || analyzeCocktailFlavorProfile(ingredientNames);

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

            <div class="graph-section">
                <h3>Cocktail Structure</h3>
                <p class="section-hint">Node size shows ingredient proportion. Click to view details, double-click to explore pairings.</p>
                <div id="cocktail-graph-container" class="cocktail-graph-container"></div>
            </div>

            ${flavorProfile && flavorProfile.length > 0 ? `
                <div class="flavor-profile-section">
                    <h3>Flavor Profile</h3>
                    <div class="flavor-tags">
                        ${flavorProfile.slice(0, 5).map(f => `
                            <span class="flavor-tag">
                                ${f.flavor} ${getStrengthIndicator(f.score)}
                            </span>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

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

            <button onclick="deleteCocktail(${cocktail.id})" class="delete-btn">
                Delete This Cocktail
            </button>
        </div>
    `;

    document.getElementById('cocktail-detail').innerHTML = detailContent;

    // Add click handlers to ingredients
    document.querySelectorAll('.ingredient-item').forEach(item => {
        item.addEventListener('click', () => {
            const ingredientName = item.dataset.ingredient;
            showIngredientDetail(ingredientName, ingredientNames);
        });
    });

    cocktailModal.style.display = 'block';

    // Create interactive graph visualization
    setTimeout(() => {
        createCocktailGraph(
            'cocktail-graph-container',
            cocktail.strDrink,
            cocktail.ingredients,
            (ingredientName, profile) => {
                showIngredientDetail(ingredientName, ingredientNames);
            }
        );
    }, 100);
}

function deleteCocktail(id) {
    if (confirm('Are you sure you want to delete this cocktail?')) {
        savedCocktails = savedCocktails.filter(c => c.id !== id);
        localStorage.setItem('savedCocktails', JSON.stringify(savedCocktails));
        cocktailModal.style.display = 'none';
        displaySavedCocktails();
    }
}

// =============================================================================
// LOADING STATE
// =============================================================================
function showLoading() {
    resultsSection.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Analyzing flavor profiles and mixing cocktails...</p>
        </div>
    `;
}

// =============================================================================
// INITIALIZE
// =============================================================================
window.addEventListener('load', () => {
    getRandomCocktail();

    // Add input listener to first ingredient field
    const firstInput = document.querySelector('.ingredient-name');
    if (firstInput) {
        firstInput.addEventListener('input', debounce(updateIngredientRecommendations, 500));
    }
});
