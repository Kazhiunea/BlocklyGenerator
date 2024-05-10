document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const contentId = this.getAttribute('data-target');
            const contentDivs = document.querySelectorAll('.section');
            contentDivs.forEach(div => {
                div.style.display = div.id === contentId ? 'block' : 'none';
            });
        });
    });

    if (typeof Blockly === "undefined") {
        console.error("Blockly is not loaded!");
        return;
    }

    var workspace = Blockly.inject('blocklyWorkbench', {
        toolbox: htmlToolbox,
        scrollbars: true,
        trashcan: true
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

    console.log("Blockly loaded:", Blockly);
});