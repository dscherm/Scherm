# Ralph Loop Instructions - iOS Development

You are an autonomous development agent working on the Cocktail Mixologist iOS app.

## Context Files
@plan-ios.md - iOS development tasks with steps and pass/fail status
@activity-ios.md - Log of your recent iOS development activity
@PRD-iOS.md - Complete iOS product requirements document

## IMPORTANT: Development Environment

**⚠️ CRITICAL: This iOS development requires macOS with Xcode**

You MUST be running on a Mac with:
- macOS 13.0+ (Ventura or later)
- Xcode 15.0+
- Node.js 18+
- Expo CLI installed (`npm install -g expo-cli`)
- iOS Simulator or physical iPhone connected
- Apple Developer Account (for App Store submission)

**If not on macOS:**
- You cannot complete iOS development tasks
- Output: `<promise>BLOCKED: Requires macOS with Xcode</promise>`
- User must run this on a Mac or use GitHub Codespaces with macOS

## Your Mission

Build the Cocktail Mixologist iOS app one feature at a time in a systematic, verifiable manner.

## Operating Rules

### 1. One Task Per Iteration
- Read `activity-ios.md` to understand current state
- Find the next task in `plan-ios.md` where `passes: false`
- Complete ONLY that task in this iteration
- Do not work on multiple tasks simultaneously

### 2. Verification Requirements

**For code changes:**
```bash
# Start Expo dev server
cd cocktail-mixologist-ios
npx expo start

# Run on iOS simulator
i (press 'i' in terminal)

# Take screenshot
xcrun simctl io booted screenshot screenshots/<task-name>.png
```

**For React Native components:**
```bash
# Run unit tests
npm test

# Run type checking
npx tsc --noEmit

# Run linter
npx eslint src/
```

**For database:**
```bash
# Test SQL queries
npx expo start
# Open app, check Expo console logs
# Verify data loads correctly
```

### 3. Activity Logging
Update `activity-ios.md` with dated entry:

```markdown
## 2026-02-17 - Task: [Task Name]

**Goal:** [Brief description]

**Changes Made:**
- Created SearchScreen.tsx
- Added native search bar component
- Connected to SQLite database

**Verification:**
- Ran: `npx expo start`, opened in simulator
- Searched for "Margarita", results appeared
- Screenshot: `screenshots/search-working.png`

**Status:** ✅ Complete
```

### 4. Mark Task as Passing
Update `plan-ios.md`:
- Change `"passes": false` to `"passes": true`
- Maintain JSON formatting

### 5. Git Commit
```bash
git add .
git commit -m "feat(ios): [brief description]

- Detailed change 1
- Detailed change 2

Verified: [screenshot name or test result]"
```

### 6. Completion Signal
When ALL tasks have `passes: true`:
```
<promise>COMPLETE</promise>
```

## iOS-Specific Workflow

### Initial Project Setup (Phase 1, Task 1)
```bash
# Create new Expo project
npx create-expo-app cocktail-mixologist-ios --template blank-typescript

cd cocktail-mixologist-ios

# Install dependencies
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
npm install react-native-svg
npm install react-native-reanimated react-native-gesture-handler
npm install expo-sqlite expo-haptics expo-secure-store

# Initialize git
git init
git add .
git commit -m "chore: initialize expo project"
```

### Running on iOS Simulator
```bash
# Start dev server
npx expo start

# Press 'i' to open iOS simulator
# Or scan QR code with Expo Go app on physical iPhone
```

### Testing Patterns

**Component Testing:**
```typescript
// src/components/__tests__/CocktailCard.test.tsx
import { render, fireEvent } from '@testing-library/react-native';
import CocktailCard from '../CocktailCard';

test('renders cocktail name', () => {
  const { getByText } = render(
    <CocktailCard name="Margarita" image="..." />
  );
  expect(getByText('Margarita')).toBeTruthy();
});
```

**Database Testing:**
```typescript
// src/lib/__tests__/database.test.ts
import { openDatabase, searchCocktails } from '../database';

test('searches cocktails by name', async () => {
  const results = await searchCocktails('Margarita');
  expect(results.length).toBeGreaterThan(0);
  expect(results[0].name).toContain('Margarita');
});
```

## Verification Examples

### UI Changes
```bash
# Before
xcrun simctl io booted screenshot screenshots/before-search.png

# Make changes to SearchScreen.tsx...

# After
npx expo start
# Press 'i', navigate to Search tab
xcrun simctl io booted screenshot screenshots/after-search.png
```

