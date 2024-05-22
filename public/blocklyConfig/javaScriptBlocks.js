// Variable Declaration Block
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
Blockly.JavaScript.init = function(workspace) {};

// Finish the JavaScript code generation
Blockly.JavaScript.finish = function(code) {
    return code;
};

// Scrub function for JavaScript blocks
Blockly.JavaScript.scrub_ = function(block, code) {
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = Blockly.JavaScript.blockToCode(nextBlock);
    return code + nextCode;
};

/*
// Variable Declaration Block (var, let, const)
// Block for variable declaration
Blockly.Blocks['js_var_declare'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("var")
          .appendField(new Blockly.FieldTextInput("variable"), "VAR_NAME")
          .appendField("=");
      this.appendValueInput("VALUE")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Declare a variable using var.");
      this.setHelpUrl("https://www.w3schools.com/js/js_variables.asp");
    }
  };
  
  Blockly.JavaScript['js_var_declare'] = function(block) {
    var varName = block.getFieldValue('VAR_NAME');
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
    var code = 'var ' + varName + ' = ' + value + ';\n';
    return code;
  };

// Block for a string input
Blockly.Blocks['js_var_reference'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Variable")
          .appendField(new Blockly.FieldTextInput("variable"), "VAR_NAME");
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("Reference a variable.");
      this.setHelpUrl("https://www.w3schools.com/js/js_variables.asp");
    }
  };
  
  Blockly.JavaScript['js_var_reference'] = function(block) {
    var varName = block.getFieldValue('VAR_NAME');
    var code = varName;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

// Block for a number input
Blockly.Blocks['js_text'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("String input = ")
          .appendField(new Blockly.FieldTextInput("text"), "TEXT");
      this.setOutput(true, null);
      this.setColour(160);
      this.setTooltip("A text value.");
      this.setHelpUrl("https://www.w3schools.com/js/js_strings.asp");
    }
  };
  
  Blockly.JavaScript['js_text'] = function(block) {
    var text = block.getFieldValue('TEXT');
    var code = '"' + text + '"';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

// Block for referencing a variable
Blockly.Blocks['js_number'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Number input = ")
          .appendField(new Blockly.FieldNumber(0), "NUMBER");
      this.setOutput(true, null);
      this.setColour(160);
      this.setTooltip("A number value.");
      this.setHelpUrl("https://www.w3schools.com/js/js_numbers.asp");
    }
  };
  
  Blockly.JavaScript['js_number'] = function(block) {
    var number = block.getFieldValue('NUMBER');
    var code = number;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.Blocks['js_var_assign'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput("variable"), "VAR_NAME")
          .appendField("=");
      this.appendValueInput("VALUE")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Assign a value to a variable.");
      this.setHelpUrl("https://www.w3schools.com/js/js_variables.asp");
    }
  };
  
  Blockly.JavaScript['js_var_assign'] = function(block) {
    var varName = block.getFieldValue('VAR_NAME');
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
    var code = varName + ' = ' + value + ';\n';
    return code;
  };

  Blockly.Blocks['js_addition'] = {
    init: function() {
      this.appendValueInput("A")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField("+");
      this.appendValueInput("B")
          .setCheck("Number");
      this.setOutput(true, "Number");
      this.setColour(160);
      this.setTooltip("Addition");
      this.setHelpUrl("https://www.w3schools.com/js/js_arithmetic.asp");
    }
  };
  
  Blockly.JavaScript['js_addition'] = function(block) {
    var valueA = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var valueB = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = valueA + ' + ' + valueB;
    return [code, Blockly.JavaScript.ORDER_ADDITION];
  };

  Blockly.Blocks['js_subtraction'] = {
    init: function() {
      this.appendValueInput("A")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField("-");
      this.appendValueInput("B")
          .setCheck("Number");
      this.setOutput(true, "Number");
      this.setColour(160);
      this.setTooltip("Subtraction");
      this.setHelpUrl("https://www.w3schools.com/js/js_arithmetic.asp");
    }
  };
  
  Blockly.JavaScript['js_subtraction'] = function(block) {
    var valueA = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var valueB = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = valueA + ' - ' + valueB;
    return [code, Blockly.JavaScript.ORDER_SUBTRACTION];
  };

  Blockly.Blocks['js_if'] = {
    init: function() {
      this.appendValueInput("CONDITION")
          .setCheck("Boolean")
          .appendField("if");
      this.appendStatementInput("DO")
          .setCheck(null)
          .appendField("do");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("If statement.");
      this.setHelpUrl("https://www.w3schools.com/js/js_if_else.asp");
    }
  };
  
  Blockly.JavaScript['js_if'] = function(block) {
    var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE) || 'false';
    var statements = Blockly.JavaScript.statementToCode(block, 'DO');
    var code = 'if (' + condition + ') {\n' + statements + '}\n';
    return code;
  };

  Blockly.Blocks['js_for_loop'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("for (var")
          .appendField(new Blockly.FieldTextInput("i"), "VAR")
          .appendField("=");
      this.appendValueInput("START")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(";")
          .appendField(new Blockly.FieldTextInput("i"), "VAR")
          .appendField("<");
      this.appendValueInput("END")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(";")
          .appendField(new Blockly.FieldTextInput("i"), "VAR")
          .appendField("++)");
      this.appendStatementInput("DO")
          .setCheck(null)
          .appendField("do");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip("For loop.");
      this.setHelpUrl("https://www.w3schools.com/js/js_loop_for.asp");
    }
  };
  
  Blockly.JavaScript['js_for_loop'] = function(block) {
    var variable = block.getFieldValue('VAR');
    var start = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
    var end = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
    var statements = Blockly.JavaScript.statementToCode(block, 'DO');
    var code = 'for (var ' + variable + ' = ' + start + '; ' + variable + ' < ' + end + '; ' + variable + '++) {\n' + statements + '}\n';
    return code;
  };

  Blockly.Blocks['js_while_loop'] = {
    init: function() {
      this.appendValueInput("CONDITION")
          .setCheck("Boolean")
          .appendField("while");
      this.appendStatementInput("DO")
          .setCheck(null)
          .appendField("do");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip("While loop.");
      this.setHelpUrl("https://www.w3schools.com/js/js_loop_while.asp");
    }
  };
  
  Blockly.JavaScript['js_while_loop'] = function(block) {
    var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE) || 'false';
    var statements = Blockly.JavaScript.statementToCode(block, 'DO');
    var code = 'while (' + condition + ') {\n' + statements + '}\n';
    return code;
  };

  Blockly.Blocks['js_and'] = {
    init: function() {
      this.appendValueInput("A")
          .setCheck("Boolean");
      this.appendDummyInput()
          .appendField("AND");
      this.appendValueInput("B")
          .setCheck("Boolean");
      this.setOutput(true, "Boolean");
      this.setColour(210);
      this.setTooltip("Logical AND operation.");
      this.setHelpUrl("https://www.w3schools.com/js/js_comparisons.asp");
    }
  };
  
  Blockly.JavaScript['js_and'] = function(block) {
    var valueA = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    var valueB = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    var code = valueA + ' && ' + valueB;
    return [code, Blockly.JavaScript.ORDER_LOGICAL_AND];
  };

  Blockly.Blocks['js_or'] = {
    init: function() {
      this.appendValueInput("A")
          .setCheck("Boolean");
      this.appendDummyInput()
          .appendField("OR");
      this.appendValueInput("B")
          .setCheck("Boolean");
      this.setOutput(true, "Boolean");
      this.setColour(210);
      this.setTooltip("Logical OR operation.");
      this.setHelpUrl("https://www.w3schools.com/js/js_comparisons.asp");
    }
  };
  
  Blockly.JavaScript['js_or'] = function(block) {
    var valueA = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    var valueB = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    var code = valueA + ' || ' + valueB;
    return [code, Blockly.JavaScript.ORDER_LOGICAL_OR];
  };

  Blockly.Blocks['js_equal'] = {
    init: function() {
      this.appendValueInput("A")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("==");
      this.appendValueInput("B")
          .setCheck(null);
      this.setOutput(true, "Boolean");
      this.setColour(210);
      this.setTooltip("Equality comparison.");
      this.setHelpUrl("https://www.w3schools.com/js/js_comparisons.asp");
    }
  };
  
  Blockly.JavaScript['js_equal'] = function(block) {
    var valueA = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var valueB = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = valueA + ' == ' + valueB;
    return [code, Blockly.JavaScript.ORDER_EQUALITY];
  };

  Blockly.Blocks['js_not_equal'] = {
    init: function() {
      this.appendValueInput("A")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("!=");
      this.appendValueInput("B")
          .setCheck(null);
      this.setOutput(true, "Boolean");
      this.setColour(210);
      this.setTooltip("Inequality comparison.");
      this.setHelpUrl("https://www.w3schools.com/js/js_comparisons.asp");
    }
  };
  
  Blockly.JavaScript['js_not_equal'] = function(block) {
    var valueA = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var valueB = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = valueA + ' != ' + valueB;
    return [code, Blockly.JavaScript.ORDER_EQUALITY];
  };

  Blockly.Blocks['js_boolean'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["true", "true"], ["false", "false"]]), "BOOLEAN");
      this.setOutput(true, "Boolean");
      this.setColour(210);
      this.setTooltip("A boolean value.");
      this.setHelpUrl("https://www.w3schools.com/js/js_booleans.asp");
    }
  };
  
  Blockly.JavaScript['js_boolean'] = function(block) {
    var booleanValue = block.getFieldValue('BOOLEAN');
    var code = booleanValue;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.Blocks['js_not'] = {
    init: function() {
      this.appendValueInput("BOOL")
          .setCheck("Boolean")
          .appendField("NOT");
      this.setOutput(true, "Boolean");
      this.setColour(210);
      this.setTooltip("Logical NOT operation.");
      this.setHelpUrl("https://www.w3schools.com/js/js_comparisons.asp");
    }
  };
  
  Blockly.JavaScript['js_not'] = function(block) {
    var bool = Blockly.JavaScript.valueToCode(block, 'BOOL', Blockly.JavaScript.ORDER_LOGICAL_NOT) || 'false';
    var code = '!' + bool;
    return [code, Blockly.JavaScript.ORDER_LOGICAL_NOT];
  };

  Blockly.Blocks['js_multiplication'] = {
    init: function() {
      this.appendValueInput("A")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField("*");
      this.appendValueInput("B")
          .setCheck("Number");
      this.setOutput(true, "Number");
      this.setColour(160);
      this.setTooltip("Multiplies two numbers.");
      this.setHelpUrl("https://www.w3schools.com/js/js_arithmetic.asp");
    }
  };
  
  Blockly.JavaScript['js_multiplication'] = function(block) {
    var valueA = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_MULTIPLICATION) || '0';
    var valueB = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_MULTIPLICATION) || '0';
    var code = valueA + ' * ' + valueB;
    return [code, Blockly.JavaScript.ORDER_MULTIPLICATION];
  };
  

  Blockly.Blocks['js_division'] = {
    init: function() {
      this.appendValueInput("A")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField("/");
      this.appendValueInput("B")
          .setCheck("Number");
      this.setOutput(true, "Number");
      this.setColour(160);
      this.setTooltip("Divides two numbers.");
      this.setHelpUrl("https://www.w3schools.com/js/js_arithmetic.asp");
    }
  };
  
  Blockly.JavaScript['js_division'] = function(block) {
    var valueA = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_DIVISION) || '0';
    var valueB = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_DIVISION) || '0';
    var code = valueA + ' / ' + valueB;
    return [code, Blockly.JavaScript.ORDER_DIVISION];
  };
  
  Blockly.Blocks['js_modulus'] = {
    init: function() {
      this.appendValueInput("A")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField("%");
      this.appendValueInput("B")
          .setCheck("Number");
      this.setOutput(true, "Number");
      this.setColour(160);
      this.setTooltip("Returns the division remainder of two numbers.");
      this.setHelpUrl("https://www.w3schools.com/js/js_arithmetic.asp");
    }
  };
  
  Blockly.JavaScript['js_modulus'] = function(block) {
    var valueA = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_MODULUS) || '0';
    var valueB = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_MODULUS) || '0';
    var code = valueA + ' % ' + valueB;
    return [code, Blockly.JavaScript.ORDER_MODULUS];
  };
  
  Blockly.Blocks['js_power'] = {
    init: function() {
      this.appendValueInput("A")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField("^");
      this.appendValueInput("B")
          .setCheck("Number");
      this.setOutput(true, "Number");
      this.setColour(160);
      this.setTooltip("Returns the base to the exponent power, that is, base^exponent.");
      this.setHelpUrl("https://www.w3schools.com/js/js_arithmetic.asp");
    }
  };
  
  Blockly.JavaScript['js_power'] = function(block) {
    var valueA = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_EXPONENTIATION) || '0';
    var valueB = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_EXPONENTIATION) || '0';
    var code = 'Math.pow(' + valueA + ', ' + valueB + ')';
    return [code, Blockly.JavaScript.ORDER_EXPONENTIATION];
  };

  Blockly.Blocks['js_function_declare'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("function")
          .appendField(new Blockly.FieldTextInput("myFunction"), "FUNC_NAME");
      this.appendStatementInput("STATEMENTS")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
      this.setTooltip("Declare a function.");
      this.setHelpUrl("https://www.w3schools.com/js/js_functions.asp");
    }
  };
  
  Blockly.JavaScript['js_function_declare'] = function(block) {
    var funcName = block.getFieldValue('FUNC_NAME');
    var statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
    var code = 'function ' + funcName + '() {\n' + statements + '}\n';
    return code;
  };

  
  Blockly.Blocks['js_onclick'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("onClick for ID")
          .appendField(new Blockly.FieldTextInput("elementID"), "ELEMENT_ID");
      this.appendStatementInput("STATEMENTS")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("Set an onClick event for an element by ID.");
      this.setHelpUrl("https://www.w3schools.com/jsref/event_onclick.asp");
    }
  };
  
  Blockly.JavaScript['js_onclick'] = function(block) {
    var elementId = block.getFieldValue('ELEMENT_ID');
    var statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
    var code = 'document.getElementById("' + elementId + '").onclick = function() {\n' + statements + '};\n';
    return code;
  };

  
  Blockly.Blocks['js_get_element_by_id'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("getElementById")
          .appendField(new Blockly.FieldTextInput("elementID"), "ELEMENT_ID");
      this.setOutput(true, "Element");
      this.setColour(210);
      this.setTooltip("Get an element by its ID.");
      this.setHelpUrl("https://www.w3schools.com/jsref/met_document_getelementbyid.asp");
    }
  };
  
  Blockly.JavaScript['js_get_element_by_id'] = function(block) {
    var elementId = block.getFieldValue('ELEMENT_ID');
    var code = 'document.getElementById("' + elementId + '")';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  

  Blockly.Blocks['js_alert'] = {
    init: function() {
      this.appendValueInput("TEXT")
          .setCheck("String")
          .appendField("alert");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("Display an alert dialog.");
      this.setHelpUrl("https://www.w3schools.com/jsref/met_win_alert.asp");
    }
  };
  
  Blockly.JavaScript['js_alert'] = function(block) {
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || '""';
    var code = 'alert(' + text + ');\n';
    return code;
  };
  
  Blockly.Blocks['js_equals'] = {
    init: function() {
      this.appendValueInput("VAR1")
          .setCheck(null)
          .appendField("set");
      this.appendValueInput("VAR2")
          .setCheck(null)
          .appendField("equal to");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("Set one variable equal to another.");
      this.setHelpUrl("https://www.w3schools.com/js/js_operators.asp");
    }
  };
  
  Blockly.JavaScript['js_equals'] = function(block) {
    var var1 = Blockly.JavaScript.valueToCode(block, 'VAR1', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
    var var2 = Blockly.JavaScript.valueToCode(block, 'VAR2', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
    var code = var1 + ' = ' + var2 + ';\n';
    return code;
  };*/

  Blockly.Blocks['js_if'] = {
    init: function() {
        this.appendValueInput("CONDITION")
            .setCheck("Boolean")
            .appendField(new Blockly.FieldDropdown([
                ["if", "IF"],
                ["else if", "ELSE_IF"],
                ["else", "ELSE"]
            ]), "MODE");
        this.appendStatementInput("DO")
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("If the condition is true, then do some statements.");
        this.setHelpUrl("https://www.w3schools.com/js/js_if_else.asp");
    }
};

