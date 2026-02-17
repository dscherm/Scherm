# Product Requirements Document
# Cocktail Mixologist - iOS App

**Version:** 1.0
**Last Updated:** 2026-02-17
**Status:** Planning Phase
**Project Lead:** Scherm
**Platform:** iOS (iPhone & iPad)
**Target App Store:** Apple App Store
**Technical Stack:** React Native / Swift UI (TBD)

---

## Executive Summary

Convert the successful Advanced Cocktail Mixologist web application into a native iOS app for the Apple App Store. The app will leverage native iOS capabilities (haptics, swipe gestures, Face ID) while maintaining the core flavor pairing engine, node visualizations, and Cocktail Codex taxonomy that made the web version successful.

**Web Version:** https://dscherm.github.io/Scherm/docs/
**Target Launch:** Q2 2026

---

## Strategic Rationale

### Why iOS App?

1. **Better Mobile Experience:** Native gestures, haptics, performance
2. **Offline Capability:** Full functionality without internet (after initial data sync)
3. **Monetization:** In-app purchases, premium features
4. **User Engagement:** Push notifications, home screen presence, widgets
5. **App Store Discovery:** Reach users who don't discover web apps
6. **Native Features:** Camera (identify bottle labels), AR (visualize cocktails), Siri shortcuts

### Market Opportunity

- **Target Users:** 18-45 year olds interested in cocktails and entertaining
- **Market Size:** 50M+ cocktail enthusiasts in US alone
- **Competitors:** Difford's Guide, Mixel, Cocktail Party, BarNotes
- **Differentiation:** Flavor science approach, visual taxonomy, educational focus

---

## Problem Statement

### Web App Limitations

1. **Mobile Performance:** D3.js graphs can lag on mobile browsers
2. **Discoverability:** Users must find web URL, not browsable in App Store
3. **No Offline:** Requires internet connection for API calls
4. **Limited Native Feel:** Can't leverage iOS gestures, haptics, widgets
5. **No Monetization:** Free web app, no revenue model

### User Needs (iOS-Specific)

1. **Offline Access:** Users want to browse cocktails without WiFi (at bars, parties)
2. **Faster Performance:** Native rendering for smooth node graph interactions
3. **Native Gestures:** Pinch-to-zoom on graphs, swipe between recipes
4. **Favorites & Collections:** Cloud-synced across devices
5. **Shopping Lists:** Add ingredients to Apple Reminders or Notes
6. **Voice Search:** "Hey Siri, find a cocktail with gin and lemon"

---

## Goals & Success Metrics

### Launch Goals (Phase 1)

- [ ] Feature parity with web app (search, graphs, codex)
- [ ] Native iOS design following Apple Human Interface Guidelines
- [ ] Offline mode with cached cocktail database
- [ ] Smooth 60fps animations and interactions
- [ ] App Store approval on first submission
- [ ] 1,000 downloads in first month

### Growth Goals (Phase 2-3)

- [ ] 4.5+ star rating on App Store
- [ ] 10,000+ active users
- [ ] 30% daily active user rate
- [ ] Premium tier: 5% conversion rate
- [ ] Featured in App Store "Apps We Love"

### Success Metrics

**Engagement:**
- Daily active users / Monthly active users (DAU/MAU ratio)
- Average session length (target: 3-5 minutes)
- Recipes viewed per session (target: 5+)
- Graph interactions per session (target: 3+ expansions)

**Retention:**
- Day 1 retention: 60%+
- Day 7 retention: 30%+
- Day 30 retention: 15%+

**Monetization (Phase 2):**
- Free tier: Core features
- Premium ($4.99/month or $39.99/year): Advanced features
- Target: 5% conversion to premium

---

## User Personas (iOS-Specific)

### Persona 1: Jamie - The Mobile-First User
**Demographics:** 26, uses phone for everything, rarely on desktop
**Device:** iPhone 15, Apple Watch
**Behavior:** Discovers apps via App Store, expects instant load times
**Pain Point:** "Web apps feel slow on my phone, I want a real app"
**Use Case:** "I'm at a friend's party and want to look up a recipe quickly"

