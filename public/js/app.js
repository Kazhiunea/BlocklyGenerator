document.addEventListener('DOMContentLoaded', function() {
    
    const toolboxes = {
        html: htmlToolbox,
        css: cssToolbox,
        javascript: javaScriptToolbox
    };

    var workspace = Blockly.inject('blocklyWorkbench', {
        toolbox: toolboxes.html,
        scrollbars: true,
        trashcan: true
    });

    // Store current codes for HTML, CSS, and JavaScript
    var codes = {
        html: '',
        css: '',
        javascript: ''
    };

    if (typeof Blockly === "undefined") {
        console.error("Blockly is not loaded!");
        return;
    }
    
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', function() {
            const language = this.getAttribute('id').replace('Button', '');
            switchToolbox(language);
            document.querySelectorAll('.section').forEach(div => {
                div.style.display = 'none';
            });
            document.getElementById(`sourceCode${language.toUpperCase()}`).style.display = 'block';
        });
    });

    restoreWorkspace(workspace);
    workspace.addChangeListener(myUpdateFunction);

    workspace.addChangeListener(function(event) {
        saveWorkspace(workspace);
    });

    function restoreWorkspace(workspace) {
        var xmlText = localStorage.getItem('blocklyWorkspace');
        if (xmlText) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(xmlText, "text/xml");
            Blockly.Xml.domToWorkspace(xmlDoc.firstChild, workspace);
        }
    }

    function saveWorkspace(workspace) {
        var xml = Blockly.Xml.workspaceToDom(workspace);
        var serializer = new XMLSerializer();
        var xmlText = serializer.serializeToString(xml);
        localStorage.setItem('blocklyWorkspace', xmlText);
    }

    function myUpdateFunction(event) {
        console.log("This function is working");
        var code = HTMLGenerator.workspaceToCode(workspace);
        document.getElementById('sourceCodeHTML').innerText = code;
        var previewDocument = document.getElementById("preview").contentWindow.document;
        previewDocument.body.innerHTML = '';
        previewDocument.body.innerHTML = code;
    }

    function switchToolbox(language) {
        workspace.updateToolbox(toolboxes[language]);  // Changes the toolbox displayed in the Blockly workspace
        workspace.options.language = language;  // Stores the current language as a property of the workspace for reference
        updateSourceCode(language);  // Calls function to update the source code area
        updateLivePreview();  // Updates the live preview area
    }

    function updateSourceCode(language) {
        var codeGenerator = Blockly[language.charAt(0).toUpperCase() + language.slice(1)];
        codes[language] = codeGenerator.workspaceToCode(workspace);
        document.getElementById(`sourceCode${language.toUpperCase()}`).innerText = codes[language];
    }
    
    function updateLivePreview() {
        var previewFrame = document.getElementById("preview").contentWindow.document;
        previewFrame.open();
        previewFrame.write(
            `<!DOCTYPE html>
    <html>
    <head>
    <style>${codes.css}</style>
    </head>
    <body>
    ${codes.html}
    <script>${codes.javascript}</script>
    </body>
    </html>`
        );
        previewFrame.close();
    }

    console.log("Blockly loaded:", Blockly);
});