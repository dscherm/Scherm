// =============================================================================
// FLAVOR PAIRING SYSTEM - Based on Flavor Bible methodology
// =============================================================================
// Weight Scale: 0 = incompatible, 1 = compatible, 2 = good pairing, 3 = excellent pairing

// =============================================================================
// INGREDIENT NORMALIZATION SYSTEM
// =============================================================================

/**
 * Common ingredient modifiers to strip when normalizing
 */
const INGREDIENT_MODIFIERS = [
    'juice', 'fresh', 'dried', 'extract', 'syrup', 'liqueur', 'concentrate',
    'zest', 'peel', 'wedge', 'slice', 'twist', 'leaf', 'leaves',
    'ground', 'whole', 'crushed', 'muddled', 'infused',
    'simple', 'homemade', 'organic', 'premium', 'top shelf',
    'squeezed', 'squeezed', 'pure', 'natural'
];

/**
 * Ingredient aliases - maps variations to canonical names in FlavorProfiles
 */
const INGREDIENT_ALIASES = {
    // Citrus variations
    'lime': 'Lime juice',
    'lemon': 'Lemon juice',
    'orange': 'Orange juice',
    'grapefruit': 'Grapefruit juice',
    'lemon peel': 'Lemon juice',
    'lime peel': 'Lime juice',
    'orange peel': 'Orange juice',

    // Spirits
    'white rum': 'Light rum',
    'silver rum': 'Light rum',
    'gold rum': 'Dark rum',
    'aged rum': 'Dark rum',
    'spiced rum': 'Dark rum',
    'whisky': 'Bourbon',
    'rye': 'Rye whiskey',
    'scotch': 'Bourbon',
    'blended scotch': 'Bourbon',
    'tequila': 'Tequila',
    'mezcal': 'Tequila',
    'cognac': 'Brandy',
    'armagnac': 'Brandy',

    // Sweeteners
    'sugar': 'Simple syrup',
    'simple': 'Simple syrup',
    'syrup': 'Simple syrup',
    'agave': 'Simple syrup',
    'agave nectar': 'Simple syrup',
    'honey': 'Simple syrup',
    'demerara': 'Simple syrup',

    // Carbonated
    'soda': 'Club soda',
    'soda water': 'Club soda',
    'sparkling water': 'Club soda',
    'tonic': 'Tonic water',
    'ginger ale': 'Ginger beer',
    'coke': 'Cola',
    'coca cola': 'Cola',

    // Liqueurs
    'curacao': 'Triple sec',
    'cointreau': 'Triple sec',
    'grand marnier': 'Triple sec',
    'kahlua': 'Coffee liqueur',
    'tia maria': 'Coffee liqueur',
    'amaretto': 'Almond liqueur',
    'chambord': 'Raspberry liqueur',
    'baileys': 'Irish cream',
    'irish cream': 'Irish cream',

    // Bitters
    'angostura': 'Bitters',
    'angostura bitters': 'Bitters',
    'peychauds': 'Bitters',
    'orange bitters': 'Bitters',

    // Herbs & Garnish
    'mint leaf': 'Mint',
    'mint leaves': 'Mint',
    'fresh mint': 'Mint',
    'basil leaf': 'Basil',
    'basil leaves': 'Basil',
    'rosemary sprig': 'Rosemary',

    // Vermouth
    'dry vermouth': 'Vermouth',
    'sweet vermouth': 'Vermouth',
    'bianco vermouth': 'Vermouth'
};

/**
 * Normalize ingredient name by removing modifiers and converting to canonical form
 */
function normalizeIngredient(ingredient) {
    if (!ingredient) return null;

    let normalized = ingredient.toLowerCase().trim();

    // Check if there's a direct alias match first
    if (INGREDIENT_ALIASES[normalized]) {
        return INGREDIENT_ALIASES[normalized];
    }

    // Remove common modifiers
    INGREDIENT_MODIFIERS.forEach(modifier => {
        const regex = new RegExp(`\\b${modifier}\\b`, 'gi');
        normalized = normalized.replace(regex, '').trim();
    });

    // Remove extra whitespace
    normalized = normalized.replace(/\s+/g, ' ').trim();

    // Check aliases again after normalization
    if (INGREDIENT_ALIASES[normalized]) {
        return INGREDIENT_ALIASES[normalized];
    }

    // Try to find a case-insensitive match in FlavorProfiles
    const profileKeys = Object.keys(FlavorProfiles);
    const exactMatch = profileKeys.find(key => key.toLowerCase() === normalized);
    if (exactMatch) return exactMatch;

    // Try partial matching - find the best match
    const partialMatch = profileKeys.find(key => {
        const keyLower = key.toLowerCase();
        return keyLower.includes(normalized) || normalized.includes(keyLower);
    });
    if (partialMatch) return partialMatch;

    // Return original if no match found
    return ingredient;
}

