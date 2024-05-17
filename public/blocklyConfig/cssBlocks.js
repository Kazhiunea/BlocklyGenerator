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

// CSS Margin Block
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

// CSS Selector Block
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

// Define the CSS generator
Blockly.CSS = new Blockly.Generator('CSS');

// Initialize the CSS code generation
Blockly.CSS.init = function(workspace) {};

// Finish the CSS code generation
Blockly.CSS.finish = function(code) {
    return code;
};

// Scrub function for CSS blocks
Blockly.CSS.scrub_ = function(block, code) {
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = Blockly.CSS.blockToCode(nextBlock);
    return code + nextCode;
};

// CSS Padding Block Generator
Blockly.CSS['css_padding'] = function(block) {
    var padding = block.getFieldValue('PADDING');
    var code = 'padding: ' + padding + ';\n';
    return code;
};

// CSS Margin Block Generator
Blockly.CSS['css_margin'] = function(block) {
    var margin = block.getFieldValue('MARGIN');
    var code = 'margin: ' + margin + ';\n';
    return code;
};

// CSS Selector Block Generator
Blockly.CSS['css_selector'] = function(block) {
    var selector = block.getFieldValue('SELECTOR');
    var properties = Blockly.CSS.statementToCode(block, 'PROPERTIES');
    var code = selector + ' {\n' + properties + '}\n';
    return code;
};