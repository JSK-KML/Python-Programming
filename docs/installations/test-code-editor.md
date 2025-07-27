---
outline: deep
title: Code Editor Test
---

# Code Editor Test

Testing an interactive code editor with Monaco Editor and syntax highlighting.

## 💻 Monaco Code Editor

<div class="editor-container">
  <div class="tabs">
    <button class="tab active" onclick="switchLanguage('python')">Python</button>
    <button class="tab" onclick="switchLanguage('javascript')">JavaScript</button>
    <button class="tab" onclick="switchLanguage('html')">HTML</button>
  </div>
  <div class="editor-wrapper">
    <div id="monaco-editor"></div>
  </div>
  <div class="buttons">
    <button class="run" onclick="runCode()">▶️ Run Code</button>
    <button class="clear" onclick="clearOutput()">Clear Output</button>
    <button class="reset" onclick="resetCode()">Reset Code</button>
  </div>
  <div class="result">
    <strong>Output:</strong>
    <div id="output">Write some code and click "Run Code" to see results...</div>
  </div>
</div>


<style>
.editor-container {
  background: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px 0;
  border: 1px solid #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.tabs {
  display: flex;
  background: #2d2d2d;
  border-bottom: 1px solid #444;
}

.tab {
  padding: 12px 20px;
  background: none;
  border: none;
  color: #8d8d8d;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.tab.active {
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
  border-bottom: 2px solid #3b82f6;
}

.tab:hover:not(.active) {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
}

.editor-wrapper {
  position: relative;
  background: #1e1e1e;
}

#monaco-editor {
  height: 300px;
  width: 100%;
  border: none;
}

.buttons {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: #2d2d2d;
  border-top: 1px solid #444;
}