/**
 * Get flavor profile for an ingredient with normalization
 */
function getFlavorProfile(ingredient) {
    const normalized = normalizeIngredient(ingredient);
    return FlavorProfiles[normalized] || null;
}

// =============================================================================
// COCKTAIL TYPE TAXONOMY
// =============================================================================
const CocktailTypes = {
    'CLASSIC': {
        name: 'Classic',
        description: 'Time-tested cocktails from the golden age',
        relatedTypes: ['SPIRIT_FORWARD', 'SOUR'],
        flavorProfile: ['balanced', 'sophisticated', 'aromatic']
    },
    'TROPICAL': {
        name: 'Tropical',
        description: 'Fruity, vacation-inspired cocktails',
        relatedTypes: ['TIKI', 'REFRESHING'],
        flavorProfile: ['sweet', 'fruity', 'exotic', 'refreshing']
    },
    'TIKI': {
        name: 'Tiki',
        description: 'Complex tropical cocktails with multiple rums',
        relatedTypes: ['TROPICAL', 'EXOTIC'],
        flavorProfile: ['complex', 'fruity', 'spiced', 'layered']
    },
    'SOUR': {
        name: 'Sour',
        description: 'Spirit, citrus, and sweetener',
        relatedTypes: ['CLASSIC', 'REFRESHING'],
        flavorProfile: ['tart', 'balanced', 'bright', 'citrus']
    },
    'SPIRIT_FORWARD': {
        name: 'Spirit-Forward',
        description: 'Spirit-dominant cocktails with minimal mixers',
        relatedTypes: ['CLASSIC', 'BITTER'],
        flavorProfile: ['strong', 'complex', 'aromatic', 'bold']
    },
    'REFRESHING': {
        name: 'Refreshing',
        description: 'Light, easy-drinking cocktails',
        relatedTypes: ['SOUR', 'TROPICAL', 'FIZZY'],
        flavorProfile: ['light', 'crisp', 'refreshing', 'bright']
    },
    'FIZZY': {
        name: 'Fizzy',
        description: 'Carbonated cocktails',
        relatedTypes: ['REFRESHING', 'LIGHT'],
        flavorProfile: ['bubbly', 'light', 'effervescent']
    },
    'CREAMY': {
        name: 'Creamy',
        description: 'Dessert-like cocktails with cream or coconut',
        relatedTypes: ['DESSERT', 'INDULGENT'],
        flavorProfile: ['rich', 'smooth', 'indulgent', 'sweet']
    },
    'BITTER': {
        name: 'Bitter',
        description: 'Cocktails featuring bitters and amari',
        relatedTypes: ['SPIRIT_FORWARD', 'APERITIF'],
        flavorProfile: ['bitter', 'complex', 'herbal', 'digestive']
    },
    'SPICY': {
        name: 'Spicy',
        description: 'Cocktails with heat and spice',
        relatedTypes: ['BOLD', 'EXOTIC'],
        flavorProfile: ['spicy', 'bold', 'warming', 'intense']
    }
};

