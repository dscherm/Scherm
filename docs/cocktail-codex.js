// =============================================================================
// COCKTAIL CODEX TAXONOMY
// Based on "Cocktail Codex" by Alex Day, Nick Fauchald, David Kaplan
// =============================================================================

/**
 * The 6 Root Cocktails - Foundational templates
 */
const RootCocktails = {
    OLD_FASHIONED: {
        id: 'old-fashioned',
        name: 'Old Fashioned',
        description: 'Spirit + Sugar + Bitters',
        template: ['Spirit', 'Sugar', 'Bitters'],
        baseSpirits: ['Bourbon', 'Rye whiskey', 'Brandy', 'Rum'],
        flavorProfile: ['strong', 'rich', 'aromatic', 'balanced'],
        color: '#D4AF37', // Gold
        examples: [
            { name: 'Classic Old Fashioned', spirit: 'Bourbon', variations: ['sugar cube', 'Angostura bitters', 'orange peel'] },
            { name: 'Oaxaca Old Fashioned', spirit: 'Mezcal', variations: ['agave nectar', 'mole bitters'] },
            { name: 'Rum Old Fashioned', spirit: 'Dark rum', variations: ['demerara', 'Angostura bitters'] }
        ]
    },
    MARTINI: {
        id: 'martini',
        name: 'Martini',
        description: 'Spirit + Vermouth',
        template: ['Spirit', 'Vermouth'],
        baseSpirits: ['Gin', 'Vodka'],
        flavorProfile: ['dry', 'botanical', 'sophisticated', 'spirit-forward'],
        color: '#98D8C8', // Mint
        examples: [
            { name: 'Classic Martini', spirit: 'Gin', variations: ['dry vermouth', 'olive'] },
            { name: 'Vodka Martini', spirit: 'Vodka', variations: ['dry vermouth', 'lemon twist'] },
            { name: 'Dirty Martini', spirit: 'Gin', variations: ['dry vermouth', 'olive brine'] }
        ]
    },
    DAIQUIRI: {
        id: 'daiquiri',
        name: 'Daiquiri',
        description: 'Spirit + Citrus + Sugar',
        template: ['Spirit', 'Citrus', 'Sugar'],
        baseSpirits: ['Light rum', 'Tequila', 'Gin', 'Vodka'],
        flavorProfile: ['bright', 'tart', 'refreshing', 'balanced'],
        color: '#FFE135', // Lemon
        examples: [
            { name: 'Classic Daiquiri', spirit: 'Light rum', variations: ['lime juice', 'simple syrup'] },
            { name: 'Hemingway Daiquiri', spirit: 'Light rum', variations: ['lime', 'grapefruit', 'maraschino'] },
            { name: 'Tommy\'s Margarita', spirit: 'Tequila', variations: ['lime juice', 'agave nectar'] }
        ]
    },
    SIDECAR: {
        id: 'sidecar',
        name: 'Sidecar',
        description: 'Spirit + Liqueur + Citrus',
        template: ['Spirit', 'Liqueur', 'Citrus'],
        baseSpirits: ['Brandy', 'Bourbon', 'Tequila', 'Rum'],
        flavorProfile: ['complex', 'citrus', 'sweet', 'aromatic'],
        color: '#FF6B35', // Orange
        examples: [
            { name: 'Classic Sidecar', spirit: 'Brandy', variations: ['Cointreau', 'lemon juice'] },
            { name: 'Margarita', spirit: 'Tequila', variations: ['Triple sec', 'lime juice'] },
            { name: 'White Lady', spirit: 'Gin', variations: ['Cointreau', 'lemon juice'] }
        ]
    },
    HIGHBALL: {
        id: 'highball',
        name: 'Whiskey Highball',
        description: 'Spirit + Carbonation',
        template: ['Spirit', 'Carbonation'],
        baseSpirits: ['Bourbon', 'Scotch', 'Gin', 'Vodka', 'Rum'],
        flavorProfile: ['refreshing', 'light', 'effervescent', 'crisp'],
        color: '#87CEEB', // Sky Blue
        examples: [
            { name: 'Whiskey Highball', spirit: 'Bourbon', variations: ['club soda', 'lemon twist'] },
            { name: 'Gin & Tonic', spirit: 'Gin', variations: ['tonic water', 'lime'] },
            { name: 'Rum & Coke', spirit: 'Dark rum', variations: ['Cola', 'lime'] }
        ]
    },
    FLIP: {
        id: 'flip',
        name: 'Flip',
        description: 'Spirit + Sugar + Egg + Spice',
        template: ['Spirit', 'Sugar', 'Egg', 'Spice'],
        baseSpirits: ['Bourbon', 'Dark rum', 'Brandy', 'Sherry'],
        flavorProfile: ['rich', 'creamy', 'indulgent', 'warming'],
        color: '#E6B89C', // Cream
        examples: [
            { name: 'Classic Flip', spirit: 'Bourbon', variations: ['simple syrup', 'whole egg', 'nutmeg'] },
            { name: 'Brandy Flip', spirit: 'Brandy', variations: ['simple syrup', 'whole egg', 'nutmeg'] },
            { name: 'Eggnog', spirit: 'Dark rum', variations: ['sugar', 'egg', 'cream', 'nutmeg'] }
        ]
    }
};

