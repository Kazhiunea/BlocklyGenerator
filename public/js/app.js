document.addEventListener('DOMContentLoaded', function() {
    const toolboxes = {
        html: htmlToolbox,
        css: cssToolbox,
        javascript: javaScriptToolbox
    };

    let workspace;  // Define workspace at a higher scope
    let currentLanguage = 'html';  // Default language

    // Function to initialize Blockly with the correct toolbox
    function initBlockly(toolbox, language) {
        if (workspace) {
            saveWorkspace(currentLanguage);  // Save current workspace before switching
            workspace.dispose(); // Dispose the old workspace before reinitializing
        }
        workspace = Blockly.inject('blocklyWorkbench', {
            toolbox: toolbox,
            scrollbars: true,
            trashcan: true
        });
        restoreWorkspace(language);  // Restore the workspace specific to the new language
        workspace.addChangeListener(function(event) {
            saveWorkspace(currentLanguage);  // Auto-save workspace on change
        });
        currentLanguage = language;  // Update current language
    }

    // Initially load HTML workspace
    initBlockly(toolboxes.html, 'html');

    // Setup button listeners to switch languages
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', function() {
            const language = this.id.replace('Button', '').toLowerCase();
            initBlockly(toolboxes[language], language);
        });
    });

    function restoreWorkspace(language) {
        var xmlText = localStorage.getItem('blocklyWorkspace-' + language);
        if (xmlText) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(xmlText, "text/xml");
            Blockly.Xml.domToWorkspace(xmlDoc.firstChild, workspace);
        }
    }

    function saveWorkspace(language) {
        var xml = Blockly.Xml.workspaceToDom(workspace);
        var serializer = new XMLSerializer();
        var xmlText = serializer.serializeToString(xml);
        localStorage.setItem('blocklyWorkspace-' + language, xmlText);
    }
});