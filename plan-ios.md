# Cocktail Mixologist iOS App - Development Plan

This file tracks iOS development tasks for the Ralph Wiggum autonomous development loop.

---

## Tasks

### Phase 1: Project Setup & Foundation 🔲

```json
{
  "category": "setup",
  "description": "Initialize React Native + Expo project",
  "steps": [
    "Run: npx create-expo-app cocktail-mixologist-ios --template",
    "Install dependencies: navigation, svg, reanimated, gesture-handler, sqlite",
    "Configure app.json (bundle ID, splash screen, icon)",
    "Set up TypeScript (tsconfig.json)",
    "Create folder structure (screens, components, lib, utils)",
    "Initialize git repository in project folder"
  ],
  "verification": "Run expo start, app opens with default screen on iOS simulator",
  "passes": false
}
```

```json
{
  "category": "setup",
  "description": "Set up navigation structure with tab bar",
  "steps": [
    "Install @react-navigation/native and @react-navigation/bottom-tabs",
    "Create AppNavigator.tsx with 4 tabs (Search, Codex, Favorites, Settings)",
    "Create placeholder screens for each tab",
    "Add SF Symbols icons for tabs",
    "Configure navigation theme (colors, fonts)"
  ],
  "verification": "Screenshot of tab bar with 4 tabs, tapping switches between screens",
  "passes": false
}
```

```json
{
  "category": "setup",
  "description": "Port flavor engine from web app",
  "steps": [
    "Copy flavor-engine.js from web app",
    "Convert to TypeScript (flavor-engine.ts)",
    "Add FlavorProfiles with 100+ ingredients",
    "Add ingredient normalization with aliases",
    "Add Jaccard similarity calculation",
    "Export all functions for use in app"
  ],
  "verification": "Unit test: getIngredientRecommendations(['Lime juice']) returns rum, tequila with scores",
  "passes": false
}
```

```json
{
  "category": "feature",
  "description": "Create SQLite database with cocktail data",
  "steps": [
    "Install expo-sqlite",
    "Create database schema (cocktails, ingredients, flavor_profiles tables)",
    "Download TheCocktailDB data (600 cocktails) as JSON",
    "Write migration script to populate SQLite from JSON",
    "Create database.ts wrapper with query functions",
    "Bundle database file with app (assets/data/cocktails.db)"
  ],
  "verification": "Query database for 'Margarita', returns full cocktail with ingredients",
  "passes": false
}
```

### Phase 2: Core UI Components 🔲

```json
{
  "category": "feature",
  "description": "Build SearchScreen with native search bar",
  "steps": [
    "Create SearchBar component (iOS-style)",
    "Add search input with real-time filtering",
    "Query SQLite database for cocktail matches",
    "Display results in FlatList with CocktailCard components",
    "Add filter chips (base spirit, category)",
    "Add recent searches persistence"
  ],
  "verification": "Search for 'mar', see Margarita in results, tap filter chip, results update",
  "passes": false
}
```

```json
{
  "category": "feature",
  "description": "Build CocktailDetailScreen with ingredients and instructions",
  "steps": [
    "Create CocktailDetailScreen layout (image, name, ingredients list, instructions)",
    "Fetch cocktail data from SQLite by ID",
    "Display ingredients with measurements",
    "Add ScrollView for full recipe",
    "Add favorite button (heart icon)",
    "Add share button (native share sheet)"
  ],
  "verification": "Navigate to Margarita detail, see image, ingredients, instructions, tap buttons work",
  "passes": false
}
```

```json
{
  "category": "feature",
  "description": "Implement node graph with react-native-svg",
  "steps": [
    "Install react-native-svg and react-native-reanimated",
    "Port D3.js force simulation logic to React Native",
    "Create NodeGraph component with SVG rendering",
    "Implement force-directed layout algorithm",
    "Add node sizing based on measurement (parseMeasurement)",
    "Color code nodes by ingredient category",
    "Add touch handlers (tap, double-tap, drag)"
  ],
  "verification": "View cocktail detail, see node graph, tap node shows details, drag moves node",
  "passes": false
}
```

```json
{
  "category": "feature",
  "description": "Add pinch-to-zoom and pan gestures to node graph",
  "steps": [
    "Install react-native-gesture-handler",
    "Wrap NodeGraph in GestureDetector",
    "Implement PinchGestureHandler (zoom 1x-3x)",
    "Implement PanGestureHandler (move viewport when zoomed)",
    "Add zoom animations with react-native-reanimated",
    "Add constraints (min/max zoom, boundary limits)"
  ],
  "verification": "Pinch graph to zoom in/out, pan to move when zoomed, animations smooth at 60fps",
  "passes": false
}
```

### Phase 3: Cocktail Codex & Navigation 🔲

```json
{
  "category": "feature",
  "description": "Build CodexScreen with 6 root cocktails",
  "steps": [
    "Port cocktail-codex.js to cocktail-codex.ts",
    "Create hexagon SVG path generator",
    "Display 6 root cocktails in circular layout",
    "Add tap handlers to navigate to focused view",
    "Create CodexDetailScreen for variations",
    "Add filter chips for characteristics"
  ],
  "verification": "Codex tab shows 6 hexagons, tap Martini shows variations, apply filter updates list",
  "passes": false
}
```

