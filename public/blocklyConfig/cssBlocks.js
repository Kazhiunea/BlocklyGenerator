//The code generator
var CSSGenerator = new Blockly.Generator('CSS');

CSSGenerator.init = function(workspace) {
    // You could initialize variables or configurations specific to CSS generation here
};

CSSGenerator.finish = function(code) {
    // This could be used to add final touches to the CSS code, such as formatting
    return code.trim(); // Ensure the final output doesn't have leading/trailing whitespace
};

CSSGenerator.scrub_ = function(block, code) {
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = nextBlock ? CSSGenerator.blockToCode(nextBlock) : '';
    return code + nextCode; // Append the code of the next block, if it exists
};

//Selector block
Blockly.Blocks['css_selector'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("selector"), "SELECTOR");
        this.appendStatementInput("PROPERTIES")
            .setCheck("CSS")
            .appendField("styles");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(290);
        this.setTooltip("A CSS selector block.");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['css_selector'] = function(block) {
    var selector = block.getFieldValue('SELECTOR');
    var statements_properties = Blockly.JavaScript.statementToCode(block, 'PROPERTIES');
    var code = `${selector} {\n${statements_properties}}\n`;
    return code;
};
///////////////////////////////////////////

//Margin attribute
Blockly.Blocks['css_margin'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("margin")
            .appendField(new Blockly.FieldTextInput("0"), "MARGIN");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(160);
        this.setTooltip("Sets the margin.");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['css_margin'] = function(block) {
    var margin = block.getFieldValue('MARGIN');
    var code = `  margin: ${margin};\n`;
    return code;
};
/////////////////////////////////////////////////////

//Padding attribute
Blockly.Blocks['css_padding'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("padding")
            .appendField(new Blockly.FieldTextInput("0"), "PADDING");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(160);
        this.setTooltip("Sets the padding.");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['css_padding'] = function(block) {
    var padding = block.getFieldValue('PADDING');
    var code = `  padding: ${padding};\n`;
    return code;
};