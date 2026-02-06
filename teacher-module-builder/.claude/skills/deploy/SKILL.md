---
name: deploy
description: "Build and deploy the teacher-module-builder application. Use when building for production, deploying to Firebase Hosting, or configuring environment variables."
disable-model-invocation: true
---

## Build and Deployment

This skill covers all build configuration, environment setup, and deployment procedures for the teacher-module-builder application.

---

## 1. Vite Build Configuration

The project uses Vite 5.0 as the build tool. Configuration is in `vite.config.js` at the project root.

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/teacher-module-builder/',
  server: {
    port: 3002,
    open: true
  }
})
```

### Critical Configuration Notes

| Setting | Value | Purpose |
|---------|-------|---------|
| `base` | `/teacher-module-builder/` | Sets the public base path for all assets when deployed to a subdirectory |
| `server.port` | `3002` | Local development server port |
| `server.open` | `true` | Automatically opens browser on `npm run dev` |

The `base` path is critical. It must match:
- The subdirectory where the app is hosted (e.g., `https://yourdomain.com/teacher-module-builder/`)
- The `basename` prop on `<BrowserRouter>` in `src/main.jsx`

```javascript
// src/main.jsx - basename must match vite.config.js base
<BrowserRouter basename="/teacher-module-builder">
  <App />
</BrowserRouter>
```

If these values do not match, the app will produce 404 errors on navigation or serve blank pages.

---

## 2. Environment Variables Setup

### Creating the `.env` File

Copy the example file and fill in your Firebase project values:

```bash
cp .env.example .env
```

### Required Variables

```
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef123456
```

### Where to Get These Values