// =============================================================================
// INGREDIENT FLAVOR PROFILES
// =============================================================================
const FlavorProfiles = {
    // SPIRITS
    'Vodka': {
        flavors: { neutral: 3, clean: 3, smooth: 2 },
        category: 'spirit',
        pairings: {
            'Lemon juice': 3, 'Lime juice': 3, 'Cranberry juice': 3,
            'Orange juice': 2, 'Tomato juice': 2, 'Ginger beer': 2,
            'Coffee liqueur': 3, 'Triple sec': 2, 'Vermouth': 2,
            'Mint': 2, 'Cucumber': 3, 'Basil': 2
        }
    },
    'Gin': {
        flavors: { botanical: 3, juniper: 3, herbal: 2, citrus: 2, floral: 2 },
        category: 'spirit',
        pairings: {
            'Lemon juice': 3, 'Lime juice': 3, 'Tonic water': 3,
            'Vermouth': 3, 'Cucumber': 3, 'Basil': 3,
            'Elderflower': 3, 'Mint': 2, 'Rosemary': 2,
            'Grapefruit juice': 2, 'Campari': 2
        }
    },
    'Light rum': {
        flavors: { sweet: 2, clean: 2, sugarcane: 2, light: 3 },
        category: 'spirit',
        pairings: {
            'Lime juice': 3, 'Mint': 3, 'Coconut cream': 3,
            'Pineapple juice': 3, 'Orange juice': 2, 'Passion fruit': 3,
            'Simple syrup': 2, 'Club soda': 2, 'Ginger': 2
        }
    },
    'Dark rum': {
        flavors: { molasses: 3, caramel: 2, spiced: 2, rich: 3, oak: 2 },
        category: 'spirit',
        pairings: {
            'Lime juice': 3, 'Pineapple juice': 3, 'Orange juice': 2,
            'Coconut cream': 2, 'Ginger beer': 3, 'Cinnamon': 2,
            'Allspice': 2, 'Coffee': 2, 'Cola': 2
        }
    },
    'Tequila': {
        flavors: { agave: 3, earthy: 2, peppery: 2, citrus: 1, vegetal: 2 },
        category: 'spirit',
        pairings: {
            'Lime juice': 3, 'Orange juice': 2, 'Grapefruit juice': 3,
            'Triple sec': 3, 'Jalapeño': 3, 'Cilantro': 2,
            'Agave nectar': 3, 'Pineapple juice': 2, 'Mango': 2
        }
    },
    'Mezcal': {
        flavors: { smoky: 3, earthy: 3, agave: 2, complex: 3 },
        category: 'spirit',
        pairings: {
            'Lime juice': 3, 'Grapefruit juice': 3, 'Pineapple juice': 2,
            'Jalapeño': 3, 'Cucumber': 2, 'Cilantro': 2,
            'Agave nectar': 2, 'Orange juice': 2
        }
    },
    'Bourbon': {
        flavors: { vanilla: 3, caramel: 3, oak: 2, sweet: 2, corn: 2 },
        category: 'spirit',
        pairings: {
            'Lemon juice': 2, 'Orange': 2, 'Bitters': 3,
            'Simple syrup': 2, 'Maple syrup': 3, 'Cherry': 2,
            'Ginger beer': 2, 'Apple': 2, 'Cinnamon': 2
        }
    },
    'Rye whiskey': {
        flavors: { spicy: 3, peppery: 2, bold: 3, dry: 2 },
        category: 'spirit',
        pairings: {
            'Lemon juice': 2, 'Bitters': 3, 'Vermouth': 3,
            'Simple syrup': 2, 'Orange': 2, 'Cherry': 2,
            'Ginger': 2, 'Apple': 2
        }
    },
    'Scotch': {
        flavors: { smoky: 2, peaty: 2, malty: 2, oak: 2, complex: 3 },
        category: 'spirit',
        pairings: {
            'Lemon juice': 2, 'Honey': 3, 'Ginger': 2,
            'Orange': 2, 'Bitters': 2, 'Apple': 2
        }
    },
    'Brandy': {
        flavors: { fruity: 3, grape: 3, oak: 2, warming: 2, smooth: 2 },
        category: 'spirit',
        pairings: {
            'Lemon juice': 2, 'Orange': 3, 'Apple': 2,
            'Simple syrup': 2, 'Bitters': 2, 'Nutmeg': 2,
            'Cinnamon': 2
        }
    },

    // LIQUEURS
    'Triple sec': {
        flavors: { orange: 3, sweet: 2, citrus: 3, bright: 2 },
        category: 'liqueur',
        pairings: {
            'Tequila': 3, 'Vodka': 2, 'Gin': 2,
            'Lime juice': 3, 'Lemon juice': 2, 'Cranberry juice': 2
        }
    },
    'Coffee liqueur': {
        flavors: { coffee: 3, sweet: 2, rich: 2, dark: 2 },
        category: 'liqueur',
        pairings: {
            'Vodka': 3, 'Dark rum': 2, 'Cream': 3,
            'Vanilla': 2, 'Chocolate': 2
        }
    },
    'Amaretto': {
        flavors: { almond: 3, sweet: 3, nutty: 3, marzipan: 2 },
        category: 'liqueur',
        pairings: {
            'Bourbon': 2, 'Vodka': 2, 'Cream': 2,
            'Orange juice': 2, 'Lemon juice': 2, 'Cherry': 3
        }
    },
    'Campari': {
        flavors: { bitter: 3, herbal: 2, citrus: 2, complex: 2 },
        category: 'liqueur',
        pairings: {
            'Gin': 3, 'Vermouth': 3, 'Orange juice': 2,
            'Grapefruit juice': 3, 'Prosecco': 2, 'Club soda': 2
        }
    },

    // CITRUS
    'Lemon juice': {
        flavors: { sour: 3, citrus: 3, bright: 3, tart: 3, fresh: 3 },
        category: 'citrus',
        pairings: {
            'Vodka': 3, 'Gin': 3, 'Bourbon': 2, 'Rum': 2,
            'Simple syrup': 3, 'Honey': 3, 'Mint': 2,
            'Berries': 2, 'Elderflower': 3
        }
    },
    'Lime juice': {
        flavors: { sour: 3, citrus: 3, bright: 3, tart: 3, tropical: 2 },
        category: 'citrus',
        pairings: {
            'Tequila': 3, 'Rum': 3, 'Vodka': 3, 'Gin': 3,
            'Mint': 3, 'Simple syrup': 3, 'Coconut': 3,
            'Jalapeño': 2, 'Cucumber': 2, 'Ginger': 2
        }
    },
    'Orange juice': {
        flavors: { citrus: 3, sweet: 2, fruity: 3, bright: 2 },
        category: 'citrus',
        pairings: {
            'Vodka': 3, 'Tequila': 2, 'Champagne': 2,
            'Cranberry juice': 2, 'Grenadine': 2, 'Pineapple juice': 2
        }
    },
    'Grapefruit juice': {
        flavors: { citrus: 3, bitter: 2, tart: 3, refreshing: 3 },
        category: 'citrus',
        pairings: {
            'Gin': 3, 'Tequila': 3, 'Mezcal': 3, 'Vodka': 2,
            'Campari': 3, 'Elderflower': 2, 'Rosemary': 2,
            'Salt': 2
        }
    },

    // TROPICAL JUICES
    'Pineapple juice': {
        flavors: { tropical: 3, sweet: 2, fruity: 3, tangy: 2 },
        category: 'juice',
        pairings: {
            'Rum': 3, 'Tequila': 2, 'Vodka': 2,
            'Coconut cream': 3, 'Lime juice': 2, 'Orange juice': 2,
            'Mango': 2, 'Jalapeño': 2
        }
    },
    'Coconut cream': {
        flavors: { creamy: 3, tropical: 3, rich: 3, sweet: 2 },
        category: 'mixer',
        pairings: {
            'Rum': 3, 'Pineapple juice': 3, 'Lime juice': 2,
            'Coffee liqueur': 2, 'Vanilla': 2
        }
    },
    'Mango': {
        flavors: { tropical: 3, sweet: 3, fruity: 3, lush: 2 },
        category: 'fruit',
        pairings: {
            'Rum': 2, 'Tequila': 2, 'Vodka': 2,
            'Lime juice': 3, 'Pineapple juice': 2, 'Coconut': 2,
            'Jalapeño': 3, 'Mint': 2
        }
    },
    'Passion fruit': {
        flavors: { tropical: 3, tart: 3, exotic: 3, aromatic: 2 },
        category: 'fruit',
        pairings: {
            'Rum': 3, 'Vodka': 2, 'Champagne': 2,
            'Pineapple juice': 2, 'Lime juice': 2, 'Vanilla': 2
        }
    },

    // OTHER JUICES
    'Cranberry juice': {
        flavors: { tart: 3, fruity: 2, berry: 3, bright: 2 },
        category: 'juice',
        pairings: {
            'Vodka': 3, 'Gin': 2, 'Orange juice': 2,
            'Lime juice': 2, 'Ginger': 2, 'Rosemary': 2
        }
    },
    'Tomato juice': {
        flavors: { savory: 3, umami: 2, vegetal: 2 },
        category: 'juice',
        pairings: {
            'Vodka': 3, 'Hot sauce': 3, 'Worcestershire': 3,
            'Celery': 3, 'Lemon juice': 2, 'Horseradish': 2,
            'Black pepper': 2
        }
    },

    // HERBS & AROMATICS
    'Mint': {
        flavors: { herbal: 3, fresh: 3, cooling: 3, bright: 2 },
        category: 'herb',
        pairings: {
            'Rum': 3, 'Bourbon': 2, 'Gin': 2,
            'Lime juice': 3, 'Lemon juice': 2, 'Simple syrup': 3,
            'Watermelon': 3, 'Cucumber': 3, 'Berries': 2
        }
    },
    'Basil': {
        flavors: { herbal: 3, aromatic: 3, peppery: 2, fresh: 3 },
        category: 'herb',
        pairings: {
            'Gin': 3, 'Vodka': 2, 'Strawberry': 3,
            'Lemon juice': 3, 'Lime juice': 2, 'Cucumber': 2,
            'Watermelon': 2, 'Tomato': 3
        }
    },
    'Rosemary': {
        flavors: { herbal: 3, piney: 3, earthy: 2, aromatic: 3 },
        category: 'herb',
        pairings: {
            'Gin': 3, 'Vodka': 2, 'Grapefruit juice': 3,
            'Lemon juice': 2, 'Cranberry juice': 2, 'Honey': 2
        }
    },
    'Cilantro': {
        flavors: { herbal: 3, citrusy: 2, fresh: 3, bright: 2 },
        category: 'herb',
        pairings: {
            'Tequila': 3, 'Mezcal': 2, 'Lime juice': 3,
            'Jalapeño': 3, 'Cucumber': 2, 'Pineapple juice': 2
        }
    },
    'Cucumber': {
        flavors: { fresh: 3, clean: 3, vegetal: 2, cooling: 3 },
        category: 'vegetable',
        pairings: {
            'Gin': 3, 'Vodka': 3, 'Lime juice': 2,
            'Mint': 3, 'Basil': 2, 'Elderflower': 2
        }
    },

    // SPICES
    'Jalapeño': {
        flavors: { spicy: 3, hot: 3, vegetal: 2, bold: 3 },
        category: 'spice',
        pairings: {
            'Tequila': 3, 'Mezcal': 3, 'Lime juice': 3,
            'Pineapple juice': 3, 'Mango': 3, 'Cilantro': 2,
            'Cucumber': 2
        }
    },
    'Ginger': {
        flavors: { spicy: 3, warming: 3, zingy: 3, aromatic: 2 },
        category: 'spice',
        pairings: {
            'Bourbon': 2, 'Rum': 2, 'Vodka': 2,
            'Lemon juice': 2, 'Lime juice': 2, 'Honey': 3,
            'Apple': 2, 'Pear': 2
        }
    },
    'Cinnamon': {
        flavors: { warm: 3, spiced: 3, sweet: 2, aromatic: 3 },
        category: 'spice',
        pairings: {
            'Bourbon': 3, 'Dark rum': 2, 'Brandy': 2,
            'Apple': 3, 'Orange': 2, 'Vanilla': 2,
            'Coffee': 2
        }
    },

    // CARBONATED
    'Tonic water': {
        flavors: { bitter: 2, quinine: 3, crisp: 3, bubbly: 3 },
        category: 'carbonated',
        pairings: {
            'Gin': 3, 'Vodka': 2, 'Lemon juice': 2,
            'Lime juice': 2, 'Cucumber': 2, 'Elderflower': 2
        }
    },
    'Ginger beer': {
        flavors: { spicy: 2, ginger: 3, sweet: 2, bubbly: 3 },
        category: 'carbonated',
        pairings: {
            'Vodka': 2, 'Rum': 3, 'Bourbon': 2,
            'Lime juice': 3, 'Mint': 2
        }
    },
    'Club soda': {
        flavors: { neutral: 3, bubbly: 3, crisp: 3 },
        category: 'carbonated',
        pairings: {
            'Vodka': 2, 'Gin': 2, 'Rum': 2,
            'Lemon juice': 2, 'Lime juice': 2, 'Mint': 2
        }
    },
    'Prosecco': {
        flavors: { bubbly: 3, fruity: 2, crisp: 3, light: 3 },
        category: 'wine',
        pairings: {
            'Orange juice': 2, 'Peach': 3, 'Elderflower': 2,
            'Aperol': 3, 'Strawberry': 2
        }
    },

    // SWEETENERS
    'Simple syrup': {
        flavors: { sweet: 3, neutral: 3 },
        category: 'sweetener',
        pairings: {
            'All spirits': 2, 'Lemon juice': 3, 'Lime juice': 3,
            'Mint': 2, 'Berries': 2
        }
    },
    'Honey': {
        flavors: { sweet: 3, floral: 2, complex: 2 },
        category: 'sweetener',
        pairings: {
            'Bourbon': 3, 'Scotch': 3, 'Gin': 2,
            'Lemon juice': 3, 'Ginger': 3, 'Lavender': 2
        }
    },
    'Agave nectar': {
        flavors: { sweet: 3, agave: 2, smooth: 2 },
        category: 'sweetener',
        pairings: {
            'Tequila': 3, 'Mezcal': 3, 'Lime juice': 3
        }
    },

    // BITTERS & FORTIFIED
    'Angostura bitters': {
        flavors: { bitter: 3, spiced: 2, aromatic: 3, complex: 3 },
        category: 'bitters',
        pairings: {
            'Bourbon': 3, 'Rye whiskey': 3, 'Rum': 2,
            'Orange': 2, 'Cherry': 2, 'Simple syrup': 2
        }
    },
    'Vermouth': {
        flavors: { herbal: 3, fortified: 3, botanical: 2, aromatic: 2 },
        category: 'fortified',
        pairings: {
            'Gin': 3, 'Vodka': 2, 'Campari': 3,
            'Orange': 2, 'Olives': 2
        }
    }
};

