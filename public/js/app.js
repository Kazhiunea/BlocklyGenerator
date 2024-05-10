document.addEventListener('DOMContentLoaded', function() {
    // Set up navigation buttons
    const buttons = document.querySelectorAll('.nav-btn');
    //Buttons, for now just for show
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const contentId = this.getAttribute('data-target');
            const contentDivs = document.querySelectorAll('.section');
            contentDivs.forEach(div => {
                div.style.display = div.id === contentId ? 'block' : 'none';
            });
        });
    });

    // Check if Blockly is loaded
    if (typeof Blockly === "undefined") {
        console.error("Blockly is not loaded!");
        return;
    }

    // Inject Blockly workbench into the BlocklyWorkbench div and set it's toolbar to the one containning HTML blocks
    var workspace = Blockly.inject('blocklyWorkbench', {
        toolbox: htmlToolbox,
        scrollbars: true,
        trashcan: true
    });

    restoreWorkspace(workspace);

    workspace.addChangeListener(myUpdateFunction);

    function restoreWorkspace(workspace) {
        var xmlText = localStorage.getItem('blocklyWorkspace');
        if (xmlText) {
            var xml = Blockly.Xml.textToDom(xmlText);
            Blockly.Xml.domToWorkspace(xml, workspace);
        }
    }

    function saveWorkspace(workspace) {
        var xml = Blockly.Utils.Xml.workspaceToDom(workspace);
        var xmlText = Blockly.Utils.Xml.domToText(xml);
        localStorage.setItem('blocklyWorkspace', xmlText);
    }

    function myUpdateFunction(event) {
        var code = HTMLGenerator.workspaceToCode(workspace);
        document.getElementById('sourceCode').innerText = code;
        var previewDocument = document.getElementById("preview").contentWindow.document;
    // Clear the previous contents
        previewDocument.body.innerHTML = '';
    // Update new contents safely without using document.write()
        previewDocument.body.innerHTML = code;
      }

    // Some leftover debugging, should delete later
    console.log("Blockly loaded:", Blockly);
    console.log("Blockly.utils.Xml:", Blockly.utils.Xml);
    console.log("Blockly.Xml:", Blockly.Xml);
});
