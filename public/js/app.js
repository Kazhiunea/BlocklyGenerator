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
        updateSourceCode(workspace.options.language);
    }

    function switchToolbox(language) {
        // Reinitialize the workspace with the new toolbox
        document.getElementById('blocklyWorkbench').innerHTML = '';  // Clear existing Blockly DOM
        workspace = Blockly.inject('blocklyWorkbench', {
            toolbox: toolboxes[language],
            scrollbars: true,
            trashcan: true
        });
        workspace.addChangeListener(myUpdateFunction);
        updateLivePreview();
    }


    function updateSourceCode(language) {
        var codeGenerator = Blockly[language.charAt(0).toUpperCase() + language.slice(1)];
        var code = codeGenerator.workspaceToCode(workspace);  // Use the appropriate generator
        document.getElementById(`sourceCode${language.toUpperCase()}`).innerText = code;
        updateLivePreview();  // Assuming this function also needs to be aware of the current language
    }
    
    function updateLivePreview() {
        var previewFrame = document.getElementById("preview").contentWindow.document;
        previewFrame.open();
        previewFrame.write(
            `<!DOCTYPE html>
<html>
<head>
<style>${toolboxes.css ? Blockly.CSS.workspaceToCode(workspace) : ''}</style>
</head>
<body>
${Blockly.HTML ? Blockly.HTML.workspaceToCode(workspace) : ''}
<script>${Blockly.JavaScript ? Blockly.JavaScript.workspaceToCode(workspace) : ''}</script>
</body>
</html>`
        );
        previewFrame.close();
    }

    console.log("Blockly loaded:", Blockly);
});