/**
 * Get all variations for a root cocktail from the API
 */
async function getVariationsForRoot(rootCocktail) {
    const variations = [];

    // Fetch examples for each base spirit
    for (const spirit of rootCocktail.baseSpirits) {
        try {
            const response = await fetch(`${API_BASE}/filter.php?i=${encodeURIComponent(spirit)}`);
            const data = await response.json();

            if (data.drinks) {
                // Get full details for first 5 drinks
                const detailed = await Promise.all(
                    data.drinks.slice(0, 5).map(drink => fetchCocktailById(drink.idDrink))
                );

                // Filter based on template match
                const matching = detailed.filter(d => d && matchesTemplate(d, rootCocktail));
                variations.push(...matching);
            }
        } catch (error) {
            console.error(`Error fetching variations for ${spirit}:`, error);
        }
    }

    return variations;
}

/**
 * Check if a cocktail matches a root template
 */
function matchesTemplate(cocktail, rootCocktail) {
    if (!cocktail) return false;

    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ing = cocktail[`strIngredient${i}`];
        if (ing) ingredients.push(ing.toLowerCase());
    }

    // Check template requirements
    switch (rootCocktail.id) {
        case 'old-fashioned':
            return ingredients.some(i => i.includes('bitter')) &&
                   ingredients.some(i => i.includes('sugar') || i.includes('syrup'));

        case 'martini':
            return ingredients.some(i => i.includes('vermouth'));

        case 'daiquiri':
            return ingredients.some(i => i.includes('lime') || i.includes('lemon')) &&
                   ingredients.some(i => i.includes('sugar') || i.includes('syrup'));

        case 'sidecar':
            return ingredients.some(i => i.includes('triple') || i.includes('cointreau') || i.includes('curaçao')) &&
                   ingredients.some(i => i.includes('lime') || i.includes('lemon'));

        case 'highball':
            return ingredients.some(i =>
                i.includes('soda') || i.includes('tonic') || i.includes('cola') ||
                i.includes('ginger') || i.includes('club')
            );

        case 'flip':
            return ingredients.some(i => i.includes('egg')) ||
                   ingredients.some(i => i.includes('cream'));

        default:
            return false;
    }
}

/**
 * Calculate similarity between a cocktail and a root template
 * Returns 0-1 score
 */
function calculateTemplateDistance(cocktail, rootCocktail) {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ing = cocktail[`strIngredient${i}`];
        if (ing) ingredients.push(ing);
    }

    // Analyze flavor profile match
    const cocktailProfile = analyzeCocktailFlavorProfile(ingredients);
    const rootProfile = rootCocktail.flavorProfile;

    // Calculate overlap
    const profileSet = new Set(cocktailProfile.map(f => f.flavor));
    const rootSet = new Set(rootProfile);

    const intersection = new Set([...profileSet].filter(x => rootSet.has(x)));
    const union = new Set([...profileSet, ...rootSet]);

    const similarity = intersection.size / union.size;

    // Invert to get distance (0 = identical, 1 = completely different)
    return 1 - similarity;
}

/**
 * Get ingredient categories for color coding
 */
function getIngredientCategory(ingredient) {
    const profile = FlavorProfiles[ingredient];
    if (!profile) return 'unknown';

    const category = profile.category;

    if (category === 'spirit') return 'spirit';
    if (category === 'citrus') return 'citrus';
    if (category === 'sweetener') return 'sweetener';
    if (category === 'carbonated') return 'carbonated';
    if (category === 'liqueur') return 'liqueur';
    if (category === 'bitters') return 'bitters';
    if (category === 'herb') return 'herb';
    if (category === 'spice') return 'spice';

    return 'modifier';
}

/**
 * Get color for ingredient category
 */
function getCategoryColor(category) {
    const colors = {
        spirit: '#FFA07A',      // Orange
        citrus: '#FFE135',      // Yellow
        sweetener: '#87CEEB',   // Light Blue
        carbonated: '#98D8C8',  // Mint
        liqueur: '#E6B89C',     // Cream
        bitters: '#8B4513',     // Brown
        herb: '#90EE90',        // Light Green
        spice: '#D2691E',       // Cinnamon
        modifier: '#DDA0DD',    // Plum
        unknown: '#999999'      // Gray
    };

    return colors[category] || colors.unknown;
}

/**
 * Get gradient ID for ingredient category
 */
function getCategoryGradientId(category) {
    return `${category}-gradient`;
}
