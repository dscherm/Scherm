# iOS Development Guide
## Cocktail Mixologist - Apple App Store Version

**⚠️ IMPORTANT: iOS development requires macOS with Xcode. You cannot build iOS apps on Linux or Windows.**

---

## Can I Run This From Here?

**Short Answer: No** ❌

**Why:**
- iOS apps require Xcode, which only runs on macOS
- You're currently on a Linux system (`/home/user/CodeExamples`)
- React Native iOS development needs macOS build tools
- iOS Simulator only works on macOS
- App Store submission requires Mac + Xcode

**What you CAN do here:**
✅ Review the PRD and planning documents
✅ Understand the architecture and requirements
✅ Plan the development approach
✅ Port non-iOS-specific code (flavor engine logic)

**What you NEED to do on a Mac:**
🍎 Set up React Native development environment
🍎 Install Xcode and iOS Simulator
🍎 Run the Expo/React Native project
🍎 Test on iOS devices
🍎 Build for App Store submission

---

## What You Have Now

### Documentation (Complete ✅)

1. **PRD-iOS.md** (15,000+ words)
   - Complete product requirements for iOS app
   - All features documented
   - Technical architecture
   - App Store requirements
   - Monetization strategy

2. **plan-ios.md** (28 tasks)
   - Phase 1: Project Setup (4 tasks)
   - Phase 2: Core UI (4 tasks)
   - Phase 3: Codex (2 tasks)
   - Phase 4: Favorites (2 tasks)
   - Phase 5: Polish (2 tasks)
   - Phase 6: Premium/IAP (3 tasks)
   - Phase 7: Sync (2 tasks)
   - Phase 8: Widgets (1 task)
   - Phase 9: App Store (2 tasks)
   - Phase 10: Testing (2 tasks)

3. **PROMPT-ios.md**
   - iOS-specific Ralph loop instructions
   - React Native development patterns
   - Testing strategies
   - App Store preparation steps

4. **activity-ios.md**
   - Activity log template
   - Environment check commands

---

## Your Options

### Option 1: Develop on Your Own Mac

**If you have a Mac:**

1. **Transfer files to your Mac:**
   ```bash
   # On Mac, clone this repo
   git clone https://github.com/dscherm/Scherm.git
   cd Scherm

   # Or copy these specific files:
   # - PRD-iOS.md
   # - plan-ios.md
   # - PROMPT-ios.md
   # - activity-ios.md
   ```

2. **Install requirements:**
   ```bash
   # Install Xcode from App Store (free)
   # Install Node.js
   brew install node

   # Install Expo CLI
   npm install -g expo-cli

   # Verify Xcode command line tools
   xcode-select --install
   ```

3. **Create the project:**
   ```bash
   npx create-expo-app cocktail-mixologist-ios --template blank-typescript
   cd cocktail-mixologist-ios
   ```

4. **Start development:**
   ```bash
   # Manual approach
   npm install
   npx expo start
   # Press 'i' to open iOS simulator

   # OR use Ralph loop (when agent is on Mac)
   # cd ..  # Back to repo root
   # ./ralph-ios.sh 10
   ```

---

### Option 2: Use GitHub Codespaces (macOS)

**GitHub offers macOS codespaces:**

1. Go to your repo on GitHub.com
2. Click "Code" → "Codespaces" → "New codespace"
3. Select macOS as the machine type
4. Wait for environment to provision
5. Follow Option 1 steps inside the codespace

**Note:** macOS codespaces are more expensive than Linux codespaces.

---

### Option 3: Use Mac Cloud Service

**Services that provide Mac instances:**
- **MacStadium** (macOS in the cloud)
- **MacinCloud** (rent a Mac by the hour)
- **AWS EC2 Mac Instances** (expensive but scalable)

These let you run macOS remotely and develop iOS apps from any device.

---

### Option 4: Wait for Expo EAS Build

**Expo EAS can build iOS apps on Linux/Windows:**

1. Develop on Linux using Expo
2. Test with Expo Go app on physical iPhone
3. Use `eas build --platform ios` to build in cloud
4. Download IPA file for testing/submission

**Limitations:**
- Can't test on iOS Simulator
- Slower feedback loop
- Need physical iPhone for testing
- Limited debugging options

---

## Development Environment Setup (macOS Only)