Blockly.JavaScript['js_if'] = function(block) {
    var dropdown_mode = block.getFieldValue('MODE');
    var value_condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE) || 'false';
    var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');

    var code = '';
    if (dropdown_mode == 'IF') {
        code = 'if (' + value_condition + ') {\n' + statements_do + '}\n';
    } else if (dropdown_mode == 'ELSE_IF') {
        code = 'else if (' + value_condition + ') {\n' + statements_do + '}\n';
    } else if (dropdown_mode == 'ELSE') {
        code = 'else {\n' + statements_do + '}\n';
    }

    return code;
};

Blockly.Blocks['js_comparison'] = {
    init: function() {
      this.appendValueInput("A")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([
            ["=", "EQ"], 
            ["≠", "NEQ"], 
            ["<", "LT"], 
            [">", "GT"], 
            ["≤", "LTE"], 
            ["≥", "GTE"]
          ]), "OPERATOR");
      this.appendValueInput("B")
          .setCheck(null);
      this.setOutput(true, "Boolean");
      this.setColour(300);
      this.setTooltip("Return true if both inputs satisfy the selected comparison.");
      this.setHelpUrl("https://www.w3schools.com/js/js_comparisons.asp");
    }
  };

  Blockly.JavaScript['js_comparison'] = function(block) {
    var operator = block.getFieldValue('OPERATOR');
    var valueA = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_NONE) || '0';
    var valueB = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_NONE) || '0';
    
    var code;
    switch (operator) {
      case 'EQ':
        code = valueA + ' == ' + valueB;
        break;
      case 'NEQ':
        code = valueA + ' != ' + valueB;
        break;
      case 'LT':
        code = valueA + ' < ' + valueB;
        break;
      case 'GT':
        code = valueA + ' > ' + valueB;
        break;
      case 'LTE':
        code = valueA + ' <= ' + valueB;
        break;
      case 'GTE':
        code = valueA + ' >= ' + valueB;
        break;
    }
    return [code, Blockly.JavaScript.ORDER_RELATIONAL];
  };

  Blockly.Blocks['js_logic_and_or'] = {
    init: function() {
        this.appendValueInput("A")
            .setCheck("Boolean");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["and", "&&"], ["or", "||"]]), "OPERATOR");
        this.appendValueInput("B")
            .setCheck("Boolean");
        this.setOutput(true, "Boolean");
        this.setColour(300);
        this.setTooltip("Return true if both inputs are true (and) or either input is true (or).");
        this.setHelpUrl("https://www.w3schools.com/js/js_comparisons.asp");
    }
};