// =============================================================================
// FLAVOR PAIRING ALGORITHMS
// =============================================================================

/**
 * Calculate Jaccard similarity between two ingredients
 * Returns a score from 0 to 1
 */
function calculateJaccardSimilarity(ingredient1, ingredient2) {
    const normalized1 = normalizeIngredient(ingredient1);
    const normalized2 = normalizeIngredient(ingredient2);
    const profile1 = FlavorProfiles[normalized1];
    const profile2 = FlavorProfiles[normalized2];

    if (!profile1 || !profile2) return 0;

    const flavors1 = new Set(Object.keys(profile1.flavors));
    const flavors2 = new Set(Object.keys(profile2.flavors));

    const intersection = new Set([...flavors1].filter(x => flavors2.has(x)));
    const union = new Set([...flavors1, ...flavors2]);

    return intersection.size / union.size;
}

/**
 * Calculate weighted compatibility score between two ingredients
 * Considers direct pairings from Flavor Bible-style data
 * Returns a score from 0 to 3
 */
function calculateCompatibilityScore(ingredient1, ingredient2) {
    const normalized1 = normalizeIngredient(ingredient1);
    const normalized2 = normalizeIngredient(ingredient2);
    const profile1 = FlavorProfiles[normalized1];
    const profile2 = FlavorProfiles[normalized2];

    if (!profile1 || !profile2) return 0;

    // Check direct pairing (using normalized names)
    if (profile1.pairings && profile1.pairings[normalized2]) {
        return profile1.pairings[normalized2];
    }

    // Check reverse pairing (using normalized names)
    if (profile2.pairings && profile2.pairings[normalized1]) {
        return profile2.pairings[normalized1];
    }

    // Fall back to Jaccard similarity
    const jaccardScore = calculateJaccardSimilarity(ingredient1, ingredient2);
    return Math.round(jaccardScore * 3); // Convert to 0-3 scale
}

