# Fix p5.js Duplicate Import Error

Fix the "p5.js seems to have been imported multiple times" error in exercise components that use iframes.

## Problem
When running p5.js code in an iframe (like in exercise detail components), clicking "Run" multiple times can cause p5.js to detect it's being loaded again before the previous instance is fully cleared.

## Solution
Use the `srcdoc` attribute on iframes instead of `document.write()`. This completely replaces the iframe content with a fresh document context each time.

## Files to Check
- `src/components/objects-images/ObjectsImagesExerciseDetail.jsx`
- `src/components/data-apis/DataApisExerciseDetail.jsx`
- Any other component using iframes with p5.js

## Fix Pattern

### Before (problematic):
```javascript
const runCode = () => {
  if (iframeRef.current) {
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(htmlContent);
    doc.close();
  }
};
```

### After (fixed):
```javascript
const runCode = () => {
  if (iframeRef.current) {
    // Use srcdoc for clean replacement - avoids p5.js duplicate import issues
    iframeRef.current.srcdoc = generateHTMLPreview(code);
  }
};
```

### Also fix stopCode:
```javascript
const stopCode = () => {
  setIsRunning(false);
  if (iframeRef.current) {
    iframeRef.current.srcdoc = '<html><body style="background:#1a1a2e;color:#888;padding:20px;font-family:Arial;">Click "Run Code" to see your output</body></html>';
  }
};
```

## If srcdoc Still Doesn't Work

Try adding a unique key to force React to recreate the iframe:

```javascript
const [iframeKey, setIframeKey] = useState(0);

const runCode = () => {
  setIframeKey(prev => prev + 1); // Force new iframe
  // ... rest of code
};

// In JSX:
<iframe
  key={iframeKey}
  ref={iframeRef}
  // ...
/>
```

## After Fixing
1. Rebuild: `npm run build`
2. Deploy: `firebase deploy`
3. Clear browser cache or hard refresh (Ctrl+Shift+R)