### Persona 2: Taylor - The Premium Subscriber
**Demographics:** 34, professional, pays for quality apps
**Device:** iPhone 15 Pro Max, iPad Pro
**Behavior:** Subscribes to multiple apps, values ad-free experience
**Pain Point:** "Free apps are cluttered with ads and limited features"
**Use Case:** "I want my cocktail collection synced between my phone and iPad"

### Persona 3: Morgan - The Offline User
**Demographics:** 29, frequently travels, limited data plan
**Device:** iPhone 14, often in airplane mode to save battery
**Behavior:** Downloads content for offline use
**Pain Point:** "Web apps don't work without WiFi"
**Use Case:** "I'm at a cabin with no cell service but want to browse recipes"

---

## Core Features (iOS Implementation)

### Feature 1: Native iOS Navigation & UI
**Priority:** P0 (Critical)
**Status:** 🔲 Not Started

**Description:**
Redesign app with native iOS components following Apple Human Interface Guidelines.

**User Stories:**
- As a user, I want iOS-native navigation (tab bar, navigation stack) so it feels like a real iOS app
- As a user, I want swipe gestures to work as expected (swipe back, swipe between tabs)
- As a user, I want dark mode support that respects my system settings
- As a user, I want haptic feedback when I interact with buttons and nodes

**iOS Design Patterns:**
- **Tab Bar:** Search, Codex, Favorites, Settings (bottom navigation)
- **Navigation Stack:** Push/pop for detail views
- **Dark Mode:** Automatic based on system preference
- **SF Symbols:** Use Apple's icon library
- **Haptics:** UIImpactFeedbackGenerator for interactions
- **Modal Sheets:** For filters, settings, ingredient details

**Acceptance Criteria:**
- [ ] Tab bar with 4 tabs (Search, Codex, Favorites, Settings)
- [ ] Navigation bar with back button follows iOS conventions
- [ ] Dark mode switches automatically with system setting
- [ ] Haptic feedback on button taps and node selections
- [ ] Swipe back gesture works throughout app
- [ ] Status bar styling matches app theme

**Technical Decisions:**

**Option A: React Native + Expo**
- ✅ Reuse JavaScript code from web app
- ✅ Faster development (single codebase)
- ✅ Easy testing with Expo Go app
- ✅ Good for D3.js integration (react-native-svg)
- ❌ Larger app size
- ❌ May not feel 100% native

**Option B: Swift + SwiftUI**
- ✅ 100% native feel
- ✅ Best performance
- ✅ Full access to iOS APIs
- ✅ Smaller app size
- ❌ Complete rewrite required
- ❌ Need to recreate D3.js visualizations

**Recommendation:** Start with **React Native + Expo** for speed, consider Swift rewrite if performance issues arise.

---

### Feature 2: Offline Database with Sync
**Priority:** P0 (Critical)
**Status:** 🔲 Not Started

**Description:**
Local SQLite/Realm database with full cocktail data for offline access.

**User Stories:**
- As a user, I want to browse cocktails without internet so I can use the app anywhere
- As a user, I want the app to automatically update when I have WiFi
- As a user, I want to see which cocktails I've viewed before (even offline)
- As a user, I want my favorites to work offline

**Data Storage Strategy:**

**Initial Data Bundle:**
- Ship app with ~600 cocktails from TheCocktailDB (bundled JSON)
- ~10MB compressed database file
- Loaded on first launch

**Update Mechanism:**
- Check for updates on app launch (when online)
- Background fetch every 24 hours
- Download only new/modified cocktails (delta sync)
- Show "Updating database..." with progress

**Database Choice:**

**Option A: Realm**
- ✅ Fast, object-oriented
- ✅ Great React Native support
- ✅ Built-in sync capabilities
- ❌ Larger binary size

**Option B: SQLite (via expo-sqlite)**
- ✅ Lightweight
- ✅ Standard SQL queries
- ✅ Smaller app size
- ❌ More boilerplate code

**Recommendation:** **SQLite** for simplicity and size.

