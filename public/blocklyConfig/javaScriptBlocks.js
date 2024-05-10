var javaScriptGenerator = new Blockly.Generator('CSS');

javaScriptGenerator.init = function (workspace) { };
javaScriptGenerator.finish = function (code) { return code; };

javaScriptGenerator.scrub_ = function (block, code) {
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = javaScriptGenerator.blockToCode(nextBlock);
    return code + nextCode;
};