### Prerequisites

**Hardware:**
- Mac with Apple Silicon (M1/M2/M3) or Intel (2019+)
- 16GB RAM minimum (32GB recommended)
- 50GB free disk space

**Software:**
```bash
# 1. Xcode 15+ (from App Store)
# Download takes ~12GB, installation ~40GB

# 2. Homebrew (package manager)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 3. Node.js 18+
brew install node

# 4. Watchman (file watching for React Native)
brew install watchman

# 5. Expo CLI
npm install -g expo-cli

# 6. CocoaPods (iOS dependency manager)
sudo gem install cocoapods
```

### Verify Installation

```bash
# Check Xcode
xcode-select -p
# Should output: /Applications/Xcode.app/Contents/Developer

# Check Node
node -v
# Should output: v18.x.x or higher

# Check Expo
npx expo --version
# Should output: 50.x.x or similar

# List iOS simulators
xcrun simctl list devices
# Should show available iPhone simulators
```

---

## Project Initialization (macOS)

### Step 1: Create Expo Project

```bash
# In a clean directory on your Mac
npx create-expo-app cocktail-mixologist-ios --template blank-typescript

cd cocktail-mixologist-ios
```

### Step 2: Install Dependencies

```bash
# Navigation
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context

# Visualization
npm install react-native-svg

# Gestures & Animations
npm install react-native-reanimated react-native-gesture-handler

# Data & Storage
npm install expo-sqlite expo-haptics expo-secure-store

# IAP (later)
npm install react-native-iap
```

### Step 3: Configure app.json

```json
{
  "expo": {
    "name": "Cocktail Mixologist",
    "slug": "cocktail-mixologist",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#1a0a28"
    },
    "ios": {
      "bundleIdentifier": "com.scherm.cocktailmixologist",
      "supportsTablet": true,
      "infoPlist": {
        "NSPhotoLibraryUsageDescription": "Save cocktail recipe cards to your photo library"
      }
    },
    "plugins": [
      "expo-sqlite",
      [
        "expo-build-properties",
        {
          "ios": {
            "deploymentTarget": "15.0"
          }
        }
      ]
    ]
  }
}
```

### Step 4: Copy Flavor Engine

```bash
# Copy from web app
cp ../docs/flavor-engine.js src/lib/flavor-engine.ts

# Convert to TypeScript
# (add type annotations, export statements)
```

### Step 5: Run on iOS Simulator

```bash
npx expo start

# Press 'i' in terminal to launch iOS simulator
# App should open with default Expo template
```

---

## Development Workflow (macOS)

### Daily Development

```bash
# Start dev server
cd cocktail-mixologist-ios
npx expo start

# Press:
# 'i' - iOS simulator
# 'r' - Reload
# 'j' - Open debugger
# 'c' - Clear cache
```

### Testing

```bash
# Run unit tests
npm test

# Run type checking
npx tsc --noEmit

# Run linter
npx eslint src/

# Run on real device
# Scan QR code with Expo Go app
```

### Building

```bash
# For local testing
npx expo run:ios

# For TestFlight/App Store
eas build --platform ios --profile production
```

---

## Using Ralph Loop on macOS

### Prerequisites

Make sure you're on macOS with all environment checks passing:

```bash
cd /path/to/Scherm  # Your repo on Mac

# Check environment
./check-ios-env.sh  # Create this script with checks from activity-ios.md
```

### Running Ralph Loop

```bash
# From repo root on Mac
./ralph-ios.sh 10

# The agent will:
# 1. Check macOS environment
# 2. Find next task in plan-ios.md
# 3. Implement the task
# 4. Test on iOS simulator
# 5. Take screenshot
# 6. Update activity-ios.md
# 7. Mark task complete in plan-ios.md
# 8. Commit changes
# 9. Repeat until all tasks done or max iterations
```

### Monitoring

```bash
# Watch activity log
tail -f activity-ios.md

# Check screenshots
open screenshots/

# View git commits
git log --oneline -10
```

---

## Cost Breakdown

### Development Costs