**Database Schema:**
```sql
CREATE TABLE cocktails (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT,
    alcoholic TEXT,
    glass TEXT,
    instructions TEXT,
    image_url TEXT,
    last_updated INTEGER
);

CREATE TABLE ingredients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cocktail_id TEXT,
    ingredient TEXT,
    measure TEXT,
    FOREIGN KEY(cocktail_id) REFERENCES cocktails(id)
);

CREATE TABLE flavor_profiles (
    ingredient TEXT PRIMARY KEY,
    category TEXT,
    flavors TEXT, -- JSON blob
    pairs_with TEXT -- JSON blob
);

CREATE TABLE user_favorites (
    cocktail_id TEXT PRIMARY KEY,
    added_at INTEGER
);

CREATE TABLE user_history (
    cocktail_id TEXT PRIMARY KEY,
    viewed_at INTEGER
);
```

**Acceptance Criteria:**
- [ ] Database populated on first launch (< 5 seconds)
- [ ] All cocktails browsable offline
- [ ] Favorites persist across app restarts
- [ ] Update check on launch (when online)
- [ ] Background sync every 24 hours
- [ ] No data loss during updates

---

### Feature 3: Touch-Optimized Node Graphs
**Priority:** P0 (Critical)
**Status:** 🔲 Not Started

**Description:**
Reimplement D3.js force-directed graphs with native touch interactions.

**User Stories:**
- As a user, I want to pinch-to-zoom on node graphs
- As a user, I want to drag nodes smoothly without lag
- As a user, I want tap-and-hold to see node details
- As a user, I want haptic feedback when nodes connect

**Implementation Options:**

**Option A: React Native SVG + react-native-gesture-handler**
- Port D3.js logic to React Native
- Use `react-native-svg` for rendering
- `react-native-reanimated` for smooth animations
- `react-native-gesture-handler` for pinch/pan

**Option B: WebView with D3.js**
- Embed web version in WebView
- Bridge communication with React Native
- Simpler but less performant

**Recommendation:** **Option A** for native performance.

**Touch Gestures:**
- **Tap:** Select node, show details
- **Double Tap:** Expand complementary/alternatives
- **Long Press:** Show full ingredient modal
- **Pinch:** Zoom in/out on entire graph
- **Pan:** Move viewport (when zoomed in)
- **Drag:** Move individual nodes

**Performance Targets:**
- 60fps during animations
- < 100ms tap response time
- Smooth pinch-zoom with no stuttering
- Graph renders in < 1 second

**Acceptance Criteria:**
- [ ] Force-directed layout matches web version
- [ ] Pinch-to-zoom works smoothly (1x - 3x zoom)
- [ ] Nodes can be dragged and repositioned
- [ ] Tap shows details, double-tap expands
- [ ] Long press haptic feedback
- [ ] 60fps animations on iPhone 12 and newer
- [ ] Node colors match category system

---

### Feature 4: Native Search with Siri Integration
**Priority:** P1 (High)
**Status:** 🔲 Not Started

**Description:**
iOS-native search with suggestions, recent searches, and Siri Shortcuts.

**User Stories:**
- As a user, I want to search with iOS keyboard and autocomplete
- As a user, I want to see my recent searches
- As a user, I want to say "Hey Siri, find a gin cocktail" and have it work
- As a user, I want to search by ingredient with suggestions

**Search Features:**

**Search Bar (iOS Native):**
- UISearchController-style search
- Real-time results as you type
- Search by cocktail name, ingredient, or base spirit
- Recent searches shown when focused
- Cancel button clears and dismisses

**Search Filters:**
- Base spirit chips (Vodka, Gin, Rum, Tequila, Whiskey, Brandy)
- Category filters (Cocktail, Shot, Ordinary Drink, etc.)
- Alcoholic/Non-alcoholic toggle
- Sort by: Name, Popularity, Recently Added

**Siri Shortcuts:**
```swift
// Example intent
"Find cocktails with [ingredient]"
"Show me [cocktail name]"
"Random cocktail"
"What can I make with [ingredient]?"
```

