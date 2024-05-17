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
// Initialize the JavaScript generator
Blockly.JavaScript = new Blockly.Generator('JavaScript');

// Define the order values
Blockly.JavaScript.ORDER_ATOMIC = 0;          // 0 "" ...
Blockly.JavaScript.ORDER_NEW = 1.1;           // new
Blockly.JavaScript.ORDER_MEMBER = 1.2;        // . []
Blockly.JavaScript.ORDER_FUNCTION_CALL = 2;   // ()
Blockly.JavaScript.ORDER_INCREMENT = 3;       // ++
Blockly.JavaScript.ORDER_DECREMENT = 3;       // --
Blockly.JavaScript.ORDER_BITWISE_NOT = 4.1;   // ~
Blockly.JavaScript.ORDER_UNARY_PLUS = 4.2;    // +
Blockly.JavaScript.ORDER_UNARY_NEGATION = 4.3; // -
Blockly.JavaScript.ORDER_LOGICAL_NOT = 4.4;   // !
Blockly.JavaScript.ORDER_TYPEOF = 4.5;        // typeof
Blockly.JavaScript.ORDER_VOID = 4.6;          // void
Blockly.JavaScript.ORDER_DELETE = 4.7;        // delete
Blockly.JavaScript.ORDER_AWAIT = 4.8;         // await
Blockly.JavaScript.ORDER_EXPONENTIATION = 5.0; // **
Blockly.JavaScript.ORDER_MULTIPLICATION = 5.1; // *
Blockly.JavaScript.ORDER_DIVISION = 5.2;      // /
Blockly.JavaScript.ORDER_MODULUS = 5.3;       // %
Blockly.JavaScript.ORDER_SUBTRACTION = 6.1;   // -
Blockly.JavaScript.ORDER_ADDITION = 6.2;      // +
Blockly.JavaScript.ORDER_BITWISE_SHIFT = 7;   // << >> >>>
Blockly.JavaScript.ORDER_RELATIONAL = 8;      // < <= > >=
Blockly.JavaScript.ORDER_IN = 8;              // in
Blockly.JavaScript.ORDER_INSTANCEOF = 8;      // instanceof
Blockly.JavaScript.ORDER_EQUALITY = 9;        // == != === !==
Blockly.JavaScript.ORDER_BITWISE_AND = 10;    // &
Blockly.JavaScript.ORDER_BITWISE_XOR = 11;    // ^
Blockly.JavaScript.ORDER_BITWISE_OR = 12;     // |
Blockly.JavaScript.ORDER_LOGICAL_AND = 13;    // &&
Blockly.JavaScript.ORDER_LOGICAL_OR = 14;     // ||
Blockly.JavaScript.ORDER_CONDITIONAL = 15;    // ?:
Blockly.JavaScript.ORDER_ASSIGNMENT = 16;     // = += -= **= *= /= %= <<= >>= ...
Blockly.JavaScript.ORDER_YIELD = 17;          // yield
Blockly.JavaScript.ORDER_COMMA = 18;          // ,
Blockly.JavaScript.ORDER_NONE = 99;           // (...)

// Create the _blockToCode dictionary for JavaScript blocks
Blockly.JavaScript._blockToCode = {};

// Variable Declaration Generator
Blockly.JavaScript['js_var_declare'] = function(block) {
    var varName = block.getFieldValue('VARNAME');
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
    var code = 'var ' + varName + ' = ' + value + ';\n';
    return code;
};

// Simple For Loop Generator
Blockly.JavaScript['js_for_loop'] = function(block) {
    var variable = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var from = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
    var to = Blockly.JavaScript.valueToCode(block, 'TO', Blockly.JavaScript.ORDER_ASSIGNMENT) || '10';
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    var code = 'for (var ' + variable + ' = ' + from + '; ' + variable + ' < ' + to + '; ' + variable + '++) {\n' + branch + '}\n';
    return code;
};

// If Statement Generator
Blockly.JavaScript['js_if'] = function(block) {
    var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE) || 'false';
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    var code = 'if (' + condition + ') {\n' + branch + '}\n';
    return code;
};