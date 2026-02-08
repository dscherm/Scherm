import { useState, useRef, useCallback, useEffect } from 'react';
import { Play, Square, RotateCcw, Eye, EyeOff, Lightbulb } from 'lucide-react';
import Modal from '../common/Modal';

function CodePlaygroundPreview({ activity, onClose }) {
  const { content = {}, config = {} } = activity;
  const [code, setCode] = useState(content.starterCode || '// Write your code here\n');
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [revealedHints, setRevealedHints] = useState(0);
  const iframeRef = useRef(null);

  const language = content.language || 'javascript';
  const hints = content.hints || [];

  const resetCode = () => {
    setCode(content.starterCode || '// Write your code here\n');
    setConsoleOutput([]);
    setIsRunning(false);
    setShowSolution(false);
    setRevealedHints(0);
  };

  const stopCode = useCallback(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = '<html><body style="background:#1a1a2e;color:#999;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;font-family:sans-serif"><p>Stopped</p></body></html>';
    }
    setIsRunning(false);
  }, []);

  const runCode = useCallback(() => {
    setConsoleOutput([]);
    setIsRunning(true);

    const isP5 = language === 'p5js';

    const htmlDoc = `<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #1a1a2e; overflow: hidden; }
    canvas { display: block; }
    #console-output {
      position: fixed; bottom: 0; left: 0; right: 0;
      max-height: 40%; overflow-y: auto;
      background: rgba(0,0,0,0.85); color: #0f0;
      font-family: monospace; font-size: 13px; padding: 8px;
      border-top: 1px solid #333;
    }
    .log-line { padding: 2px 0; }
    .error-line { color: #f44; }
  </style>
  ${isP5 ? '<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>' : ''}
</head>
<body>
  <div id="console-output"></div>
  <script>
    const consoleEl = document.getElementById('console-output');
    const origConsole = { log: console.log, error: console.error, warn: console.warn };

    function addLine(text, cls) {
      const div = document.createElement('div');
      div.className = cls || 'log-line';
      div.textContent = String(text);
      consoleEl.appendChild(div);
      consoleEl.scrollTop = consoleEl.scrollHeight;
      window.parent.postMessage({ type: 'console', level: cls === 'error-line' ? 'error' : 'log', text: String(text) }, '*');
    }

    console.log = (...args) => { origConsole.log(...args); addLine(args.join(' ')); };
    console.error = (...args) => { origConsole.error(...args); addLine(args.join(' '), 'error-line'); };
    console.warn = (...args) => { origConsole.warn(...args); addLine(args.join(' ')); };

    window.onerror = (msg) => { addLine('Error: ' + msg, 'error-line'); };

    try {
      ${isP5 ? '' : `${code}`}
    } catch(e) {
      addLine('Error: ' + e.message, 'error-line');
    }
    ${isP5 ? `
    try {
      new p5(function(p) {
        ${code.replace(/function setup/g, 'p.setup = function').replace(/function draw/g, 'p.draw = function').replace(/\b(createCanvas|background|fill|stroke|noStroke|noFill|rect|ellipse|line|text|textSize|textAlign|mouseX|mouseY|width|height|random|map|constrain|dist|sin|cos|PI|TWO_PI|HALF_PI|frameCount|color|push|pop|translate|rotate|scale|beginShape|endShape|vertex|lerp|noise|image|loadImage|CENTER|LEFT|RIGHT|CORNER|CORNERS|RADIUS|keyPressed|mousePressed|keyCode|key|UP_ARROW|DOWN_ARROW|LEFT_ARROW|RIGHT_ARROW|frameRate|millis|abs|floor|ceil|round|sqrt|pow|min|max|println|print)\b/g, 'p.$1')}
      });
    } catch(e) {
      addLine('Error: ' + e.message, 'error-line');
    }` : ''}
  </script>
</body>
</html>`;

    if (iframeRef.current) {
      iframeRef.current.srcdoc = htmlDoc;
    }
  }, [code, language]);

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === 'console') {
        setConsoleOutput(prev => [...prev, { level: e.data.level, text: e.data.text }]);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title="Code Playground Preview"
      icon="💻"
      badge={
        <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded">
          {language === 'p5js' ? 'p5.js' : language}
        </span>
      }
      maxWidth="max-w-6xl"
      fullHeight
    >
      {/* Instructions */}
      {content.instructions && (
        <div className="px-4 py-3 bg-accent-purple/10 border-b border-dark-border">
          <p className="text-sm text-text-secondary">{content.instructions}</p>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Code Editor */}
        <div className="flex-1 flex flex-col border-r border-dark-border">
          {/* Toolbar */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-dark-border bg-dark-bg">
            <button
              onClick={runCode}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white rounded text-sm font-medium transition-colors"
            >
              <Play className="w-4 h-4" /> Run
            </button>
            {isRunning && (
              <button
                onClick={stopCode}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded text-sm font-medium transition-colors"
              >
                <Square className="w-3 h-3" /> Stop
              </button>
            )}
            <button
              onClick={resetCode}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-dark-hover text-text-secondary hover:text-text-primary rounded text-sm transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Reset
            </button>
            <div className="flex-1" />
            {config.showSolution !== false && content.solutionCode && (
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-text-muted hover:text-text-primary text-sm transition-colors"
              >
                {showSolution ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {showSolution ? 'Hide Solution' : 'Show Solution'}
              </button>
            )}
          </div>

          {/* Code textarea */}
          <textarea
            value={showSolution ? (content.solutionCode || '') : code}
            onChange={(e) => !showSolution && setCode(e.target.value)}
            className="flex-1 bg-dark-bg text-text-primary font-mono text-sm p-4 resize-none outline-none"
            spellCheck={false}
            readOnly={showSolution}
          />

          {/* Hints section */}
          {hints.length > 0 && (
            <div className="border-t border-dark-border p-3 bg-dark-bg">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-text-secondary">
                  Hints ({revealedHints}/{hints.length})
                </span>
                {revealedHints < hints.length && (
                  <button
                    onClick={() => setRevealedHints(prev => prev + 1)}
                    className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded hover:bg-yellow-500/30 transition-colors"
                  >
                    Reveal Next Hint
                  </button>
                )}
              </div>
              <div className="space-y-1">
                {hints.slice(0, revealedHints).map((hint, i) => (
                  <p key={i} className="text-sm text-text-muted pl-6">
                    <span className="text-yellow-400 mr-2">{i + 1}.</span>
                    {hint}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Output Panel */}
        <div className="w-[45%] flex flex-col">
          <div className="px-3 py-2 border-b border-dark-border bg-dark-bg">
            <span className="text-sm font-medium text-text-secondary">Output</span>
          </div>
          <div className="flex-1 relative bg-[#1a1a2e]">
            <iframe
              ref={iframeRef}
              title="Code Output"
              className="absolute inset-0 w-full h-full border-0"
              sandbox="allow-scripts"
              srcDoc='<html><body style="background:#1a1a2e;color:#999;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;font-family:sans-serif"><p>Click Run to see output</p></body></html>'
            />
          </div>

          {/* Console output */}
          {consoleOutput.length > 0 && (
            <div className="max-h-[30%] overflow-y-auto border-t border-dark-border bg-dark-bg p-3">
              <p className="text-xs font-medium text-text-muted mb-1">Console</p>
              {consoleOutput.map((line, i) => (
                <p key={i} className={`font-mono text-xs ${line.level === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                  {line.text}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default CodePlaygroundPreview;