1. Open the [Firebase Console](https://console.firebase.google.com/).
2. Select your project.
3. Click the gear icon > **Project Settings** > **General**.
4. Scroll to **Your apps** and select your web app.
5. Copy each value from the `firebaseConfig` object.

### Google API Enablement

The application uses Google Slides API and Google Drive API. These must be enabled separately:

1. Open the [Google Cloud Console](https://console.cloud.google.com/).
2. Select the same project linked to your Firebase project.
3. Go to **APIs & Services** > **Library**.
4. Search for and enable:
   - **Google Slides API**
   - **Google Drive API**
5. Go to **APIs & Services** > **Credentials**.
6. Ensure your OAuth 2.0 Client ID has the correct authorized redirect URIs for both development and production.

### How Vite Handles Environment Variables

- Only variables prefixed with `VITE_` are exposed to client-side code.
- Access them via `import.meta.env.VITE_VARIABLE_NAME`.
- Variables are statically replaced at build time.
- The `.env` file must exist at the project root.
- Never commit `.env` to version control. It should be listed in `.gitignore`.

---

## 3. Build Steps

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Starts the Vite development server at `http://localhost:3002` with hot module replacement (HMR). The browser opens automatically.

### Production Build

```bash
npm run build
```

Outputs optimized static files to the `dist/` directory. This includes:
- Minified JavaScript bundles with code splitting
- Optimized CSS
- Copied static assets from `public/`
- `index.html` with injected script/style tags

### Preview Production Build Locally

```bash
npm run preview
```

Serves the `dist/` directory locally to verify the production build works correctly before deploying.

### Lint Check

```bash
npm run lint
```

Runs ESLint to check for code quality issues.

### Full Build-and-Verify Sequence

```bash
npm install && npm run lint && npm run build && npm run preview
```

---

## 4. Firebase Hosting Deployment

### Prerequisites

Install the Firebase CLI globally if not already installed:

```bash
npm install -g firebase-tools
```

### First-Time Setup

```bash
# Login to Firebase
firebase login

# Initialize Firebase Hosting in the project directory
firebase init hosting
```

When prompted during `firebase init hosting`:
- **Select a project**: Choose your existing Firebase project
- **Public directory**: Enter `dist`
- **Configure as single-page app**: Yes
- **Set up automatic builds with GitHub**: Optional (choose based on your workflow)
- **Overwrite dist/index.html**: No (if it already exists from a build)

This creates two files:
- `firebase.json` - Hosting configuration
- `.firebaserc` - Project alias configuration

### `firebase.json` Configuration

```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

The `rewrites` rule is essential for single-page app routing. It sends all requests to `index.html`, allowing React Router to handle client-side routing.

### Deploy

```bash
# Build first, then deploy
npm run build && firebase deploy --only hosting
```

After deployment, Firebase CLI outputs the hosting URL (e.g., `https://your-project.web.app/teacher-module-builder/`).

### Deploy to a Specific Site (if using multiple sites)

```bash
firebase deploy --only hosting:site-name
```

---

## 5. Pre-Deploy Verification Checklist

Run through this checklist before every production deployment:

### Environment and Configuration

- [ ] `.env` file contains all required `VITE_FIREBASE_*` variables
- [ ] `vite.config.js` has correct `base` path: `/teacher-module-builder/`
- [ ] `src/main.jsx` has matching `basename` on `<BrowserRouter>`

### Build Verification

- [ ] `npm install` completes without errors
- [ ] `npm run lint` passes without errors
- [ ] `npm run build` succeeds and produces `dist/` directory
- [ ] `npm run preview` serves the app correctly at localhost

### Firebase Configuration

- [ ] Firebase project is correctly selected (`firebase use` to check)
- [ ] `firebase.json` has `"public": "dist"` and SPA rewrite rule
- [ ] Firestore security rules are deployed (`firebase deploy --only firestore:rules`)

### Authentication

- [ ] Google OAuth redirect URIs updated in Google Cloud Console for production domain
- [ ] Production domain added to Firebase Console > Authentication > Settings > Authorized domains

### Google APIs

- [ ] Google Slides API enabled in Google Cloud Console
- [ ] Google Drive API enabled in Google Cloud Console
- [ ] OAuth consent screen configured with correct scopes

### Post-Deploy Verification

- [ ] App loads at production URL without blank page
- [ ] Google Sign-In works
- [ ] Creating a new unit works (Firestore write)
- [ ] Loading existing units works (Firestore read)
- [ ] Generating Google Slides works (API integration)
- [ ] Refreshing any page does not produce a 404

---

## 6. Common Issues and Solutions

### 404 on Page Refresh

**Symptom**: Navigating directly to a route like `/teacher-module-builder/unit/abc123` returns a 404 error.

**Cause**: The hosting server does not know about client-side routes and tries to find a file at that path.

**Solution**: Ensure `firebase.json` has the SPA rewrite rule:
```json
{
  "hosting": {
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
```

Then redeploy: `firebase deploy --only hosting`

### Blank Page After Deployment

**Symptom**: The app loads but shows a white/blank page with no content.

**Cause**: The `base` path in `vite.config.js` does not match the deployment URL, so JS and CSS files fail to load.

**Solution**: Verify that `base` in `vite.config.js` matches the actual subdirectory path. Check the browser's Network tab for 404 errors on JS/CSS files. If deploying to root, set `base: '/'`.

### Google Authentication Errors

**Symptom**: "Error 400: redirect_uri_mismatch" or similar auth errors in production.

**Cause**: The production domain is not registered as an authorized redirect URI.

**Solution**:
1. Go to Google Cloud Console > APIs & Services > Credentials.
2. Edit your OAuth 2.0 Client ID.
3. Add the production URL to **Authorized JavaScript origins** and **Authorized redirect URIs**.
4. Also add the domain in Firebase Console > Authentication > Settings > Authorized domains.

### Google Slides API Errors

**Symptom**: "Request had insufficient authentication scopes" or "Google Slides API has not been used in project" errors.

**Cause**: The API is not enabled or OAuth scopes are not configured.

**Solution**:
1. Enable the Google Slides API in Google Cloud Console > APIs & Services > Library.
2. Enable the Google Drive API in the same location.
3. Verify that `googleProvider.addScope()` is called with the correct scope URLs in `src/services/firebase.js`.
4. Users may need to sign out and sign in again to grant the new scopes.

### Build Fails with Module Errors

**Symptom**: `npm run build` fails with import or module resolution errors.

**Solution**:
1. Delete `node_modules` and `package-lock.json`.
2. Run `npm install` fresh.
3. Verify all imports use correct paths (case-sensitive on Linux hosting).

```bash
rm -rf node_modules package-lock.json && npm install && npm run build
```

### Environment Variables Not Working

**Symptom**: Firebase initialization fails, or `import.meta.env.VITE_*` returns `undefined`.

**Cause**: `.env` file is missing, variables are not prefixed with `VITE_`, or the dev server was not restarted after changes.

**Solution**:
1. Verify `.env` exists at the project root.
2. Confirm all variables start with `VITE_`.
3. Restart the dev server (`npm run dev`) after modifying `.env`.
4. For production builds, ensure `.env` exists before running `npm run build`.