Blockly.JavaScript['js_logic_and_or'] = function(block) {
    var valueA = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_LOGICAL_AND) || 'false';
    var operator = block.getFieldValue('OPERATOR');
    var valueB = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_LOGICAL_AND) || 'false';
    var code = valueA + ' ' + operator + ' ' + valueB;
    return [code, Blockly.JavaScript.ORDER_LOGICAL_AND];
};

Blockly.Blocks['js_logic_not'] = {
    init: function() {
        this.appendValueInput("BOOL")
            .setCheck("Boolean")
            .appendField("not");
        this.setOutput(true, "Boolean");
        this.setColour(300);
        this.setTooltip("Return true if the input is false.");
        this.setHelpUrl("https://www.w3schools.com/js/js_comparisons.asp");
    }
};

Blockly.JavaScript['js_logic_not'] = function(block) {
    var valueBool = Blockly.JavaScript.valueToCode(block, 'BOOL', Blockly.JavaScript.ORDER_LOGICAL_NOT) || 'false';
    var code = '!' + valueBool;
    return [code, Blockly.JavaScript.ORDER_LOGICAL_NOT];
};

Blockly.Blocks['js_logic_boolean'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["true", "true"], ["false", "false"]]), "BOOL");
        this.setOutput(true, "Boolean");
        this.setColour(300);
        this.setTooltip("Returns either true or false.");
        this.setHelpUrl("https://www.w3schools.com/js/js_booleans.asp");
    }
};