**Acceptance Criteria:**
- [ ] Search works offline with local database
- [ ] Autocomplete shows top 5 suggestions
- [ ] Recent searches persist (last 10)
- [ ] Filter chips work with search query
- [ ] Siri shortcut for 3 common queries
- [ ] Voice dictation supported
- [ ] Search history clearable in Settings

---

### Feature 5: Favorites & Collections
**Priority:** P1 (High)
**Status:** 🔲 Not Started

**Description:**
Save favorite cocktails and organize into collections.

**User Stories:**
- As a user, I want to favorite cocktails so I can find them quickly
- As a user, I want to organize favorites into collections (e.g., "Summer Drinks", "Date Night")
- As a user, I want my favorites synced across devices (iCloud)
- As a user, I want to share a collection with friends

**Favorites Features:**

**Basic Favorites:**
- Heart icon on cocktail detail page
- Favorites tab shows all favorited cocktails
- Swipe-to-delete to unfavorite
- Sort by: Recently Added, Name, Category

**Collections (Phase 2):**
- Create custom collections
- Add cocktails to multiple collections
- Collection covers (auto-generated from cocktails)
- Rename/delete collections
- Share collection as link

**iCloud Sync:**
- Sync favorites across iPhone, iPad, Mac (if Mac app later)
- Automatic backup
- Conflict resolution (last write wins)

**Acceptance Criteria:**
- [ ] Heart icon toggles favorite state with animation
- [ ] Favorites tab shows grid/list of favorited cocktails
- [ ] Favorites persist locally (SQLite)
- [ ] iCloud sync enabled (CloudKit)
- [ ] Favorites sync within 5 seconds across devices
- [ ] Swipe-to-delete removes favorite

---

### Feature 6: Ingredient Inventory (Premium Feature)
**Priority:** P2 (Nice to Have)
**Status:** 🔲 Not Started

**Description:**
Track ingredients you have at home and filter recipes by availability.

**User Stories:**
- As a premium user, I want to track which ingredients I have at home
- As a premium user, I want to see "What can I make?" based on my inventory
- As a premium user, I want to add missing ingredients to a shopping list
- As a premium user, I want to scan bottle barcodes to add ingredients

**Inventory Features:**

**Ingredient List:**
- Alphabetical list of all ingredients (100+ from flavor profiles)
- Toggle on/off for each ingredient
- Categories: Spirits, Liqueurs, Citrus, Sweeteners, Bitters, etc.
- Search within ingredient list

**What Can I Make?:**
- Filter cocktails by available ingredients
- Show "almost makeable" (missing 1-2 ingredients)
- Sort by: Fewest missing, Most common, Recommended

**Shopping List:**
- Add missing ingredients to list
- Export to Apple Reminders or Notes
- Share list via Messages/Email
- Check off items as purchased

**Barcode Scanner (Phase 3):**
- Use camera to scan bottle barcodes
- Auto-identify ingredient from barcode
- Add to inventory with photo

**Acceptance Criteria:**
- [ ] Ingredient list with 100+ ingredients
- [ ] Toggle ingredients on/off (saved to local DB)
- [ ] "What Can I Make?" filters recipes by inventory
- [ ] Show "missing 1 ingredient" section
- [ ] Shopping list exportable to Reminders
- [ ] Inventory syncs via iCloud (premium only)

---

### Feature 7: Home Screen Widgets
**Priority:** P2 (Nice to Have)
**Status:** 🔲 Not Started

**Description:**
iOS 14+ widgets showing random cocktail, daily recommendation, or favorites.

**Widget Types:**

**Small Widget (2x2):**
- Cocktail of the Day
- Shows name and image
- Tap to open in app

**Medium Widget (4x2):**
- 2 cocktail suggestions
- Based on season or user preferences
- Tap to open in app

**Large Widget (4x4):**
- 4 suggested cocktails in grid
- Refreshes 4x per day

**Acceptance Criteria:**
- [ ] 3 widget sizes supported
- [ ] Widgets update every 6 hours
- [ ] Tap widget opens app to recipe
- [ ] Widget respects dark mode
- [ ] Widget shows cached data (works offline)

---

### Feature 8: App Store Monetization
**Priority:** P1 (High)
**Status:** 🔲 Not Started

