---
outline: deep
title: Python Editor
description: Interactive Python code editor with real-time execution
---

# Python Editor <Badge type="danger" text="Experimental" />

An interactive Python code editor that runs real Python code in your browser 

<div class="editor-container">
  <div class="tabs">
    <button class="tab active" onclick="switchLanguage('python')">Python</button>
  </div>
  <div class="editor-wrapper">
    <div id="monaco-editor"></div>
  </div>
  <div class="buttons">
    <button class="run" onclick="runCode()">Run Code</button>
    <button class="download" onclick="downloadCode()">Download</button>
    <button class="fullscreen" onclick="openFullscreenTab()">Open in New Tab</button>
    <button class="fullscreen" onclick="openMobileTab()">Mobile Editor</button>
    <button class="clear" onclick="clearOutput()">Clear Output</button>
    <button class="reset" onclick="resetCode()">Reset Code</button>
  </div>
  <div class="result">
    <strong>Output:</strong>
    <div id="output">Write some Python code and click "Run Code" to see results...</div>
  </div>
</div>

## ℹ️ About This Python Editor

This editor provides a full Python 3 environment running directly in your browser:

- **Real Python Execution**: Uses Skulpt Python interpreter to run actual Python code
- **Monaco Editor**: Professional code editor with syntax highlighting and IntelliSense
- **Standard Library Support**: Includes common Python modules like `math`, `random`, etc.
- **Instant Feedback**: See your code output immediately without any setup



