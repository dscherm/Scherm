// =============================================================================
// COCKTAIL CODEX APP INITIALIZATION
// Handles the Cocktail Codex tab and navigation
// =============================================================================

// Initialize the Codex tab when it becomes active
function initializeCodexTab() {
    const codexContainer = document.getElementById('codex-graph-container');
    if (!codexContainer || codexContainer.querySelector('svg')) return; // Already initialized

    // Create the root cocktails graph
    createRootCocktailsGraph('codex-graph-container', (rootCocktail) => {
        // When a root cocktail is clicked, show the focused view
        createFocusedCocktailGraph(
            'codex-graph-container',
            rootCocktail,
            (ingredientName) => {
                // When an ingredient is clicked, show its flavor pairings
                showIngredientDetail(ingredientName, []);
            },
            (cocktail) => {
                // When a variation is clicked, show its full details
                showCocktailDetail(cocktail);
            }
        );
    });
}

// Listen for tab changes to initialize codex when needed
document.addEventListener('DOMContentLoaded', () => {
    // Check if codex tab is active on load
    const codexTab = document.getElementById('codex-tab');
    if (codexTab && codexTab.classList.contains('active')) {
        setTimeout(initializeCodexTab, 100);
    }

    // Listen for tab button clicks
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            if (tabName === 'codex') {
                setTimeout(initializeCodexTab, 100);
            }
        });
    });
});