**Description:**
Implement freemium model with in-app purchases.

**Pricing Strategy:**

**Free Tier:**
- ✅ Search all cocktails
- ✅ View recipes and instructions
- ✅ Basic node graph interactions
- ✅ Up to 10 favorites
- ✅ Cocktail Codex exploration
- ❌ Ingredient inventory
- ❌ Collections (more than 10 favorites)
- ❌ Export/share features
- ❌ Ad-free experience

**Premium Tier ($4.99/month or $39.99/year):**
- ✅ Unlimited favorites & collections
- ✅ Ingredient inventory tracker
- ✅ "What Can I Make?" filter
- ✅ Shopping list export
- ✅ iCloud sync across devices
- ✅ Export cocktails as PDF/Image
- ✅ Ad-free
- ✅ Priority customer support
- ✅ Early access to new features

**Implementation:**
- StoreKit 2 for in-app purchases
- RevenueCat for subscription management
- Paywall after favoriting 11th cocktail
- 7-day free trial for premium
- Restore purchases option

**Acceptance Criteria:**
- [ ] IAP products configured in App Store Connect
- [ ] 7-day free trial works correctly
- [ ] Upgrade to premium unlocks all features
- [ ] Subscription auto-renews monthly/yearly
- [ ] Restore purchases works on new device
- [ ] Paywall shown at appropriate times (not intrusive)

---

### Feature 9: Sharing & Social
**Priority:** P2 (Nice to Have)
**Status:** 🔲 Not Started

**Description:**
Share cocktails via Messages, Instagram, or generate pretty recipe cards.

**Sharing Features:**

**Native Share Sheet:**
- Share cocktail as text (name + ingredients + link)
- Share as image (pretty recipe card)
- Share to Messages, Mail, Instagram, Twitter
- Copy link to clipboard

**Recipe Card Generator:**
- Beautiful card with cocktail image, name, ingredients, instructions
- User can customize colors/theme
- Export as image (1080x1350 for Instagram)
- Save to Photos

**Social Features (Phase 3):**
- "Friends" system (see what friends are favoriting)
- Comment on cocktails
- Rate cocktails (1-5 stars)
- Submit custom cocktails to community

**Acceptance Criteria:**
- [ ] Share button on cocktail detail page
- [ ] Native iOS share sheet with all options
- [ ] Recipe card exports as pretty image
- [ ] Recipe card includes app branding/watermark
- [ ] Share works offline (uses cached images)

---

## Technical Architecture

### Tech Stack Decision

**Recommended:** React Native + Expo

**Rationale:**
- ✅ Reuse ~60% of web app code (flavor-engine.js, data structures)
- ✅ Faster development (single codebase for iOS + Android later)
- ✅ Easier to port D3.js visualizations
- ✅ Good library ecosystem (react-native-svg, reanimated, gesture-handler)
- ✅ Expo simplifies builds, OTA updates, push notifications
- ❌ Slightly larger app size than pure Swift
- ❌ May need native modules for advanced features

### Project Structure

```
cocktail-mixologist-ios/
├── app.json                    # Expo config
├── package.json                # Dependencies
├── App.tsx                     # Root component
├── src/
│   ├── navigation/
│   │   ├── AppNavigator.tsx    # Tab + Stack navigation
│   │   └── types.ts            # Navigation types
│   ├── screens/
│   │   ├── SearchScreen.tsx    # Search tab
│   │   ├── CodexScreen.tsx     # Codex tab
│   │   ├── FavoritesScreen.tsx # Favorites tab
│   │   ├── SettingsScreen.tsx  # Settings tab
│   │   ├── CocktailDetailScreen.tsx
│   │   └── IngredientDetailScreen.tsx
│   ├── components/
│   │   ├── CocktailCard.tsx    # Cocktail grid item
│   │   ├── NodeGraph.tsx       # Force-directed graph
│   │   ├── SearchBar.tsx       # Native search
│   │   ├── FilterChips.tsx     # Filter UI
│   │   └── FavoriteButton.tsx  # Heart icon
│   ├── lib/
│   │   ├── flavor-engine.ts    # Port from web app
│   │   ├── database.ts         # SQLite wrapper
│   │   ├── api.ts              # API client
│   │   └── sync.ts             # iCloud sync
│   ├── utils/
│   │   ├── normalize.ts        # Ingredient normalization
│   │   ├── haptics.ts          # Haptic feedback
│   │   └── share.ts            # Share sheet
│   ├── hooks/
│   │   ├── useCocktails.ts     # Data fetching
│   │   ├── useFavorites.ts     # Favorites state
│   │   └── useInventory.ts     # Inventory state
│   ├── constants/
│   │   ├── Colors.ts           # Theme colors
│   │   └── Layout.ts           # Screen dimensions
│   └── types/
│       └── index.ts            # TypeScript types
├── assets/
│   ├── fonts/
│   ├── images/
│   └── data/
│       └── cocktails.json      # Bundled database
└── ios/                        # Native iOS code (if needed)
```