```json
{
  "category": "feature",
  "description": "Implement back button navigation in Codex",
  "steps": [
    "Add navigation back button in focused Codex view",
    "Clear focused state when back pressed",
    "Reset filters when navigating back",
    "Ensure smooth transition animations"
  ],
  "verification": "Tap Martini root, then back button, returns to 6 root hexagons cleanly",
  "passes": false
}
```

### Phase 4: Favorites & Persistence 🔲

```json
{
  "category": "feature",
  "description": "Implement favorites with local persistence",
  "steps": [
    "Add user_favorites table to SQLite",
    "Create useFavorites hook (add, remove, check, list)",
    "Add heart button to CocktailDetailScreen",
    "Animate heart fill/unfill with haptic feedback",
    "Build FavoritesScreen showing grid of favorites",
    "Add swipe-to-delete on favorites"
  ],
  "verification": "Favorite 3 cocktails, navigate to Favorites tab, see 3 cocktails, swipe to unfavorite",
  "passes": false
}
```

```json
{
  "category": "feature",
  "description": "Add haptic feedback throughout app",
  "steps": [
    "Install expo-haptics",
    "Add haptic on button taps (light impact)",
    "Add haptic on favorite toggle (medium impact)",
    "Add haptic on node selection (selection)",
    "Add haptic on tab switch (selection)",
    "Add haptic on filter toggle (light impact)"
  ],
  "verification": "Tap buttons and nodes throughout app, feel appropriate haptic feedback",
  "passes": false
}
```

### Phase 5: Dark Mode & Theming 🔲

```json
{
  "category": "feature",
  "description": "Implement system-based dark mode",
  "steps": [
    "Detect system color scheme with useColorScheme()",
    "Create Colors.ts with light and dark palettes",
    "Use semantic colors (systemBackground, label, etc.)",
    "Test all screens in both light and dark mode",
    "Ensure node graphs adapt colors for dark mode"
  ],
  "verification": "Toggle iOS dark mode in settings, app immediately switches themes",
  "passes": false
}
```

```json
{
  "category": "feature",
  "description": "Polish UI with iOS design patterns",
  "steps": [
    "Add proper safe area handling (SafeAreaView)",
    "Configure status bar styling (dark-content / light-content)",
    "Add loading states (ActivityIndicator) for database queries",
    "Add empty states for search, favorites",
    "Add error states with retry buttons",
    "Polish animations and transitions (200-300ms durations)"
  ],
  "verification": "App looks native with proper spacing, status bar, and feedback states",
  "passes": false
}
```

### Phase 6: Premium Features & IAP 🔲

```json
{
  "category": "feature",
  "description": "Implement ingredient inventory tracker (premium)",
  "steps": [
    "Add ingredient_inventory table to SQLite",
    "Create InventoryScreen with ingredient list",
    "Add toggle switches for each ingredient",
    "Implement 'What Can I Make?' filter",
    "Show 'almost makeable' section (missing 1-2 ingredients)",
    "Gate feature behind premium check"
  ],
  "verification": "Premium user: Toggle 5 ingredients, tap 'What Can I Make?', see filtered cocktails",
  "passes": false
}
```

```json
{
  "category": "feature",
  "description": "Set up in-app purchases with StoreKit",
  "steps": [
    "Create IAP products in App Store Connect (monthly, yearly)",
    "Install react-native-iap",
    "Implement purchase flow (fetch products, initiate purchase)",
    "Add paywall modal after 10th favorite",
    "Implement restore purchases",
    "Add premium badge in Settings",
    "Test with sandbox account"
  ],
  "verification": "Favorite 11 cocktails, paywall appears, complete purchase (sandbox), unlock features",
  "passes": false
}
```

```json
{
  "category": "feature",
  "description": "Implement 7-day free trial",
  "steps": [
    "Configure IAP products with free trial in App Store Connect",
    "Update purchase flow to show 'Start 7-Day Free Trial'",
    "Store trial start date in secure storage",
    "Check trial status on app launch",
    "Show trial expiry countdown in Settings",
    "Handle trial-to-paid conversion"
  ],
  "verification": "Start free trial, see 'Premium (Trial)' badge, trial expires after 7 days (fast-forward test)",
  "passes": false
}
```

### Phase 7: iCloud Sync & Sharing 🔲

```json
{
  "category": "feature",
  "description": "Implement iCloud sync for favorites",
  "steps": [
    "Enable iCloud in Xcode capabilities",
    "Set up CloudKit container",
    "Create sync logic (upload favorites, download on other device)",
    "Implement conflict resolution (last write wins)",
    "Add sync status indicator",
    "Test sync between two iOS devices/simulator"
  ],
  "verification": "Favorite on iPhone, wait 5 seconds, check iPad, favorite appears",
  "passes": false
}
```