**Required:**
- **Apple Developer Account:** $99/year (required for App Store submission)
- **Mac (if you don't have one):**
  - Mac Mini M2: $599
  - MacBook Air M2: $1,099
  - MacBook Pro M3: $1,599+

**Optional:**
- **GitHub Codespaces (macOS):** ~$0.60/hour
- **MacinCloud:** $30-50/month
- **Physical iPhone for testing:** $429+ (iPhone 15)

### Total Minimum Investment

**If you have a Mac:** $99/year (just dev account)
**If you need a Mac:** $698 + $99/year

---

## Timeline Estimate

### Full-Time Development (40 hrs/week)

- **Phase 1-2 (Foundation):** 2-3 weeks
- **Phase 3-5 (Core Features):** 2-3 weeks
- **Phase 6-7 (Premium):** 2 weeks
- **Phase 8-9 (Widgets/Store):** 1 week
- **Phase 10 (Testing):** 1-2 weeks

**Total: 8-11 weeks (2-3 months)**

### Part-Time Development (10 hrs/week)

**Total: 32-44 weeks (8-11 months)**

---

## What to Do Right Now

### Step 1: Decide Your Approach

- [ ] Do you have a Mac? (If yes, proceed to Step 2)
- [ ] Do you want to buy a Mac? (Budget $600-1600)
- [ ] Do you want to use cloud Mac? (Budget $30-60/month)
- [ ] Do you want to wait and use Expo EAS? (Limited but possible)

### Step 2: Set Up Development Environment

If you have or got a Mac:

1. [ ] Install Xcode from App Store
2. [ ] Install Homebrew
3. [ ] Install Node.js, Watchman
4. [ ] Install Expo CLI
5. [ ] Run environment verification commands

### Step 3: Create Project

1. [ ] Transfer files to Mac (PRD-iOS.md, plan-ios.md, etc.)
2. [ ] Run `npx create-expo-app cocktail-mixologist-ios`
3. [ ] Install dependencies
4. [ ] Test on iOS simulator

### Step 4: Start Development

Choose one:

**Manual Development:**
- Follow plan-ios.md tasks one by one
- Test each feature on simulator
- Commit progress regularly

**Autonomous Development (Ralph Loop):**
- Ensure macOS environment ready
- Run `./ralph-ios.sh 10`
- Monitor progress in activity-ios.md

---

## Resources

**Official Docs:**
- [React Native](https://reactnative.dev/docs/environment-setup)
- [Expo](https://docs.expo.dev/)
- [Apple Developer](https://developer.apple.com/ios/)
- [App Store Guidelines](https://developer.apple.com/app-store/review/guidelines/)

**Learning Resources:**
- [React Native Tutorial](https://reactnative.dev/docs/tutorial)
- [Expo Tutorial](https://docs.expo.dev/tutorial/introduction/)
- [iOS Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios)

**Community:**
- [React Native Discord](https://discord.gg/reactnative)
- [Expo Discord](https://discord.gg/expo)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/react-native)

---

## Frequently Asked Questions

### Q: Can I develop iOS apps on Windows/Linux?

**A: No, not natively.** You need macOS with Xcode for iOS development. You can use:
- Expo EAS Build (builds in cloud, limited local testing)
- Cloud Mac services (rent macOS remotely)
- GitHub Codespaces with macOS

### Q: Do I need to learn Swift/Objective-C?

**A: No, not for React Native.** You'll write JavaScript/TypeScript. Swift is only needed for advanced native modules (rare).

### Q: How much will Apple charge me?

**A: $99/year** for Apple Developer Program (required for App Store). Plus 30% of all IAP revenue (Apple's cut).

### Q: Can I test without a physical iPhone?

**A: Yes!** iOS Simulator is included with Xcode and works great for most testing. Physical device is only needed for:
- Performance testing
- Camera features
- Push notifications
- Final QA before submission

### Q: How long does App Store review take?

**A: 24-48 hours typically.** Sometimes faster (few hours), rarely longer (1 week). Average is 1-2 days.

### Q: Can I update the app after launch?

**A: Yes!** Submit updates through App Store Connect. Users get notified of updates automatically.

---

## Summary

✅ **You have:** Complete iOS app planning and documentation
❌ **You need:** Mac with Xcode to actually build the app
⏱️ **Timeline:** 2-3 months full-time development
💰 **Cost:** $99/year minimum (dev account) + Mac if needed

**Next Step:** Get a Mac, set up environment, and start Phase 1! 🚀

---

*Created: 2026-02-17*
*Last Updated: 2026-02-17*