/**
 * Get ingredient recommendations based on current ingredients
 * Returns sorted array of {ingredient, score, reasoning}
 */
function getIngredientRecommendations(currentIngredients, excludeIngredients = []) {
    const recommendations = new Map();
    // Normalize all ingredients
    const normalizedCurrent = currentIngredients.map(normalizeIngredient);
    const normalizedExclude = excludeIngredients.map(normalizeIngredient);
    const currentSet = new Set(normalizedCurrent);
    const excludeSet = new Set(normalizedExclude);

    // For each current ingredient, find its best pairings
    normalizedCurrent.forEach(ingredient => {
        const profile = FlavorProfiles[ingredient];
        if (!profile || !profile.pairings) return;

        Object.entries(profile.pairings).forEach(([pairedIngredient, score]) => {
            // Skip if already in cocktail or excluded
            if (currentSet.has(pairedIngredient) || excludeSet.has(pairedIngredient)) return;

            // Check if this is a real ingredient in our database
            if (!FlavorProfiles[pairedIngredient]) return;

            // Accumulate scores from multiple ingredients
            const currentScore = recommendations.get(pairedIngredient) || { total: 0, count: 0, sources: [] };
            recommendations.set(pairedIngredient, {
                total: currentScore.total + score,
                count: currentScore.count + 1,
                sources: [...currentScore.sources, ingredient]
            });
        });
    });

    // Convert to array and calculate average scores
    const results = Array.from(recommendations.entries()).map(([ingredient, data]) => ({
        ingredient,
        score: data.total / data.count,
        totalScore: data.total,
        pairingCount: data.count,
        sources: data.sources,
        category: FlavorProfiles[ingredient]?.category || 'unknown'
    }));

    // Sort by total score (prioritize ingredients that pair well with multiple current ingredients)
    results.sort((a, b) => b.totalScore - a.totalScore || b.score - a.score);

    return results;
}

