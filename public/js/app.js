
document.addEventListener('DOMContentLoaded', function() {
    const toolboxes = {
        html: htmlToolbox,
        css: cssToolbox,
        javascript: javaScriptToolbox
    };

    let workspace;
    let currentLanguage = 'html'; // Default language

    function initBlockly(toolbox) {
        if (workspace) {
            workspace.dispose();
        }

        workspace = Blockly.inject('blocklyWorkbench', {
            toolbox: toolbox,
            scrollbars: true,
            trashcan: true
        });

        restoreWorkspace();
        workspace.addChangeListener(buildCompleteCode);
        Blockly.JavaScript.init(workspace);
        Blockly.HTML.init(workspace);
        Blockly.CSS.init(workspace);
    }

    function restoreWorkspace() {
        try {
            var xmlText = localStorage.getItem('blocklyWorkspace-' + currentLanguage);
            if (xmlText) {
                var parser = new DOMParser();
                var xml = parser.parseFromString(xmlText, 'application/xml');
                Blockly.Xml.domToWorkspace(xml.firstChild, workspace);
            }
        } catch (e) {
            console.error('Error restoring workspace:', e);
        }

        updateSourceCodeDisplay();
    }

    function saveWorkspace() {
        var xml = Blockly.Xml.workspaceToDom(workspace);
        var xmlText = Blockly.Xml.domToText(xml);
        localStorage.setItem('blocklyWorkspace-' + currentLanguage, xmlText);

        localStorage.setItem('combinedCode', document.getElementById('sourceCode').innerText);
    }

    function buildCompleteCode() {
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
            localStorage.setItem('htmlCode', htmlCode);
        } else if (currentLanguage === 'css') {
            cssCode = Blockly.CSS.workspaceToCode(workspace);
            localStorage.setItem('cssCode', cssCode);
        } else if (currentLanguage === 'javascript') {
            jsCode = Blockly.JavaScript.workspaceToCode(workspace);
            localStorage.setItem('jsCode', jsCode);
        }

        const combinedCode = `
<!DOCTYPE html>
<html lang="en">
<head>
<style>${localStorage.getItem('cssCode') || ''}</style>
</head>
<body>
${localStorage.getItem('htmlCode') || ''}
<script>${localStorage.getItem('jsCode') || ''}</script>
</body>
</html>`;

        document.getElementById('sourceCode').innerText = combinedCode;
    }

    function updateSourceCodeDisplay() {
        const combinedCode = localStorage.getItem('combinedCode') || '';
        document.getElementById('sourceCode').innerText = combinedCode;
        updateLivePreview();
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
            currentLanguage = language;
            initBlockly(toolboxes[language]);

            document.querySelectorAll('.section').forEach(div => {
                if (div.id.startsWith('sourceCode')) {
                    div.style.display = 'none';
                }
            });
            document.getElementById('sourceCode').style.display = 'block';
            document.getElementById('namebar').innerText = language.toUpperCase() + ' Generator';
        });
    });

    document.getElementById('copyButton').addEventListener('click', function() {
        const sourceCodeText = document.getElementById('sourceCode').innerText;
        navigator.clipboard.writeText(sourceCodeText).then(() => {
            const copyPopup = document.getElementById('copyPopup');
            copyPopup.style.display = 'block';
            setTimeout(() => {
                copyPopup.style.display = 'none';
            }, 800);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });

    initBlockly(toolboxes.html);
    updateSourceCodeDisplay();
});