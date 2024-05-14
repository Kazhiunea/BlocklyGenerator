document.addEventListener('DOMContentLoaded', function() {
    const toolboxes = {
        html: htmlToolbox,
        css: cssToolbox,
        javascript: javaScriptToolbox
    };

    // Initialize Blockly with the first toolbox (HTML)
    var workspace = Blockly.inject('blocklyWorkbench', {
        toolbox: toolboxes.html,
        scrollbars: true,
        trashcan: true
    });

    // Listen to button clicks to switch toolboxes
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', function() {
            const language = this.id.replace('Button', '');
            switchToolbox(toolboxes[language]);
        });
    });

    function switchToolbox(newToolbox) {
        // Clear the workspace
        workspace.clear();

        // Update the toolbox without re-injecting Blockly (assumes Blockly > v7.0)
        workspace.updateToolbox(newToolbox);
    }

    function saveWorkspace(workspace) {
        var xml = Blockly.Xml.workspaceToDom(workspace);
        var xmlText = new XMLSerializer().serializeToString(xml);
        localStorage.setItem('blocklyWorkspace', xmlText);
    }

    function restoreWorkspace(workspace) {
        var xmlText = localStorage.getItem('blocklyWorkspace');
        if (xmlText) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(xmlText, "text/xml");
            // Updated method to use Blockly.utils.xml.textToDom
            Blockly.Xml.domToWorkspace(xmlDoc.firstChild, workspace);
        }
    }

    // Restore workspace if available
    restoreWorkspace(workspace);

    // Setup listener to save the workspace automatically
    workspace.addChangeListener(function(event) {
        saveWorkspace(workspace);
    });
});