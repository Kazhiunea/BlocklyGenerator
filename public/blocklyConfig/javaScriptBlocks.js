var JSGenerator = new Blockly.Generator('JavaScript');

JSGenerator.init = function(workspace) {
    // Initialization code here could set up configurations or define initial values for the JS generator.
};

JSGenerator.finish = function(code) {
    // This function is executed once all code has been generated. Here, it trims the final code output.
    return code.trim(); // Ensures the final output doesn't have leading/trailing whitespace.
};

JSGenerator.scrub_ = function(block, code) {
    // This method is used to format the code as it is generated from each block, including chaining to the next block.
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = nextBlock ? JSGenerator.blockToCode(nextBlock) : '';
    return code + nextCode; // Append the code of the next block, if it exists.
};


// Variable Declaration Block
Blockly.Blocks['js_var_declare'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("var")
            .appendField(new Blockly.FieldTextInput("x"), "VARNAME")
            .appendField("=");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Declare a variable.");
        this.setHelpUrl("");
    }
};

// Simple For Loop Block
Blockly.Blocks['js_for_loop'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("for (var")
            .appendField(new Blockly.FieldTextInput("i"), "VAR")
            .appendField("=")
            .appendField(new Blockly.FieldNumber(0), "FROM")
            .appendField(";")
            .appendField(new Blockly.FieldVariable("i"), "VAR")
            .appendField("<")
            .appendField(new Blockly.FieldNumber(10), "TO")
            .appendField(";")
            .appendField(new Blockly.FieldVariable("i"), "VAR")
            .appendField("++)");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("For loop.");
        this.setHelpUrl("");
    }
};

// If Statement Block
Blockly.Blocks['js_if'] = {
    init: function() {
        this.appendValueInput("CONDITION")
            .setCheck("Boolean")
            .appendField("if (");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField(")");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("If statement.");
        this.setHelpUrl("");
    }
};

// Code Generator for JavaScript


// Variable Declaration Generator
JSGenerator['js_var_declare'] = function(block) {
    var variable = block.getFieldValue('VARNAME');
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
    return `var ${variable} = ${value};\n`;
};

// For Loop Generator
JSGenerator['js_for_loop'] = function(block) {
    var variable = block.getFieldValue('VAR');
    var from = block.getFieldValue('FROM');
    var to = block.getFieldValue('TO');
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    return `for (var ${variable} = ${from}; ${variable} < ${to}; ${variable}++) {\n${branch}}\n`;
};

// If Statement Generator
JSGenerator['js_if'] = function(block) {
    var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE) || 'false';
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    return `if (${condition}) {\n${branch}}\n`;
};