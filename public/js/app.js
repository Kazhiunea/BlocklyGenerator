document.addEventListener('DOMContentLoaded', function() {
    const toolboxes = {
        html: htmlToolbox,
        css: cssToolbox,
        javascript: javaScriptToolbox
    };

    let workspace; // Define workspace at a higher scope
    let currentLanguage = 'html'; // Default language

    function initBlockly(toolbox) {
        if (workspace) {
            workspace.dispose(); // Dispose the old workspace before reinitializing
        }

        workspace = Blockly.inject('blocklyWorkbench', {
            toolbox: toolbox,
            scrollbars: true,
            trashcan: true
        });

        restoreWorkspace(); // Restore the workspace for the current language
        workspace.addChangeListener(buildCompleteHTML); // Add a listener to update source code and live preview on change

        Blockly.JavaScript.init(workspace);
        Blockly.HTML.init(workspace);
        Blockly.CSS.init(workspace);
    }

    function buildCompleteHTML() {
        saveWorkspace();
        updateSourceCode();
        updateLivePreview();
    }

    function updateSourceCode() {
        let htmlCode = '';
        let cssCode = '';
        let jsCode = '';

        if (currentLanguage === 'html') {
            htmlCode = Blockly.HTML.workspaceToCode(workspace);
        } else if (currentLanguage === 'css') {
            cssCode = Blockly.CSS.workspaceToCode(workspace);
        } else if (currentLanguage === 'javascript') {
            jsCode = Blockly.JavaScript.workspaceToCode(workspace);
        }

        const combinedCode = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}</script>
        </body>
        </html>
        `;

        document.getElementById('sourceCode').innerText = combinedCode;
    }

    function updateLivePreview() {
        const previewFrame = document.getElementById('preview').contentWindow.document;
        const combinedCode = document.getElementById('sourceCode').innerText;

        previewFrame.open();
        previewFrame.write(combinedCode);
        previewFrame.close();
    }

    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', function() {
            const language = this.id.replace('Button', '').toLowerCase();
            currentLanguage = language; // Update the current language
            initBlockly(toolboxes[language]);

            document.querySelectorAll('.section').forEach(div => {
                if (div.id.startsWith('sourceCode')) {
                    div.style.display = 'none';
                }
            });
            document.getElementById('sourceCode').style.display = 'block';
        });
    });

    function restoreWorkspace() {
        try {
            var xmlText = localStorage.getItem('blocklyWorkspace-' + currentLanguage);
            if (xmlText) {
                var parser = new DOMParser();
                var xml = parser.parseFromString(xmlText, "application/xml");
                Blockly.Xml.domToWorkspace(xml.firstChild, workspace);
            }
        } catch (e) {
            console.error('Error restoring workspace:', e);
        }
    }

    function saveWorkspace() {
        var xml = Blockly.Xml.workspaceToDom(workspace);
        var xmlText = Blockly.Xml.domToText(xml);
        localStorage.setItem('blocklyWorkspace-' + currentLanguage, xmlText);
    }

    initBlockly(toolboxes.html); // Initialize the HTML workspace as default
});