### Dependencies

```json
{
  "dependencies": {
    "expo": "~50.0.0",
    "react": "18.2.0",
    "react-native": "0.73.0",
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/bottom-tabs": "^6.5.11",
    "@react-navigation/native-stack": "^6.9.17",
    "react-native-svg": "^14.1.0",
    "react-native-reanimated": "~3.6.0",
    "react-native-gesture-handler": "~2.14.0",
    "expo-sqlite": "~13.0.0",
    "expo-haptics": "~12.8.0",
    "@react-native-community/netinfo": "^11.2.0",
    "expo-secure-store": "~12.8.0",
    "react-native-iap": "^12.13.0"
  }
}
```

---

## App Store Requirements

### App Store Connect Setup

1. **Bundle ID:** com.scherm.cocktailmixologist
2. **App Name:** "Cocktail Mixologist: Flavor Guide"
3. **Category:** Food & Drink
4. **Age Rating:** 17+ (alcohol content)
5. **Privacy Policy:** Required (link to hosted policy)
6. **Support URL:** Required (GitHub pages or dedicated site)

### Required Assets

**App Icon:**
- 1024x1024 PNG (no transparency)
- Versions for all sizes (App Store generates)

**Screenshots (Required for iPhone and iPad):**
- 6.7" iPhone (1290x2796): 3-10 screenshots
- 6.5" iPhone (1242x2688): 3-10 screenshots
- 5.5" iPhone (1242x2208): 3-10 screenshots
- 12.9" iPad Pro (2048x2732): 3-10 screenshots

**App Preview Videos (Optional but recommended):**
- 30-second demo video
- Show key features: search, graphs, codex

### Privacy Manifest (Required iOS 17+)

```xml
<key>NSPrivacyTracking</key>
<false/>
<key>NSPrivacyTrackingDomains</key>
<array/>
<key>NSPrivacyCollectedDataTypes</key>
<array>
  <dict>
    <key>NSPrivacyCollectedDataType</key>
    <string>NSPrivacyCollectedDataTypeUserID</string>
    <key>NSPrivacyCollectedDataTypeLinked</key>
    <false/>
    <key>NSPrivacyCollectedDataTypeTracking</key>
    <false/>
    <key>NSPrivacyCollectedDataTypePurposes</key>
    <array>
      <string>NSPrivacyCollectedDataTypePurposeDeveloperAdvertising</string>
    </array>
  </dict>
</array>
```

### App Store Review Guidelines Compliance

**Content Policy:**
- ✅ No gambling or illegal content
- ✅ Age gated (17+ for alcohol)
- ✅ Educational focus (flavor science, history)
- ⚠️ No promotion of excessive drinking
- ⚠️ Include "drink responsibly" messaging

**Functionality:**
- ✅ Fully functional offline (core features)
- ✅ No broken links or placeholder content
- ✅ All features work as described
- ✅ IAP properly implemented with restore option

**Design:**
- ✅ Follows Human Interface Guidelines
- ✅ Native iOS UI patterns
- ✅ Supports latest iOS version
- ✅ Works on all screen sizes

---

## User Flows (iOS)

### Flow 1: First Launch Experience