Blockly.JavaScript['js_logic_boolean'] = function(block) {
    var bool = block.getFieldValue('BOOL');
    var code = (bool === 'true') ? 'true' : 'false';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['js_ternary'] = {
    init: function() {
        this.appendValueInput("CONDITION")
            .setCheck("Boolean")
            .appendField("test");
        this.appendValueInput("IF_TRUE")
            .setCheck(null)
            .appendField("if true");
        this.appendValueInput("IF_FALSE")
            .setCheck(null)
            .appendField("if false");
        this.setOutput(true, null);
        this.setColour(300);
        this.setTooltip("The conditional (ternary) operator assigns a value to a variable based on a condition.");
        this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator");
    }
};

Blockly.Blocks['js_number'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldNumber(0), "NUMBER");
      this.setOutput(true, "Number");
      this.setColour(60);
      this.setTooltip("Number input");
      this.setHelpUrl("https://www.w3schools.com/js/js_numbers.asp");
    }
  };
  
  Blockly.JavaScript['js_number'] = function(block) {
    var number = block.getFieldValue('NUMBER');
    return [number, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.Blocks['js_arithmetic'] = {
    init: function() {
      this.appendValueInput("A")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["+", "+"], ["-", "-"], ["*", "*"], ["/", "/"], ["^", "**"]]), "OPERATOR");
      this.appendValueInput("B")
          .setCheck("Number");
      this.setOutput(true, "Number");
      this.setColour(60);
      this.setTooltip("Arithmetic operations");
      this.setHelpUrl("https://www.w3schools.com/js/js_arithmetic.asp");
    }
  };
  
  Blockly.JavaScript['js_arithmetic'] = function(block) {
    var valueA = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_NONE) || '0';
    var valueB = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_NONE) || '0';
    var operator = block.getFieldValue('OPERATOR');
    var code = valueA + ' ' + operator + ' ' + valueB;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['js_trig'] = {
    init: function() {
      this.appendValueInput("NUM")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["sin", "SIN"], ["cos", "COS"], ["tan", "TAN"], ["asin", "ASIN"], ["acos", "ACOS"], ["atan", "ATAN"]]), "TRIG");
      this.setOutput(true, "Number");
      this.setColour(60);
      this.setTooltip("Trigonometric functions");
      this.setHelpUrl("https://www.w3schools.com/js/js_math.asp");
    }
  };
  
  Blockly.JavaScript['js_trig'] = function(block) {
    var trig = block.getFieldValue('TRIG').toLowerCase();
    var num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_NONE) || '0';
    var code = 'Math.' + trig + '(' + num + ' / 180 * Math.PI)';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['js_advanced_math'] = {
    init: function() {
      this.appendValueInput("NUM")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["square root", "SQRT"], ["absolute", "ABS"], ["ln", "LN"], ["log10", "LOG10"], ["e^", "EXP"], ["10^", "POW10"]]), "FUNC");
      this.setOutput(true, "Number");
      this.setColour(60);
      this.setTooltip("Advanced math functions");
      this.setHelpUrl("https://www.w3schools.com/js/js_math.asp");
    }
  };
  
  Blockly.JavaScript['js_advanced_math'] = function(block) {
    var func = block.getFieldValue('FUNC');
    var num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_NONE) || '0';
    var code;
    switch (func) {
      case 'SQRT':
        code = 'Math.sqrt(' + num + ')';
        break;
      case 'ABS':
        code = 'Math.abs(' + num + ')';
        break;
      case 'LN':
        code = 'Math.log(' + num + ')';
        break;
      case 'LOG10':
        code = 'Math.log10(' + num + ')';
        break;
      case 'EXP':
        code = 'Math.exp(' + num + ')';
        break;
      case 'POW10':
        code = 'Math.pow(10, ' + num + ')';
        break;
      default:
        code = 'Math.sqrt(' + num + ')';
    }
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['js_atan2'] = {
    init: function() {
      this.appendValueInput("X")
          .setCheck("Number")
          .appendField("atan2 of X:");
      this.appendValueInput("Y")
          .setCheck("Number")
          .appendField("Y:");
      this.setOutput(true, "Number");
      this.setColour(60);
      this.setTooltip("atan2 function");
      this.setHelpUrl("https://www.w3schools.com/js/js_math.asp");
    }
  };
  
  Blockly.JavaScript['js_atan2'] = function(block) {
    var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_NONE) || '0';
    var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_NONE) || '0';
    var code = 'Math.atan2(' + x + ', ' + y + ') / Math.PI * 180';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  

  Blockly.Blocks['js_constants'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["π", "PI"], ["e", "E"], ["φ", "PHI"], ["sqrt(2)", "SQRT2"], ["sqrt(½)", "SQRT1_2"], ["∞", "INFINITY"]]), "CONST");
      this.setOutput(true, "Number");
      this.setColour(60);
      this.setTooltip("Math constants");
      this.setHelpUrl("https://www.w3schools.com/js/js_math.asp");
    }
  };
  
  Blockly.JavaScript['js_constants'] = function(block) {
    var constant = block.getFieldValue('CONST');
    var code = 'Math.' + constant;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  
  Blockly.Blocks['js_number_property'] = {
    init: function() {
      this.appendValueInput("NUMBER_TO_CHECK")
          .setCheck("Number")
          .appendField(new Blockly.FieldDropdown([["even", "EVEN"], ["odd", "ODD"], ["prime", "PRIME"], ["whole", "WHOLE"], ["positive", "POSITIVE"], ["negative", "NEGATIVE"], ["divisible by", "DIVISIBLE"]]), "PROPERTY");
      this.appendValueInput("DIVISOR")
          .setCheck("Number")
          .appendField("divisor")
          .setVisible(false);
      this.setOutput(true, "Boolean");
      this.setColour(60);
      this.setTooltip("Check number property");
      this.setHelpUrl("https://www.w3schools.com/js/js_math.asp");
    }
  };
  
  Blockly.JavaScript['js_number_property'] = function(block) {
    var property = block.getFieldValue('PROPERTY');
    var number_to_check = Blockly.JavaScript.valueToCode(block, 'NUMBER_TO_CHECK', Blockly.JavaScript.ORDER_NONE) || '0';
    var divisor = Blockly.JavaScript.valueToCode(block, 'DIVISOR', Blockly.JavaScript.ORDER_NONE) || '1';
    
    var code;
    switch (property) {
      case 'EVEN':
        code = number_to_check + ' % 2 === 0';
        break;
      case 'ODD':
        code = number_to_check + ' % 2 !== 0';
        break;
      case 'PRIME':
        code = 'isPrime(' + number_to_check + ')';
        break;
      case 'WHOLE':
        code = number_to_check + ' % 1 === 0';
        break;
      case 'POSITIVE':
        code = number_to_check + ' > 0';
        break;
      case 'NEGATIVE':
        code = number_to_check + ' < 0';
        break;
      case 'DIVISIBLE':
        code = number_to_check + ' % ' + divisor + ' === 0';
        break;
      default:
        code = number_to_check + ' % 2 === 0';
    }
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['js_rounding'] = {
    init: function() {
      this.appendValueInput("NUM")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["round", "ROUND"], ["round up", "CEIL"], ["round down", "FLOOR"]]), "ROUND");
      this.setOutput(true, "Number");
      this.setColour(60);
      this.setTooltip("Rounding functions");
      this.setHelpUrl("https://www.w3schools.com/js/js_math.asp");
    }
  };
  
  Blockly.JavaScript['js_rounding'] = function(block) {
    var round = block.getFieldValue('ROUND').toLowerCase();
    var num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_NONE) || '0';
    var code = 'Math.' + round + '(' + num + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  

  Blockly.Blocks['js_trig'] = {
    init: function() {
      this.appendValueInput("NUM")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["sin", "SIN"], ["cos", "COS"], ["tan", "TAN"], ["asin", "ASIN"], ["acos", "ACOS"], ["atan", "ATAN"]]), "TRIG");
      this.setOutput(true, "Number");
      this.setColour(60);
      this.setTooltip("Trigonometric functions");
      this.setHelpUrl("https://www.w3schools.com/js/js_math.asp");
    }
  };
  
  Blockly.JavaScript['js_trig'] = function(block) {
    var trig = block.getFieldValue('TRIG').toLowerCase();
    var num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_NONE) || '0';
    var code = 'Math.' + trig + '(' + num + ' / 180 * Math.PI)';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['js_constrain'] = {
    init: function() {
      this.appendValueInput("VALUE")
          .setCheck("Number")
          .appendField("constrain");
      this.appendValueInput("LOW")
          .setCheck("Number")
          .appendField("low");
      this.appendValueInput("HIGH")
          .setCheck("Number")
          .appendField("high");
      this.setOutput(true, "Number");
      this.setColour(60);
      this.setTooltip("Constrain a number between two values");
      this.setHelpUrl("https://www.w3schools.com/js/js_math.asp");
    }
  };
  
  Blockly.JavaScript['js_constrain'] = function(block) {
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || '0';
    var low = Blockly.JavaScript.valueToCode(block, 'LOW', Blockly.JavaScript.ORDER_NONE) || '0';
    var high = Blockly.JavaScript.valueToCode(block, 'HIGH', Blockly.JavaScript.ORDER_NONE) || '0';
    var code = 'Math.min(Math.max(' + value + ', ' + low + '), ' + high + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  

  Blockly.Blocks['js_random_int'] = {
    init: function() {
      this.appendValueInput("FROM")
          .setCheck("Number")
          .appendField("random integer from");
      this.appendValueInput("TO")
          .setCheck("Number")
          .appendField("to");
      this.setOutput(true, "Number");
      this.setColour(60);
      this.setTooltip("Generate a random integer between two values");
      this.setHelpUrl("https://www.w3schools.com/js/js_random.asp");
    }
  };
  
  Blockly.JavaScript['js_random_int'] = function(block) {
    var from = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_NONE) || '0';
    var to = Blockly.JavaScript.valueToCode(block, 'TO', Blockly.JavaScript.ORDER_NONE) || '1';
    var code = 'Math.floor(Math.random() * (' + to + ' - ' + from + ' + 1)) + ' + from;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['js_remainder'] = {
    init: function() {
      this.appendValueInput("DIVIDEND")
          .setCheck("Number")
          .appendField("remainder of");
      this.appendValueInput("DIVISOR")
          .setCheck("Number")
          .appendField("÷");
      this.setOutput(true, "Number");
      this.setColour(60);
      this.setTooltip("Remainder of division");
      this.setHelpUrl("https://www.w3schools.com/js/js_arithmetic.asp");
    }
  };
  
  Blockly.JavaScript['js_remainder'] = function(block) {
    var dividend = Blockly.JavaScript.valueToCode(block, 'DIVIDEND', Blockly.JavaScript.ORDER_NONE) || '0';
    var divisor = Blockly.JavaScript.valueToCode(block, 'DIVISOR', Blockly.JavaScript.ORDER_NONE) || '1';
    var code = dividend + ' % ' + divisor;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['js_math_random_fraction'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("random fraction");
      this.setOutput(true, "Number");
      this.setColour(60);
      this.setTooltip("Returns a random fraction between 0 (inclusive) and 1 (exclusive).");
      this.setHelpUrl("https://www.w3schools.com/js/js_random.asp");
    }
  };

  Blockly.JavaScript['js_math_random_fraction'] = function(block) {
    var code = 'Math.random()';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.Blocks['js_repeat'] = {
    init: function() {
        this.appendValueInput("TIMES")
            .setCheck("Number")
            .appendField("repeat");
        this.appendDummyInput()
            .appendField("times");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("Repeat the enclosed blocks a specified number of times.");
        this.setHelpUrl("https://www.w3schools.com/js/js_loop_for.asp");
    }
};

Blockly.JavaScript['js_repeat'] = function(block) {
    var times = Blockly.JavaScript.valueToCode(block, 'TIMES', Blockly.JavaScript.ORDER_ATOMIC);
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    var code = 'for (var count = 0; count < ' + times + '; count++) {\n' + branch + '}\n';
    return code;
};

Blockly.Blocks['js_repeat_while'] = {
    init: function() {
        this.appendValueInput("CONDITION")
            .setCheck("Boolean")
            .appendField("repeat")
            .appendField(new Blockly.FieldDropdown([["while", "WHILE"], ["until", "UNTIL"]]), "MODE");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("Repeat the enclosed blocks while or until the condition is met.");
        this.setHelpUrl("https://www.w3schools.com/js/js_loop_while.asp");
    }
};

Blockly.JavaScript['js_repeat_while'] = function(block) {
    var dropdown_mode = block.getFieldValue('MODE');
    var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE);
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    var code = '';
    if (dropdown_mode === 'WHILE') {
        code = 'while (' + condition + ') {\n' + branch + '}\n';
    } else {
        code = 'while (!(' + condition + ')) {\n' + branch + '}\n';
    }
    return code;
};

Blockly.Blocks['js_text'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput(""), "TEXT");
      this.setOutput(true, "String");
      this.setColour(160);
      this.setTooltip("A string of text.");
      this.setHelpUrl("https://www.w3schools.com/js/js_strings.asp");
    }
  };
  
  Blockly.JavaScript['js_text'] = function(block) {
    var text = block.getFieldValue('TEXT');
    var code = '\'' + text + '\'';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.Blocks['js_text_length'] = {
    init: function() {
      this.appendValueInput("VALUE")
          .setCheck("String")
          .appendField("length of");
      this.setOutput(true, "Number");
      this.setColour(160);
      this.setTooltip("Returns the number of characters in the provided text.");
      this.setHelpUrl("https://www.w3schools.com/js/js_string_length.asp");
    }
  };
  
  Blockly.JavaScript['js_text_length'] = function(block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var code = value_text + '.length';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };

  Blockly.Blocks['js_text_empty'] = {
    init: function() {
      this.appendValueInput("VALUE")
          .setCheck("String")
          .appendField("is empty");
      this.setOutput(true, "Boolean");
      this.setColour(160);
      this.setTooltip("Returns true if the provided text is empty.");
      this.setHelpUrl("https://www.w3schools.com/js/js_strings.asp");
    }
  };
  
  Blockly.JavaScript['js_text_empty'] = function(block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var code = '!(' + value_text + '.length)';
    return [code, Blockly.JavaScript.ORDER_LOGICAL_NOT];
  };

  Blockly.Blocks['js_text_concat'] = {
    init: function() {
      this.appendValueInput("TEXT1")
          .setCheck("String")
          .appendField("combine text ");
      this.appendValueInput("TEXT2")
          .setCheck("String")
          .appendField("and");
      this.setOutput(true, "String");
      this.setColour(160);
      this.setTooltip("Combines two strings of text.");
      this.setHelpUrl("https://www.w3schools.com/js/js_strings.asp");
    }
  };

  Blockly.JavaScript['js_text_concat'] = function(block) {
    var text1 = Blockly.JavaScript.valueToCode(block, 'TEXT1', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var text2 = Blockly.JavaScript.valueToCode(block, 'TEXT2', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var code = text1 + ' + ' + text2;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  
  Blockly.Blocks['js_var_declare'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("var")
          .appendField(new Blockly.FieldTextInput("variable"), "VAR_NAME")
          .appendField("=");
      this.appendValueInput("VALUE")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(100);
      this.setTooltip("Declare a variable using var.");
      this.setHelpUrl("https://www.w3schools.com/js/js_variables.asp");
    }
  };
  
  Blockly.JavaScript['js_var_declare'] = function(block) {
    var varName = block.getFieldValue('VAR_NAME');
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
    var code = 'var ' + varName + ' = ' + value + ';\n';
    return code;
  };

// Block for a string input
Blockly.Blocks['js_var_reference'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Variable")
          .appendField(new Blockly.FieldTextInput("variable"), "VAR_NAME");
      this.setOutput(true, null);
      this.setColour(100);
      this.setTooltip("Reference a variable.");
      this.setHelpUrl("https://www.w3schools.com/js/js_variables.asp");
    }
  };
  
  Blockly.JavaScript['js_var_reference'] = function(block) {
    var varName = block.getFieldValue('VAR_NAME');
    var code = varName;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.Blocks['js_get_element_by_id'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("get element by ID")
          .appendField(new Blockly.FieldTextInput("element_id"), "ELEMENT_ID");
      this.setOutput(true, "Element");
      this.setColour(30);
      this.setTooltip("Get an element by its ID.");
      this.setHelpUrl("https://www.w3schools.com/jsref/met_document_getelementbyid.asp");
    }
  };
  
  Blockly.JavaScript['js_get_element_by_id'] = function(block) {
    var elementId = block.getFieldValue('ELEMENT_ID');
    var code = 'document.getElementById("' + elementId + '")';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.Blocks['js_set_element_text'] = {
    init: function() {
      this.appendValueInput("ELEMENT")
          .setCheck("Element")
          .appendField("set text of");
      this.appendValueInput("TEXT")
          .setCheck("String")
          .appendField("to");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(30);
      this.setTooltip("Set the text content of an element.");
      this.setHelpUrl("https://www.w3schools.com/jsref/prop_html_innertext.asp");
    }
  };
  
  Blockly.JavaScript['js_set_element_text'] = function(block) {
    var element = Blockly.JavaScript.valueToCode(block, 'ELEMENT', Blockly.JavaScript.ORDER_ATOMIC);
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    var code = element + '.innerText = ' + text + ';\n';
    return code;
  };

  Blockly.Blocks['js_add_event_listener'] = {
    init: function() {
      this.appendValueInput("ELEMENT")
          .setCheck("Element")
          .appendField("add event listener to");
      this.appendDummyInput()
          .appendField("on")
          .appendField(new Blockly.FieldDropdown([["click","click"], ["mouseover","mouseover"], ["mouseout","mouseout"], ["keydown","keydown"], ["keyup","keyup"]]), "EVENT");
      this.appendStatementInput("HANDLER")
          .setCheck(null)
          .appendField("do");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(30);
      this.setTooltip("Add an event listener to an element.");
      this.setHelpUrl("https://www.w3schools.com/jsref/met_element_addeventlistener.asp");
    }
  };
  
  Blockly.JavaScript['js_add_event_listener'] = function(block) {
    var element = Blockly.JavaScript.valueToCode(block, 'ELEMENT', Blockly.JavaScript.ORDER_ATOMIC);
    var event = block.getFieldValue('EVENT');
    var handler = Blockly.JavaScript.statementToCode(block, 'HANDLER');
    var code = element + '.addEventListener("' + event + '", function() {\n' + handler + '});\n';
    return code;
  };