.run {
  padding: 10px 20px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.run:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.clear, .reset {
  padding: 10px 20px;
  background: #6b7280;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.clear:hover, .reset:hover {
  background: #4b5563;
  transform: translateY(-1px);
}

.reset {
  background: #f59e0b;
}

.reset:hover {
  background: #d97706;
}

.result {
  padding: 16px;
  background: #0d1117;
  border-top: 1px solid #444;
}

.result strong {
  color: #3b82f6;
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 600;
}

#output {
  color: #58a6ff;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.5;
  background: rgba(0, 0, 0, 0.3);
  padding: 12px;
  border-radius: 4px;
  border-left: 3px solid #3b82f6;
  white-space: pre-wrap;
  min-height: 60px;
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
  
  const codeTemplates = {
    python: `# Real Python in Browser! 🐍
# This code actually executes using Skulpt

# Basic Python 3 features
print("Hello from Python 3!")

# Variables and operations
name = "Python"
version = 3
print("Language:", name, "Version:", version)

# Lists and loops
numbers = [1, 2, 3, 4, 5]
print("Original numbers:", numbers)

# List comprehension (Python 3 style)
squared = [x * x for x in numbers]
print("Squared numbers:", squared)

# Functions
def calculate_sum(items):
    total = 0
    for item in items:
        total = total + item
    return total

result = calculate_sum(numbers)
print("Sum of numbers:", result)

# String operations
message = "Welcome to real Python execution!"
print("Message length:", len(message))
print("Uppercase:", message.upper())

# Math operations
import math
print("Square root of 25:", math.sqrt(25))
print("Pi value:", round(math.pi, 4))

print()
print("✅ This is REAL Python 3 running in your browser!")`,

    javascript: `// JavaScript Example - Runs in Browser!
// Try modifying this code and click Run!

// Array operations
const numbers = [1, 2, 3, 4, 5];
console.log('Original numbers:', numbers);

const doubled = numbers.map(n => n * 2);
console.log('Doubled:', doubled);

const sum = numbers.reduce((a, b) => a + b, 0);
console.log('Sum:', sum);

// Object example
const person = {
    name: 'JavaScript',
    age: 29,
    greet() {
        return \`Hello, I'm \${this.name}!\`;
    }
};

console.log(person.greet());

// Math operations
const randomNum = Math.floor(Math.random() * 100);
console.log('Random number:', randomNum);

// Return a value to see it in output
return {
    message: 'JavaScript executed successfully!',
    timestamp: new Date().toLocaleTimeString(),
    randomNumber: randomNum
};`,

    html: `<!-- Interactive HTML Demo -->
<div style="font-family: Arial; padding: 20px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border-radius: 12px;">
    <h1>🎨 Interactive HTML Demo</h1>
    <p>This HTML renders live in the browser!</p>
    <button style="background: #4CAF50; color: white; padding: 12px 24px; border: none; border-radius: 6px; margin: 5px; cursor: pointer;">Click Me!</button>
    <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px; margin-top: 10px;">
        Interactive HTML content!
    </div>
</div>`
  };

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
        
        editor = monaco.editor.create(editorElement, {
          value: codeTemplates.python,
          language: 'python',
          theme: 'vs-dark',
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
        
        console.log('Monaco Editor initialized successfully!');
      });
    } catch (error) {
      console.error('Failed to initialize Monaco:', error);
    }
  }

  function switchLanguage(lang) {
    if (!editor) {
      console.log('Editor not initialized yet');
      return;
    }
    
    // Update tab states
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Find the clicked tab
    const clickedTab = Array.from(tabs).find(tab => 
      tab.textContent.toLowerCase().includes(lang.toLowerCase())
    );
    if (clickedTab) {
      clickedTab.classList.add('active');
    }
    
    // Update editor language and content
    currentLanguage = lang;
    
    try {
      const languageMap = {
        'python': 'python',
        'javascript': 'javascript', 
        'html': 'html'
      };
      
      if (window.monaco && window.monaco.editor) {
        monaco.editor.setModelLanguage(editor.getModel(), languageMap[lang]);
        editor.setValue(codeTemplates[lang]);
      }
      
      console.log(`Switched to ${lang} mode`);
      showNotification(`Switched to ${lang.charAt(0).toUpperCase() + lang.slice(1)}`);
    } catch (error) {
      console.error('Error switching language:', error);
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
      output.textContent = `🚀 Running ${currentLanguage} code...\n\n`;
      
      setTimeout(() => {
        if (currentLanguage === 'javascript') {
          executeJavaScript(code, output);
        } else if (currentLanguage === 'python') {
          executePython(code, output);
        } else if (currentLanguage === 'html') {
          renderHTML(code, output);
        }
      }, 500);
    } catch (error) {
      output.textContent = `Error: ${error.message}`;
      showNotification('Error running code');
    }
  }
  
  function executeJavaScript(code, output) {
    try {
      // Capture console output
      const originalLog = console.log;
      const originalError = console.error;
      const originalWarn = console.warn;
      let logs = [];
      
      // Override console methods
      console.log = (...args) => {
        logs.push('LOG: ' + args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' '));
        originalLog.apply(console, args);
      };
      
      console.error = (...args) => {
        logs.push('ERROR: ' + args.join(' '));
        originalError.apply(console, args);
      };
      
      console.warn = (...args) => {
        logs.push('WARN: ' + args.join(' '));
        originalWarn.apply(console, args);
      };
      
      // Execute the code in a safe context
      const result = new Function(code)();
      
      // Restore console methods
      console.log = originalLog;
      console.error = originalError;
      console.warn = originalWarn;
      
      // Display results
      let outputText = '';
      if (logs.length > 0) {
        outputText += logs.join('\n') + '\n\n';
      }
      
      if (result !== undefined) {
        outputText += `Return value: ${typeof result === 'object' ? JSON.stringify(result, null, 2) : result}\n\n`;
      }
      
      outputText += '✅ JavaScript executed successfully in browser!\n';
      outputText += '📝 This code ran directly in your browser environment.';
      
      output.textContent = outputText;
      showNotification('JavaScript executed in browser!');
      
    } catch (error) {
      output.textContent = `❌ JavaScript Error:\n${error.message}\n\n📝 Check your syntax and try again.`;
      showNotification('JavaScript execution error');
    }
  }
  
  async function executePython(code, output) {
    try {
      if (!window.Sk) {
        output.textContent = '⏳ Loading Python interpreter...\n\n';
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
      output.textContent = '🚀 Running Python code...\n\n';
      
      const promise = Sk.misceval.asyncToPromise(() => {
        return Sk.importMainWithBody("<stdin>", false, code, true);
      });
      
      await promise;
      
      // Display results
      if (pythonOutput.trim()) {
        output.textContent = `${pythonOutput}\n✅ Python executed successfully in browser!\n📝 This code ran using Skulpt - a Python interpreter in JavaScript.\n🐍 Note: Skulpt supports most Python 3 features. Some advanced features may not be available.`;
      } else {
        output.textContent = `✅ Python code executed successfully!\n📝 No output produced. Try adding print() statements to see results.\n\n🐍 Using Skulpt Python interpreter in browser.\n📌 Tip: Use print() statements, basic operations, loops, functions, and imports.`;
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
      
      output.textContent = `❌ Python Error:\n${errorMessage}\n\n📝 Check your Python syntax and try again.\n🐍 Using Skulpt Python interpreter.`;
      showNotification('Python execution error');
    }
  }
  
  function renderHTML(code, output) {
    try {
      // Create a safe preview of the HTML
      const preview = document.createElement('div');
      preview.style.cssText = `
        border: 2px solid #3b82f6;
        border-radius: 8px;
        padding: 16px;
        background: white;
        color: black;
        margin: 10px 0;
        font-family: Arial, sans-serif;
        max-height: 300px;
        overflow: auto;
      `;
      
      // Remove script tags for security
      const safeHTML = code.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, 
        '<div style="background: #ffe6e6; padding: 8px; border-radius: 4px; color: #d63031;">[Script tag removed for security]</div>');
      
      preview.innerHTML = safeHTML;
      
      // Clear previous preview
      const existingPreview = output.parentNode.querySelector('.html-preview');
      if (existingPreview) {
        existingPreview.remove();
      }
      
      // Add preview after output
      preview.className = 'html-preview';
      output.parentNode.insertBefore(preview, output.nextSibling);
      
      output.textContent = `📄 HTML Rendered Successfully!\n\n🎨 Live preview shown below the output area.\n\n✅ HTML executed in browser!
📝 Your HTML is rendered above. Script tags are removed for security.`;
      
      showNotification('HTML rendered in browser!');
      
    } catch (error) {
      output.textContent = `❌ HTML Rendering Error:\n${error.message}`;
      showNotification('HTML rendering error');
    }
  }

  function clearOutput() {
    const output = document.getElementById('output');
    output.textContent = 'Output cleared. Write some code and click "Run Code" to see results...';
    
    // Remove any HTML preview
    const existingPreview = output.parentNode.querySelector('.html-preview');
    if (existingPreview) {
      existingPreview.remove();
    }
    
    showNotification('Output cleared');
  }

  function resetCode() {
    if (!editor) {
      showNotification('Editor not ready yet');
      return;
    }
    
    try {
      editor.setValue(codeTemplates[currentLanguage]);
      document.getElementById('output').textContent = 'Code reset to template. Ready to run!';
      showNotification(`Code reset to ${currentLanguage} template`);
    } catch (error) {
      showNotification('Error resetting code');
    }
  }

  // Make functions globally available
  window.switchLanguage = switchLanguage;
  window.runCode = runCode;
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
  
  // Initialize when DOM is ready
  function init() {
    console.log('Initializing code editor...');
    
    // Wait a bit for DOM to be fully ready
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