### Database Changes
```bash
# Test query
cd cocktail-mixologist-ios
node -e "
const db = require('expo-sqlite').openDatabase('cocktails.db');
db.transaction(tx => {
  tx.executeSql('SELECT * FROM cocktails WHERE name LIKE ?', ['%Margarita%'],
    (_, { rows }) => console.log(rows._array)
  );
});
"
```

### Performance Testing
```bash
# Run in release mode
npx expo run:ios --configuration Release

# Profile with Xcode Instruments
# Open Xcode -> Open Developer Tool -> Instruments
# Select "Time Profiler" or "Allocations"
# Attach to app process
```

## Common iOS Development Patterns

### SafeAreaView Usage
```tsx
import { SafeAreaView } from 'react-native-safe-area-context';

function SearchScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Content */}
    </SafeAreaView>
  );
}
```

### Dark Mode Support
```tsx
import { useColorScheme } from 'react-native';
import Colors from '../constants/Colors';

function MyComponent() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return <View style={{ backgroundColor: colors.background }} />;
}
```

### Haptic Feedback
```tsx
import * as Haptics from 'expo-haptics';

function onButtonPress() {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  // ... button logic
}
```

### Navigation
```tsx
import { useNavigation } from '@react-navigation/native';

function CocktailCard({ cocktail }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CocktailDetail', { id: cocktail.id })}
    >
      {/* Card content */}
    </TouchableOpacity>
  );
}
```

## Error Handling

### Environment Check
Before starting any task, verify:
```bash
# Check if on macOS
uname -a | grep -i darwin || { echo "Not macOS"; exit 1; }

# Check Xcode installed
xcode-select -p || { echo "Xcode not installed"; exit 1; }

# Check Node.js version
node -v | grep -E "v1[89]|v2[0-9]" || { echo "Node 18+ required"; exit 1; }
```

If checks fail, output:
```
<promise>BLOCKED: Missing requirements</promise>
```

### Common Issues

**Metro bundler won't start:**
```bash
# Clear cache
npx expo start -c
```

**Simulator won't open:**
```bash
# List available simulators
xcrun simctl list devices

# Boot specific simulator
xcrun simctl boot "iPhone 15 Pro"
```

**Dependencies won't install:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Quality Standards

### Code Quality
- Follow React Native best practices
- Use TypeScript for all new files
- Extract reusable components
- Avoid prop drilling (use context/hooks)
- Keep components under 200 lines

### Performance
- All lists use FlatList (not ScrollView with map)
- Images use cached loading
- Animations use react-native-reanimated (not Animated API)
- No synchronous database queries on main thread

### Testing
- Unit tests for utilities and hooks
- Component tests for UI logic
- Integration tests for database operations
- Manual testing on iPhone SE (smallest) and Pro Max (largest)

### Git Hygiene
- One commit per task
- Clear commit messages with scope: `feat(ios):`, `fix(ios):`, `test(ios):`
- Include verification proof in commit message

## App Store Preparation (Phase 9)

### Screenshot Requirements
```bash
# iPhone 6.7" (iPhone 15 Pro Max)
xcrun simctl io "iPhone 15 Pro Max" screenshot screenshots/appstore-1.png

# iPhone 6.5" (iPhone 11 Pro Max)
xcrun simctl io "iPhone 11 Pro Max" screenshot screenshots/appstore-2.png

# iPad 12.9"
xcrun simctl io "iPad Pro (12.9-inch)" screenshot screenshots/appstore-ipad-1.png
```

### Build for TestFlight
```bash
# Build for iOS
eas build --platform ios --profile preview

# Or using Xcode
npx expo prebuild
open ios/CocktailMixologist.xcworkspace
# Product -> Archive in Xcode
```

## Anti-Patterns (DON'T DO THIS)

❌ Working on multiple tasks at once
❌ Not testing on iOS simulator before marking complete
❌ Using web-specific code (document, window, etc.)
❌ Hardcoding dimensions (use responsive layout)
❌ Forgetting SafeAreaView on screens
❌ Not handling dark mode
❌ Using inline styles (use StyleSheet.create)
❌ Synchronous heavy operations on main thread

## Success Criteria

A task is complete when:
✅ All implementation steps done
✅ App runs without errors on iOS simulator
✅ Screenshots taken showing feature working
✅ Activity-ios.md updated with dated entry
✅ Plan-ios.md task marked `passes: true`
✅ Git commit created with clear message
✅ No TypeScript errors (`npx tsc --noEmit`)
✅ Tests pass (if applicable)

## Remember

- **Check macOS environment first**
- **One task at a time**
- **Always test on iOS simulator**
- **Document in activity-ios.md**
- **Commit after each task**
- **Output `<promise>COMPLETE</promise>` when all tasks pass**

Good luck building the iOS app! 📱🚀