<style>
.editor-container {
  background: var(--vp-c-bg-alt);
  border-radius: 8px;
  overflow: hidden;
  margin: 20px 0;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.tabs {
  display: flex;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.tab {
  padding: 12px 20px;
  background: none;
  border: none;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.tab.active {
  color: var(--vp-c-brand-1);
  background: var(--gradient-primary);
  border-bottom: 2px solid var(--vp-c-brand-1);
}

.tab:hover:not(.active) {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-mute);
}

.editor-wrapper {
  position: relative;
  background: var(--vp-c-bg);
}

#monaco-editor {
  height: 350px;
  width: 100%;
  border: none;
}

/* Open in New Tab Button */
.fullscreen {
  padding: 10px 20px;
  background: var(--btn-primary-bg);
  color: #1e293b; /* Dark text for light mode */
  border: 1px solid var(--btn-primary-border);
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.fullscreen:hover {
  background: var(--btn-primary-hover);
  border-color: var(--btn-primary-border-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  color: #0f172a; /* Darker text on hover */
}

.buttons {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
}

/* Primary Action Buttons - Run Code */
.run {
  padding: 10px 20px;
  background: var(--btn-primary-bg);
  color: #1e293b; /* Dark text for light mode */
  border: 1px solid var(--btn-primary-border);
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.run:hover {
  background: var(--btn-primary-hover);
  border-color: var(--btn-primary-border-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  color: #0f172a; /* Darker text on hover */
}

/* Primary Action Buttons - Download */
.download {
  padding: 10px 20px;
  background: var(--btn-primary-bg);
  color: #1e293b; /* Dark text for light mode */
  border: 1px solid var(--btn-primary-border);
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.download:hover {
  background: var(--btn-primary-hover);
  border-color: var(--btn-primary-border-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3);
  color: #0f172a; /* Darker text on hover */
}

/* Neutral Action Buttons - Clear Output */
.clear {
  padding: 10px 20px;
  background: var(--btn-neutral-bg);
  color: #1e293b; /* Dark text for light mode */
  border: 1px solid var(--btn-neutral-border);
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.clear:hover {
  background: var(--btn-neutral-hover);
  border-color: var(--btn-neutral-border-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
  color: #0f172a; /* Darker text on hover */
}

/* Warning Action Buttons - Reset Code */
.reset {
  padding: 10px 20px;
  background: var(--btn-warning-bg);
  color: #78350f; /* Amber dark text for warning buttons */
  border: 1px solid var(--btn-warning-border);
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.reset:hover {
  background: var(--btn-warning-hover);
  border-color: var(--btn-warning-border-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
  color: #451a03; /* Darker amber text on hover */
}

/* Dark Mode Editor Button Styles */
.dark .fullscreen {
  color: white; /* White text for dark mode */
}

.dark .fullscreen:hover {
  color: white;
}

.dark .run {
  color: white;
}

.dark .run:hover {
  color: white;
}

.dark .download {
  color: white;
}

.dark .download:hover {
  color: white;
}

.dark .clear {
  color: white;
}

.dark .clear:hover {
  color: white;
}

.dark .reset {
  color: white; /* White text for better contrast in dark mode */
}

.dark .reset:hover {
  color: white;
}

.result {
  padding: 16px;
  background: var(--vp-c-bg-alt);
  border-top: 1px solid var(--vp-c-divider);
}

.result strong {
  color: var(--vp-c-brand-1);
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 600;
}

#output {
  color: var(--vp-c-brand-1);
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.5;
  background: var(--vp-c-bg-mute);
  padding: 12px;
  border-radius: 4px;
  border-left: 3px solid var(--vp-c-brand-1);
  white-space: pre-wrap;
  min-height: 80px;
}

/* Dark mode specific overrides for editor */
.dark .editor-container {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
</style>

<script>
if (typeof window !== 'undefined') {
  let editor = null;
  let currentLanguage = 'python';
  
  // Load Monaco Editor and Skulpt dynamically
  function loadMonaco() {
    return new Promise((resolve) => {
      if (window.require && window.monaco) {
        resolve();
        return;
      }
      
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs/loader.min.js';
      script.onload = () => {
        setTimeout(resolve, 100);
      };
      document.head.appendChild(script);
    });
  }
  
  // Load Skulpt for Python execution
  function loadSkulpt() {
    return new Promise((resolve, reject) => {
      if (window.Sk) {
        resolve();
        return;
      }
      
      // Load Skulpt core
      const skulptScript = document.createElement('script');
      skulptScript.src = 'https://skulpt.org/js/skulpt.min.js';
      skulptScript.onload = () => {
        // Load Skulpt standard library
        const skulptStdlib = document.createElement('script');
        skulptStdlib.src = 'https://skulpt.org/js/skulpt-stdlib.js';
        skulptStdlib.onload = () => {
          console.log('Skulpt loaded successfully!');
          resolve();
        };
        skulptStdlib.onerror = () => reject(new Error('Failed to load Skulpt stdlib'));
        document.head.appendChild(skulptStdlib);
      };
      skulptScript.onerror = () => reject(new Error('Failed to load Skulpt'));
      document.head.appendChild(skulptScript);
    });
  }
  
  const pythonTemplate = `# Welcome to the Python Editor! 
# This is a real Python 3 interpreter running in your browser

# Basic Python programming examples
print("Hello from Python!")

# Variables and data types
name = "Python Programmer"
age = 25
height = 5.8
is_student = True

print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height} feet")
print(f"Is student: {is_student}")`;

  async function initializeMonaco() {
    try {
      await loadMonaco();
      
      // Load Skulpt for Python execution
      loadSkulpt().catch(error => {
        console.warn('Skulpt failed to load:', error);
      });
      
      if (!window.require) {
        console.error('Monaco loader not available');
        return;
      }
      
      window.require.config({ 
        paths: { 
          'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs' 
        } 
      });
      
      window.require(['vs/editor/editor.main'], function () {
        const editorElement = document.getElementById('monaco-editor');
        if (!editorElement) {
          console.error('Monaco editor container not found');
          return;
        }
        
        // Detect current theme
        const isDarkMode = document.documentElement.classList.contains('dark') || 
                          window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        editor = monaco.editor.create(editorElement, {
          value: pythonTemplate,
          language: 'python',
          theme: isDarkMode ? 'vs-dark' : 'vs',
          fontSize: 14,
          lineNumbers: 'on',
          roundedSelection: false,
          scrollBeyondLastLine: false,
          readOnly: false,
          automaticLayout: true,
          minimap: { enabled: false },
          folding: true,
          lineNumbersMinChars: 3,
          scrollbar: {
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8
          }
        });
        
        // Watch for theme changes and update editor theme
        const themeObserver = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
              const isDark = document.documentElement.classList.contains('dark');
              if (editor) {
                monaco.editor.setTheme(isDark ? 'vs-dark' : 'vs');
              }
            }
          });
        });
        
        themeObserver.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['class']
        });
        
        console.log('Monaco Editor initialized successfully!');
      });
    } catch (error) {
      console.error('Failed to initialize Monaco:', error);
    }
  }

  function switchLanguage(lang) {
    // This editor is Python-only
    currentLanguage = 'python';
  }

  function downloadCode() {
    if (!editor) {
      showNotification('Editor not ready yet');
      return;
    }
    
    try {
      const code = editor.getValue();
      const blob = new Blob([code], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'exercise.py';
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(url);
      showNotification('Python file downloaded as exercise.py');
    } catch (error) {
      showNotification('Error downloading file');
      console.error('Download error:', error);
    }
  }

  function openFullscreenTab() {
    if (!editor) {
      showNotification('Editor not ready yet');
      return;
    }
    
    try {
      // Get current code
      const currentCode = editor.getValue();
      
      // Save to localStorage for sharing between tabs
      localStorage.setItem('pythonEditorCode', currentCode);
      localStorage.setItem('pythonEditorTimestamp', Date.now().toString());
      
      // Open fullscreen editor HTML file in new tab
      const fullscreenUrl = window.location.origin + '/Python-Programming/editor-fullscreen.html';
      const newTab = window.open(fullscreenUrl, '_blank');
      
      if (newTab) {
        showNotification('Opening Python editor in new tab...');
      } else {
        showNotification('Please allow popups to open fullscreen editor');
      }
    } catch (error) {
      showNotification('Error opening fullscreen editor');
      console.error('New tab error:', error);
    }
  }

  function runCode() {
    const output = document.getElementById('output');
    
    if (!editor) {
      output.textContent = 'Error: Editor not initialized. Please wait for the editor to load.';
      showNotification('Editor not ready yet');
      return;
    }
    
    try {
      const code = editor.getValue();
      output.textContent = `🚀 Running Python code...\\n\\n`;
      
      setTimeout(() => {
        executePython(code, output);
      }, 500);
    } catch (error) {
      output.textContent = `Error: ${error.message}`;
      showNotification('Error running code');
    }
  }
  
  async function executePython(code, output) {
    try {
      if (!window.Sk) {
        output.textContent = '⏳ Loading Python interpreter...\\n\\n';
        await loadSkulpt();
      }
      
      // Configure Skulpt for Python 3
      let pythonOutput = '';
      
      Sk.pre = "output";
      Sk.configure({
        output: function(text) {
          pythonOutput += text;
        },
        read: function(x) {
          if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
            throw "File not found: '" + x + "'";
          }
          return Sk.builtinFiles["files"][x];
        },
        __future__: Sk.python3,
        python3: true
      });
      
      // Execute the Python code
      output.textContent = '🚀 Running Python code...\\n\\n';
      
      const promise = Sk.misceval.asyncToPromise(() => {
        return Sk.importMainWithBody("<stdin>", false, code, true);
      });
      
      await promise;
      
      // Display results
      if (pythonOutput.trim()) {
        output.textContent = `${pythonOutput}\\n✅ Python executed successfully in browser!\\n📝 This code ran using Skulpt - a Python interpreter in JavaScript.\\n🐍 Note: Skulpt supports most Python 3 features. Some advanced features may not be available.`;
      } else {
        output.textContent = `✅ Python code executed successfully!\\n📝 No output produced. Try adding print() statements to see results.\\n\\n🐍 Using Skulpt Python interpreter in browser.\\n📌 Tip: Use print() statements, basic operations, loops, functions, and imports.`;
      }
      
      showNotification('Python executed successfully!');
      
    } catch (error) {
      // Format Python error messages nicely
      let errorMessage = error.toString();
      
      // Extract useful error information
      if (error.traceback) {
        const lineInfo = error.traceback[0];
        if (lineInfo && lineInfo.lineno) {
          errorMessage = `Line ${lineInfo.lineno}: ${error.args ? error.args.v[0].v : errorMessage}`;
        }
      }
      
      output.textContent = `❌ Python Error:\\n${errorMessage}\\n\\n📝 Check your Python syntax and try again.\\n🐍 Using Skulpt Python interpreter.`;
      showNotification('Python execution error');
    }
  }

  function clearOutput() {
    const output = document.getElementById('output');
    output.textContent = 'Output cleared. Write some Python code and click "Run Code" to see results...';
    showNotification('Output cleared');
  }

  function resetCode() {
    if (!editor) {
      showNotification('Editor not ready yet');
      return;
    }
    
    try {
      editor.setValue(pythonTemplate);
      document.getElementById('output').textContent = 'Code reset to template. Ready to run!';
      showNotification('Code reset to Python template');
    } catch (error) {
      showNotification('Error resetting code');
    }
  }

  function openMobileTab() {
    if (!editor) {
      showNotification('Editor not ready yet');
      return;
    }
    
    try {
      // Get current code
      const currentCode = editor.getValue();
      
      // Save to localStorage for sharing between tabs
      localStorage.setItem('pythonEditorCode', currentCode);
      localStorage.setItem('pythonEditorTimestamp', Date.now().toString());
      
      // Open mobile editor HTML file in new tab
      const mobileUrl = window.location.origin + '/Python-Programming/editor-mobile.html';
      const newTab = window.open(mobileUrl, '_blank');
      
      if (newTab) {
        showNotification('Opening mobile Python editor...');
      } else {
        showNotification('Please allow popups to open mobile editor');
      }
    } catch (error) {
      showNotification('Error opening mobile editor');
      console.error('Mobile tab error:', error);
    }
  }

  // Make functions globally available
  window.switchLanguage = switchLanguage;
  window.runCode = runCode;
  window.downloadCode = downloadCode;
  window.openFullscreenTab = openFullscreenTab;
  window.openMobileTab = openMobileTab;
  window.clearOutput = clearOutput;
  window.resetCode = resetCode;

  // Simple notification function
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #3b82f6;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 1001;
      font-size: 14px;
      animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 300);
    }, 2000);
  }
  
  // Mobile detection and redirect
  function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Check for mobile user agents
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
    const isMobileUA = mobileRegex.test(userAgent.toLowerCase());
    
    // Check for touch capability
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Check screen size (mobile-like dimensions)
    const isSmallScreen = window.innerWidth <= 768 || window.innerHeight <= 600;
    
    // Combine checks for better detection
    return isMobileUA || (isTouchDevice && isSmallScreen);
  }
  
  function redirectToMobile() {
    // Get current code if editor exists
    let currentCode = '';
    if (editor) {
      currentCode = editor.getValue();
    }
    
    // Save code to localStorage for mobile editor
    if (currentCode) {
      localStorage.setItem('pythonEditorCode', currentCode);
      localStorage.setItem('pythonEditorTimestamp', Date.now().toString());
    }
    
    // Redirect to mobile editor
    const mobileUrl = window.location.origin + window.location.pathname.replace('/editor/python-editor', '/editor-mobile.html');
    window.location.href = mobileUrl;
  }
  
  function checkMobileAndRedirect() {
    // Check for force mobile parameter (for testing/manual access)
    const urlParams = new URLSearchParams(window.location.search);
    const forceMobile = urlParams.get('mobile') === 'true';
    const forceDesktop = urlParams.get('desktop') === 'true';
    
    if (forceDesktop) {
      console.log('Desktop mode forced via URL parameter');
      return false;
    }
    
    if (forceMobile || isMobileDevice()) {
      console.log(forceMobile ? 'Mobile mode forced via URL parameter' : 'Mobile device detected, redirecting to mobile editor...');
      
      // Add a small delay to show a loading message
      const loadingMsg = document.createElement('div');
      loadingMsg.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0d1117;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Inter, sans-serif;
        font-size: 16px;
        z-index: 9999;
      `;
      loadingMsg.textContent = 'Redirecting to mobile editor...';
      document.body.appendChild(loadingMsg);
      
      // Redirect after brief delay
      setTimeout(redirectToMobile, 800);
      return true;
    }
    return false;
  }

  // Initialize when DOM is ready
  function init() {
    console.log('Initializing Python editor...');
    
    // Check for mobile and redirect if needed
    if (checkMobileAndRedirect()) {
      return; // Stop initialization if redirecting
    }
    
    // Wait a bit for DOM to be fully ready (desktop only)
    setTimeout(() => {
      initializeMonaco();
    }, 500);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Add animation styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(100%); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideOut {
      from { opacity: 1; transform: translateX(0); }
      to { opacity: 0; transform: translateX(100%); }
    }
  `;
  document.head.appendChild(style);
}
</script>