/**
 * Analyze a cocktail's flavor profile
 * Returns flavor tags with weighted scores
 */
function analyzeCocktailFlavorProfile(ingredients) {
    const flavorScores = {};

    ingredients.forEach(ingredient => {
        const normalized = normalizeIngredient(ingredient);
        const profile = FlavorProfiles[normalized];
        if (!profile || !profile.flavors) return;

        Object.entries(profile.flavors).forEach(([flavor, weight]) => {
            flavorScores[flavor] = (flavorScores[flavor] || 0) + weight;
        });
    });

    // Sort by score
    const sortedFlavors = Object.entries(flavorScores)
        .sort((a, b) => b[1] - a[1])
        .map(([flavor, score]) => ({ flavor, score }));

    return sortedFlavors;
}

/**
 * Suggest cocktail type based on ingredients
 */
function suggestCocktailType(ingredients) {
    const flavorProfile = analyzeCocktailFlavorProfile(ingredients);
    const dominantFlavors = flavorProfile.slice(0, 3).map(f => f.flavor);

    // Check categories (with normalization)
    const categories = ingredients.map(ing => {
        const normalized = normalizeIngredient(ing);
        return FlavorProfiles[normalized]?.category;
    }).filter(Boolean);
    const hasSpirit = categories.includes('spirit');
    const hasCitrus = categories.includes('citrus');
    const hasCarbonated = categories.includes('carbonated');
    const hasCream = ingredients.some(ing => ing.toLowerCase().includes('cream'));
    const hasTropical = ingredients.some(ing => {
        const normalized = normalizeIngredient(ing);
        return FlavorProfiles[normalized]?.flavors?.tropical > 0;
    });

    // Determine cocktail type
    if (hasCream) return CocktailTypes.CREAMY;
    if (hasTropical) return CocktailTypes.TROPICAL;
    if (hasCitrus && hasSpirit) return CocktailTypes.SOUR;
    if (hasCarbonated) return CocktailTypes.FIZZY;
    if (dominantFlavors.includes('bitter')) return CocktailTypes.BITTER;
    if (dominantFlavors.includes('spicy')) return CocktailTypes.SPICY;
    if (hasSpirit && !hasCitrus && !hasCarbonated) return CocktailTypes.SPIRIT_FORWARD;

    return CocktailTypes.REFRESHING;
}

/**
 * Find similar cocktails based on flavor profile
 */
function findSimilarCocktails(ingredients, cocktailDatabase) {
    const targetProfile = analyzeCocktailFlavorProfile(ingredients);
    const targetFlavors = new Set(targetProfile.map(f => f.flavor));

    return cocktailDatabase.map(cocktail => {
        const cocktailProfile = analyzeCocktailFlavorProfile(cocktail.ingredients);
        const cocktailFlavors = new Set(cocktailProfile.map(f => f.flavor));

        // Calculate Jaccard similarity of flavor profiles
        const intersection = new Set([...targetFlavors].filter(x => cocktailFlavors.has(x)));
        const union = new Set([...targetFlavors, ...cocktailFlavors]);
        const similarity = intersection.size / union.size;

        return {
            cocktail,
            similarity,
            sharedFlavors: Array.from(intersection)
        };
    }).sort((a, b) => b.similarity - a.similarity);
}

// Export functions for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        FlavorProfiles,
        CocktailTypes,
        calculateJaccardSimilarity,
        calculateCompatibilityScore,
        getIngredientRecommendations,
        analyzeCocktailFlavorProfile,
        suggestCocktailType,
        findSimilarCocktails
    };
}