1. User downloads app from App Store
2. Opens app → Splash screen (2 seconds)
3. Welcome screen: "Discover cocktails through flavor science"
4. Onboarding carousel (3 slides):
   - Slide 1: "Search 600+ cocktails"
   - Slide 2: "Explore flavor relationships"
   - Slide 3: "Learn cocktail families"
5. "Get Started" button
6. Database loads in background (progress bar)
7. Lands on Search tab
8. Optional: "Enable notifications?" system prompt

### Flow 2: Search and Favorite

1. User taps Search tab (already on it)
2. Taps search bar → keyboard appears
3. Types "marg" → autocomplete shows "Margarita"
4. Taps "Margarita" in results
5. Navigation pushes to Cocktail Detail screen
6. Swipes through images (if multiple)
7. Scrolls to see ingredients and instructions
8. Taps node in graph → graph expands
9. Taps heart icon → haptic feedback, animates to filled heart
10. Taps back button → returns to search results
11. Margarita now shows filled heart in list

### Flow 3: Upgrade to Premium

1. User favorites 10 cocktails (free limit)
2. Tries to favorite 11th → paywall modal appears
3. Modal shows:
   - "Unlock unlimited favorites"
   - Feature comparison (Free vs Premium)
   - Pricing: $4.99/mo or $39.99/yr
   - "Start 7-day free trial" button
4. User taps "Start free trial"
5. iOS native payment sheet appears (Face ID or password)
6. User authorizes → purchase completes
7. Modal dismisses with confetti animation
8. User can now favorite unlimited cocktails
9. Settings tab shows "Premium ✨" badge

---

## Design System (iOS)

### Typography