```json
{
  "category": "feature",
  "description": "Build recipe card image generator for sharing",
  "steps": [
    "Create RecipeCard component (renders as SVG)",
    "Include cocktail image, name, ingredients, instructions, branding",
    "Convert SVG to PNG (1080x1350)",
    "Implement native share sheet (share as image or text)",
    "Add 'Share' button on CocktailDetailScreen",
    "Save generated image to photo library (with permission)"
  ],
  "verification": "Tap share on cocktail, generate image, share to Messages, recipient sees pretty card",
  "passes": false
}
```

### Phase 8: Home Screen Widgets 🔲

```json
{
  "category": "feature",
  "description": "Create iOS widgets (small, medium, large)",
  "steps": [
    "Add WidgetKit extension to project",
    "Create WidgetView in Swift/SwiftUI",
    "Implement Timeline Provider (refresh every 6 hours)",
    "Small widget: Cocktail of the day",
    "Medium widget: 2 suggested cocktails",
    "Large widget: 4 cocktails in grid",
    "Deep link to app when tapped"
  ],
  "verification": "Add widget to home screen, see cocktail image and name, tap opens app",
  "passes": false
}
```

### Phase 9: App Store Preparation 🔲

```json
{
  "category": "documentation",
  "description": "Create App Store assets (icon, screenshots, description)",
  "steps": [
    "Design app icon (1024x1024)",
    "Take 10 screenshots (iPhone 6.7\", 6.5\", 5.5\", iPad 12.9\")",
    "Write compelling app description (4000 chars)",
    "Research and add keywords for ASO",
    "Create app preview video (30 seconds)",
    "Write privacy policy (host on GitHub Pages)",
    "Set up support URL"
  ],
  "verification": "All assets exported and ready for App Store Connect upload",
  "passes": false
}
```

```json
{
  "category": "setup",
  "description": "Configure App Store Connect",
  "steps": [
    "Create app in App Store Connect",
    "Set bundle ID: com.scherm.cocktailmixologist",
    "Configure age rating (17+ alcohol)",
    "Add IAP products (monthly $4.99, yearly $39.99)",
    "Upload screenshots and metadata",
    "Add privacy manifest",
    "Submit for review"
  ],
  "verification": "App shows 'Waiting for Review' status in App Store Connect",
  "passes": false
}
```

### Phase 10: Testing & Quality Assurance 🔲

```json
{
  "category": "testing",
  "description": "Comprehensive testing across devices and iOS versions",
  "steps": [
    "Test on iPhone SE (smallest screen)",
    "Test on iPhone 15 Pro Max (largest screen)",
    "Test on iPad 10.2\" and 12.9\" Pro",
    "Test on iOS 16, 17, 18 beta",
    "Test with VoiceOver (accessibility)",
    "Test with Dynamic Type (text sizing)",
    "Run unit tests (flavor engine, normalization)",
    "Run integration tests (database, sync)"
  ],
  "verification": "All tests pass, no crashes, app works on all tested devices/versions",
  "passes": false
}
```

```json
{
  "category": "optimization",
  "description": "Performance optimization and monitoring",
  "steps": [
    "Measure cold launch time (< 2 seconds target)",
    "Measure memory usage (< 150MB target)",
    "Optimize node graph rendering (60fps target)",
    "Add crash reporting (Firebase Crashlytics or Sentry)",
    "Add analytics (Firebase Analytics or Amplitude)",
    "Profile with Xcode Instruments",
    "Fix performance bottlenecks"
  ],
  "verification": "Launch time < 2s, memory < 150MB, graph 60fps, crashlytics working",
  "passes": false
}
```

---

## Progress Summary

**Completed:** 0/28 tasks (0%)
**In Progress:** 0/28 tasks
**Pending:** 28/28 tasks (100%)

**Phase 1 (Setup):** 🔲 0/4 complete
**Phase 2 (Core UI):** 🔲 0/4 complete
**Phase 3 (Codex):** 🔲 0/2 complete
**Phase 4 (Favorites):** 🔲 0/2 complete
**Phase 5 (Polish):** 🔲 0/2 complete
**Phase 6 (Premium):** 🔲 0/3 complete
**Phase 7 (Sync):** 🔲 0/2 complete
**Phase 8 (Widgets):** 🔲 0/1 complete
**Phase 9 (App Store):** 🔲 0/2 complete
**Phase 10 (Testing):** 🔲 0/2 complete

---

## Notes

**Development Environment Required:**
- macOS with Xcode 15+
- Node.js 18+
- Expo CLI
- iOS Simulator or physical iPhone for testing
- Apple Developer Account ($99/year for App Store submission)

**Estimated Timeline:**
- Phase 1-2: 2-3 weeks (foundation)
- Phase 3-5: 2-3 weeks (core features)
- Phase 6-7: 2 weeks (premium & sync)
- Phase 8-9: 1 week (widgets & app store)
- Phase 10: 1-2 weeks (testing & polish)
**Total: 8-11 weeks (2-3 months)**

**This plan assumes full-time development**. Part-time work would extend timeline proportionally.