**System Font:** SF Pro (Apple's default)

```swift
Headline (Large): .largeTitle (34pt, bold)
Headline (Medium): .title (28pt, bold)
Headline (Small): .title2 (22pt, bold)
Body: .body (17pt, regular)
Caption: .caption (12pt, regular)
```

### Color Palette (iOS Semantic Colors)

**Light Mode:**
```swift
Background: .systemBackground (white)
Card: .secondarySystemBackground (light gray)
Text Primary: .label (black)
Text Secondary: .secondaryLabel (gray)
Accent: Custom teal (#00D9C0)
```

**Dark Mode:**
```swift
Background: .systemBackground (black)
Card: .secondarySystemBackground (dark gray)
Text Primary: .label (white)
Text Secondary: .secondaryLabel (light gray)
Accent: Custom teal (#00D9C0)
```

### Spacing

```swift
Extra Small: 4pt
Small: 8pt
Medium: 16pt
Large: 24pt
Extra Large: 32pt
```

### Corner Radius

```swift
Button: 12pt
Card: 16pt
Modal: 20pt
```

### Shadows

```swift
Card Shadow: {
  color: .black.opacity(0.1),
  radius: 8,
  x: 0,
  y: 4
}
```

---

## Performance Requirements

### Launch Time
- Cold launch: < 2 seconds (iPhone 12+)
- Warm launch: < 1 second
- Database load: < 3 seconds (first launch only)

### Memory Usage
- Idle: < 50MB
- Active (graph rendering): < 150MB
- Peak: < 200MB

### Battery Usage
- Background: < 1% per hour
- Active use: < 5% per 10 minutes

### Network Usage
- Initial database: ~10MB download
- Weekly updates: < 1MB (delta sync)
- Image caching: Progressive (load as needed)

---

## Testing Strategy

### Unit Tests
- Flavor engine calculations
- Ingredient normalization
- Database queries
- Sync logic

### Integration Tests
- API client
- Database migrations
- iCloud sync
- IAP flow

### UI Tests (XCUITest)
- Search flow
- Favorite flow
- Upgrade flow
- Graph interactions

### Manual Testing
- All iPhone sizes (SE, 14, 15 Pro Max)
- iPad (10.2", 12.9" Pro)
- iOS versions (16, 17, 18 beta)
- Dark mode / Light mode
- Accessibility (VoiceOver, Dynamic Type)

---

## Launch Checklist

### Pre-Submission
- [ ] All features complete and tested
- [ ] No crashes or major bugs
- [ ] App Store assets created (icon, screenshots, videos)
- [ ] Privacy policy hosted and linked
- [ ] Support URL working
- [ ] IAP products configured in App Store Connect
- [ ] TestFlight beta with 10+ testers
- [ ] App Store description written (compelling copy)
- [ ] Keywords researched (ASO)

### Submission
- [ ] Build uploaded to App Store Connect
- [ ] App information filled out
- [ ] Age rating set (17+)
- [ ] Pricing tier set (Free with IAP)
- [ ] Release date: Manual (wait for approval)
- [ ] Submit for review

### Post-Approval
- [ ] Release to App Store
- [ ] Monitor crash reports (Firebase Crashlytics)
- [ ] Monitor reviews and ratings
- [ ] Respond to user feedback
- [ ] Plan next update (bug fixes, features)

---

## Future Roadmap (Post-Launch)

### Version 1.1 (1 month after launch)
- [ ] Bug fixes from user feedback
- [ ] Performance optimizations
- [ ] Additional cocktails added
- [ ] Improved search relevance

### Version 1.2 (2 months)
- [ ] Collections feature
- [ ] Shopping list export
- [ ] More widget types

### Version 2.0 (4-6 months)
- [ ] Barcode scanner
- [ ] AR cocktail visualization
- [ ] Apple Watch companion app
- [ ] iPad-optimized layout

### Version 3.0 (8-12 months)
- [ ] Social features (friends, ratings)
- [ ] Community cocktails
- [ ] Bartender tips & techniques
- [ ] Video tutorials integration

---

## Monetization Projections

### Assumptions
- 1,000 downloads in Month 1
- 5% conversion to premium
- $4.99/month average (mix of monthly/yearly)
- 30% App Store fee

### Revenue Forecast (First Year)

| Month | Downloads | Paying Users | Gross Revenue | Net Revenue (70%) |
|-------|-----------|--------------|---------------|-------------------|
| 1 | 1,000 | 50 | $249 | $174 |
| 2 | 1,500 | 75 | $374 | $262 |
| 3 | 2,000 | 100 | $499 | $349 |
| 6 | 4,000 | 200 | $998 | $699 |
| 12 | 10,000 | 500 | $2,495 | $1,747 |

**Year 1 Total:** ~$10,000 net revenue

---

## Risk Assessment

### Technical Risks

**Risk: React Native performance issues on graphs**
- Mitigation: Extensive testing, fallback to WebView if needed
- Likelihood: Medium
- Impact: High

**Risk: iCloud sync conflicts**
- Mitigation: Last-write-wins strategy, conflict resolution UI
- Likelihood: Low
- Impact: Medium

**Risk: App Store rejection**
- Mitigation: Follow guidelines strictly, TestFlight beta testing
- Likelihood: Low
- Impact: High

### Business Risks

**Risk: Low conversion to premium**
- Mitigation: A/B test paywall, optimize free tier limits
- Likelihood: Medium
- Impact: High

**Risk: Competitor launches similar app**
- Mitigation: Focus on unique flavor science angle
- Likelihood: Low
- Impact: Medium

**Risk: TheCocktailDB API shuts down**
- Mitigation: Bundle data, have fallback API
- Likelihood: Low
- Impact: Critical

---

## Success Definition

**Launch Success:**
- ✅ 1,000+ downloads in first month
- ✅ 4.0+ star rating
- ✅ < 1% crash rate
- ✅ Featured in App Store "New Apps We Love"

**6-Month Success:**
- ✅ 10,000+ total downloads
- ✅ 4.5+ star rating
- ✅ 500+ paying subscribers
- ✅ $1,500+ monthly recurring revenue

**1-Year Success:**
- ✅ 50,000+ total downloads
- ✅ 4.5+ star rating maintained
- ✅ 2,500+ paying subscribers
- ✅ $10,000+ monthly recurring revenue
- ✅ Featured in App Store "Apps We Love"

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-02-17 | Scherm | Initial iOS PRD creation |

---

**Approval Status:** 🔲 Pending Approval
**Next Steps:** Review with stakeholders, create technical implementation plan
**Contact:** GitHub @dscherm
