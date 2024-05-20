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


Blockly.Blocks['css_selector'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("CSS Selector")
            .appendField(new Blockly.FieldTextInput("selector"), "SELECTOR");
        this.appendStatementInput("PROPERTIES")
            .setCheck(null)
            .appendField("Styles");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(170);
        this.setTooltip("Define a CSS selector and its properties.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css_selectors.asp");
    }
};

Blockly.CSS['css_selector'] = function(block) {
    var selector = block.getFieldValue('SELECTOR');
    var properties = Blockly.CSS.statementToCode(block, 'PROPERTIES');
    var code = selector + ' {\n' + properties + '}\n';
    return code;
};


//Blocks grouped by categories.

//Box model:
/*Blocks in this category:
margin
padding
border
border-radius
width
height
box-sizing
margin-top
margin-right
margin-bottom
margin-left
padding-top
padding-right
padding-bottom
padding-left
*/

//margin
Blockly.Blocks['css_margin'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("margin")
            .appendField(new Blockly.FieldTextInput("0px"), "MARGIN");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(100);
        this.setTooltip("Sets the margin area on all four sides of an element.");
        this.setHelpUrl("https://www.w3schools.com/css/css_margin.asp");
    }
};

Blockly.CSS['css_margin'] = function(block) {
    var margin = block.getFieldValue('MARGIN');
    var code = 'margin: ' + margin + ';\n';
    return code;
};

//Padding
Blockly.Blocks['css_padding'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("padding")
            .appendField(new Blockly.FieldTextInput("0px"), "PADDING");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(100);
        this.setTooltip("Sets the padding area on all four sides of an element.");
        this.setHelpUrl("https://www.w3schools.com/css/css_padding.asp");
    }
};

Blockly.CSS['css_padding'] = function(block) {
    var padding = block.getFieldValue('PADDING');
    var code = 'padding: ' + padding + ';\n';
    return code;
};

//Border
Blockly.Blocks['css_border'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border size")
            .appendField(new Blockly.FieldNumber(1, 0, Infinity, 1), "BORDER_SIZE")
            .appendField(new Blockly.FieldDropdown([["px", "px"], ["em", "em"], ["rem", "rem"], ["%", "%"]]), "BORDER_UNIT");
        this.appendDummyInput()
            .appendField("style")
            .appendField(new Blockly.FieldDropdown([["solid", "solid"], ["dashed", "dashed"], ["dotted", "dotted"]]), "BORDER_STYLE");
        this.appendDummyInput()
            .appendField("color")
            .appendField(new Blockly.FieldColour("#000000"), "BORDER_COLOR");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(100);
        this.setTooltip("Sets the border size, style, and color of an element.");
        this.setHelpUrl("https://www.w3schools.com/css/css_border.asp");
    }
};

Blockly.CSS['css_border'] = function(block) {
    var size = block.getFieldValue('BORDER_SIZE');
    var unit = block.getFieldValue('BORDER_UNIT');
    var style = block.getFieldValue('BORDER_STYLE');
    var color = block.getFieldValue('BORDER_COLOR');
    var code = 'border: ' + size + unit + ' ' + style + ' ' + color + ';\n';
    return code;
};

//Radius
Blockly.Blocks['css_border_radius'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-radius")
            .appendField(new Blockly.FieldTextInput("0px"), "BORDER_RADIUS");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(100);
        this.setTooltip("Sets the radius of the element's corners.");
        this.setHelpUrl("https://www.w3schools.com/css/css_border.asp");
    }
};

Blockly.CSS['css_border_radius'] = function(block) {
    var radius = block.getFieldValue('BORDER_RADIUS');
    var code = 'border-radius: ' + radius + ';\n';
    return code;
};

//Width
Blockly.Blocks['css_width'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("width")
            .appendField(new Blockly.FieldTextInput("100px"), "WIDTH");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(100);
        this.setTooltip("Sets the width of an element.");
        this.setHelpUrl("https://www.w3schools.com/css/css_dimension.asp");
    }
};

Blockly.CSS['css_width'] = function(block) {
    var width = block.getFieldValue('WIDTH');
    var code = 'width: ' + width + ';\n';
    return code;
};


//Height
Blockly.Blocks['css_height'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("height")
            .appendField(new Blockly.FieldTextInput("100px"), "HEIGHT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(100);
        this.setTooltip("Sets the height of an element.");
        this.setHelpUrl("https://www.w3schools.com/css/css_dimension.asp");
    }
};

Blockly.CSS['css_height'] = function(block) {
    var height = block.getFieldValue('HEIGHT');
    var code = 'height: ' + height + ';\n';
    return code;
};

//Box sizing
Blockly.Blocks['css_box_sizing'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("box-sizing")
            .appendField(new Blockly.FieldDropdown([["content-box", "content-box"], ["border-box", "border-box"]]), "BOX_SIZING");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(100);
        this.setTooltip("Defines how the width and height of an element are calculated: should they include padding and borders, or not.");
        this.setHelpUrl("https://www.w3schools.com/css/css3_boxsizing.asp");
    }
};

Blockly.CSS['css_box_sizing'] = function(block) {
    var sizing = block.getFieldValue('BOX_SIZING');
    var code = 'box-sizing: ' + sizing + ';\n';
    return code;
};

//Margin top
Blockly.Blocks['css_margin_top'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("margin-top")
            .appendField(new Blockly.FieldTextInput("0px"), "MARGIN_TOP");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(100);
        this.setTooltip("Sets the top margin of an element.");
        this.setHelpUrl("https://www.w3schools.com/css/css_margin.asp");
    }
};

Blockly.CSS['css_margin_top'] = function(block) {
    var marginTop = block.getFieldValue('MARGIN_TOP');
    var code = 'margin-top: ' + marginTop + ';\n';
    return code;
};


//Margin right
Blockly.Blocks['css_margin_right'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("margin-right")
            .appendField(new Blockly.FieldTextInput("0px"), "MARGIN_RIGHT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(100);
        this.setTooltip("Sets the right margin of an element.");
        this.setHelpUrl("https://www.w3schools.com/css/css_margin.asp");
    }
};

Blockly.CSS['css_margin_right'] = function(block) {
    var marginRight = block.getFieldValue('MARGIN_RIGHT');
    var code = 'margin-right: ' + marginRight + ';\n';
    return code;
};


//Margin bottom
Blockly.Blocks['css_margin_bottom'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("margin-bottom")
            .appendField(new Blockly.FieldTextInput("0px"), "MARGIN_BOTTOM");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(100);
        this.setTooltip("Sets the bottom margin of an element.");
        this.setHelpUrl("https://www.w3schools.com/css/css_margin.asp");
    }
};

Blockly.CSS['css_margin_bottom'] = function(block) {
    var marginBottom = block.getFieldValue('MARGIN_BOTTOM');
    var code = 'margin-bottom: ' + marginBottom + ';\n';
    return code;
};


//Margin left
Blockly.Blocks['css_margin_left'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("margin-left")
            .appendField(new Blockly.FieldTextInput("0px"), "MARGIN_LEFT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(100);
        this.setTooltip("Sets the left margin of an element.");
        this.setHelpUrl("https://www.w3schools.com/css/css_margin.asp");
    }
};

Blockly.CSS['css_margin_left'] = function(block) {
    var marginLeft = block.getFieldValue('MARGIN_LEFT');
    var code = 'margin-left: ' + marginLeft + ';\n';
    return code;
};


//Padding top
Blockly.Blocks['css_padding_top'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("padding-top")
            .appendField(new Blockly.FieldTextInput("0px"), "PADDING_TOP");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(100);
        this.setTooltip("Sets the top padding of an element.");
        this.setHelpUrl("https://www.w3schools.com/css/css_padding.asp");
    }
};

Blockly.CSS['css_padding_top'] = function(block) {
    var paddingTop = block.getFieldValue('PADDING_TOP');
    var code = 'padding-top: ' + paddingTop + ';\n';
    return code;
};


//Padding right
Blockly.Blocks['css_padding_right'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("padding-right")
            .appendField(new Blockly.FieldTextInput("0px"), "PADDING_RIGHT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(100);
        this.setTooltip("Sets the right padding of an element.");
        this.setHelpUrl("https://www.w3schools.com/css/css_padding.asp");
    }
};

Blockly.CSS['css_padding_right'] = function(block) {
    var paddingRight = block.getFieldValue('PADDING_RIGHT');
    var code = 'padding-right: ' + paddingRight + ';\n';
    return code;
};


//Padding bottom
Blockly.Blocks['css_padding_bottom'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("padding-bottom")
            .appendField(new Blockly.FieldTextInput("0px"), "PADDING_BOTTOM");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(100);
        this.setTooltip("Sets the bottom padding of an element.");
        this.setHelpUrl("https://www.w3schools.com/css/css_padding.asp");
    }
};

Blockly.CSS['css_padding_bottom'] = function(block) {
    var paddingBottom = block.getFieldValue('PADDING_BOTTOM');
    var code = 'padding-bottom: ' + paddingBottom + ';\n';
    return code;
};


//Padding left
Blockly.Blocks['css_padding_left'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("padding-left")
            .appendField(new Blockly.FieldTextInput("0px"), "PADDING_LEFT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(100);
        this.setTooltip("Sets the left padding of an element.");
        this.setHelpUrl("https://www.w3schools.com/css/css_padding.asp");
    }
};

Blockly.CSS['css_padding_left'] = function(block) {
    var paddingLeft = block.getFieldValue('PADDING_LEFT');
    var code = 'padding-left: ' + paddingLeft + ';\n';
    return code;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
//Text group//
/*Blocks in this group:
font-family
font-size
font-style
font-weight
line-height
text-align
text-decoration
letter-spacing
word-spacing
text-transform
text-shadow
text-indent
white-space
text-overflow
direction*/

// Font Family Block
Blockly.Blocks['css_font_family'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("font-family")
            .appendField(new Blockly.FieldDropdown([
                ["Arial", "Arial"], ["Verdana", "Verdana"], ["Helvetica", "Helvetica"],
                ["Tahoma", "Tahoma"], ["Trebuchet MS", "Trebuchet MS"], ["Times New Roman", "Times New Roman"],
                ["Georgia", "Georgia"], ["Garamond", "Garamond"], ["Courier New", "Courier New"],
                ["Brush Script MT", "Brush Script MT"]
            ]), "FONT_FAMILY");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(300);
        this.setTooltip("Sets the font family of the text.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_font_font-family.asp");
    }
};

Blockly.CSS['css_font_family'] = function(block) {
    var fontFamily = block.getFieldValue('FONT_FAMILY');
    var code = 'font-family: ' + fontFamily + ';\n';
    return code;
};

// Font Size Block
Blockly.Blocks['css_font_size'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("font-size")
            .appendField(new Blockly.FieldTextInput("16px"), "FONT_SIZE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(300);
        this.setTooltip("Sets the font size of the text.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_font_font-size.asp");
    }
};

Blockly.CSS['css_font_size'] = function(block) {
    var fontSize = block.getFieldValue('FONT_SIZE');
    var code = 'font-size: ' + fontSize + ';\n';
    return code;
};

// Font Style Block
Blockly.Blocks['css_font_style'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("font-style")
            .appendField(new Blockly.FieldDropdown([["normal", "normal"], ["italic", "italic"], ["oblique", "oblique"]]), "FONT_STYLE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(300);
        this.setTooltip("Sets the font style of the text.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_font_font-style.asp");
    }
};

Blockly.CSS['css_font_style'] = function(block) {
    var fontStyle = block.getFieldValue('FONT_STYLE');
    var code = 'font-style: ' + fontStyle + ';\n';
    return code;
};

// Font Weight Block
Blockly.Blocks['css_font_weight'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("font-weight")
            .appendField(new Blockly.FieldDropdown([
                ["normal", "normal"], ["bold", "bold"], ["bolder", "bolder"], ["lighter", "lighter"],
                ["100", "100"], ["200", "200"], ["300", "300"], ["400", "400"],
                ["500", "500"], ["600", "600"], ["700", "700"], ["800", "800"], ["900", "900"]
            ]), "FONT_WEIGHT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(300);
        this.setTooltip("Sets the font weight of the text.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_font_weight.asp");
    }
};

Blockly.CSS['css_font_weight'] = function(block) {
    var fontWeight = block.getFieldValue('FONT_WEIGHT');
    var code = 'font-weight: ' + fontWeight + ';\n';
    return code;
};

// Line Height Block
Blockly.Blocks['css_line_height'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("line-height")
            .appendField(new Blockly.FieldTextInput("normal"), "LINE_HEIGHT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(300);
        this.setTooltip("Sets the line height of the text.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_dim_line-height.asp");
    }
};

Blockly.CSS['css_line_height'] = function(block) {
    var lineHeight = block.getFieldValue('LINE_HEIGHT');
    var code = 'line-height: ' + lineHeight + ';\n';
    return code;
};

// Text Align Block
Blockly.Blocks['css_text_align'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("text-align")
            .appendField(new Blockly.FieldDropdown([["left", "left"], ["right", "right"], ["center", "center"], ["justify", "justify"]]), "TEXT_ALIGN");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(300);
        this.setTooltip("Sets the horizontal alignment of the text.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_text_text-align.asp");
    }
};

Blockly.CSS['css_text_align'] = function(block) {
    var textAlign = block.getFieldValue('TEXT_ALIGN');
    var code = 'text-align: ' + textAlign + ';\n';
    return code;
};

// Text Decoration Block
Blockly.Blocks['css_text_decoration'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("text-decoration")
            .appendField(new Blockly.FieldDropdown([["none", "none"], ["underline", "underline"], ["overline", "overline"], ["line-through", "line-through"]]), "TEXT_DECORATION");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(300);
        this.setTooltip("Sets the text decoration.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_text_text-decoration.asp");
    }
};

Blockly.CSS['css_text_decoration'] = function(block) {
    var textDecoration = block.getFieldValue('TEXT_DECORATION');
    var code = 'text-decoration: ' + textDecoration + ';\n';
    return code;
};

// Letter Spacing Block
Blockly.Blocks['css_letter_spacing'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("letter-spacing")
            .appendField(new Blockly.FieldTextInput("normal"), "LETTER_SPACING");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(300);
        this.setTooltip("Sets the spacing between characters.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_text_letter-spacing.asp");
    }
};

Blockly.CSS['css_letter_spacing'] = function(block) {
    var letterSpacing = block.getFieldValue('LETTER_SPACING');
    var code = 'letter-spacing: ' + letterSpacing + ';\n';
    return code;
};

// Word Spacing Block
Blockly.Blocks['css_word_spacing'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("word-spacing")
            .appendField(new Blockly.FieldTextInput("normal"), "WORD_SPACING");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(300);
        this.setTooltip("Sets the spacing between words.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_text_word-spacing.asp");
    }
};

Blockly.CSS['css_word_spacing'] = function(block) {
    var wordSpacing = block.getFieldValue('WORD_SPACING');
    var code = 'word-spacing: ' + wordSpacing + ';\n';
    return code;
};

// Text Transform Block
Blockly.Blocks['css_text_transform'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("text-transform")
            .appendField(new Blockly.FieldDropdown([["none", "none"], ["capitalize", "capitalize"], ["uppercase", "uppercase"], ["lowercase", "lowercase"]]), "TEXT_TRANSFORM");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(300);
        this.setTooltip("Controls the capitalization of text.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_text_text-transform.asp");
    }
};

Blockly.CSS['css_text_transform'] = function(block) {
    var textTransform = block.getFieldValue('TEXT_TRANSFORM');
    var code = 'text-transform: ' + textTransform + ';\n';
    return code;
};

// Text Shadow Block
Blockly.Blocks['css_text_shadow'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("text-shadow")
            .appendField("h-offset")
            .appendField(new Blockly.FieldNumber(0), "H_OFFSET")
            .appendField("v-offset")
            .appendField(new Blockly.FieldNumber(0), "V_OFFSET")
            .appendField("blur")
            .appendField(new Blockly.FieldNumber(0), "BLUR")
            .appendField("color")
            .appendField(new Blockly.FieldColour("#000000"), "COLOR");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(300);
        this.setTooltip("Adds shadow to text.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_text-shadow.asp");
    }
};

Blockly.CSS['css_text_shadow'] = function(block) {
    var hOffset = block.getFieldValue('H_OFFSET');
    var vOffset = block.getFieldValue('V_OFFSET');
    var blur = block.getFieldValue('BLUR');
    var color = block.getFieldValue('COLOR');
    var code = 'text-shadow: ' + hOffset + 'px ' + vOffset + 'px ' + blur + 'px ' + color + ';\n';
    return code;
};

// Text Indent Block
Blockly.Blocks['css_text_indent'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("text-indent")
            .appendField(new Blockly.FieldTextInput("0px"), "TEXT_INDENT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(300);
        this.setTooltip("Sets the indentation of the first line of text.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_text_text-indent.asp");
    }
};

Blockly.CSS['css_text_indent'] = function(block) {
    var textIndent = block.getFieldValue('TEXT_INDENT');
    var code = 'text-indent: ' + textIndent + ';\n';
    return code;
};

// White Space Block
Blockly.Blocks['css_white_space'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("white-space")
            .appendField(new Blockly.FieldDropdown([["normal", "normal"], ["nowrap", "nowrap"], ["pre", "pre"], ["pre-line", "pre-line"], ["pre-wrap", "pre-wrap"]]), "WHITE_SPACE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(300);
        this.setTooltip("Sets how white space inside an element is handled.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_text_white-space.asp");
    }
};

Blockly.CSS['css_white_space'] = function(block) {
    var whiteSpace = block.getFieldValue('WHITE_SPACE');
    var code = 'white-space: ' + whiteSpace + ';\n';
    return code;
};

// Text Overflow Block
Blockly.Blocks['css_text_overflow'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("text-overflow")
            .appendField(new Blockly.FieldDropdown([["clip", "clip"], ["ellipsis", "ellipsis"]]), "TEXT_OVERFLOW");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(300);
        this.setTooltip("Sets how overflowed content that is not displayed is signaled to the user.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_text-overflow.asp");
    }
};

Blockly.CSS['css_text_overflow'] = function(block) {
    var textOverflow = block.getFieldValue('TEXT_OVERFLOW');
    var code = 'text-overflow: ' + textOverflow + ';\n';
    return code;
};

// Direction Block
Blockly.Blocks['css_direction'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("direction")
            .appendField(new Blockly.FieldDropdown([["ltr", "ltr"], ["rtl", "rtl"]]), "DIRECTION");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(300);
        this.setTooltip("Sets the text direction.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_text_direction.asp");
    }
};

Blockly.CSS['css_direction'] = function(block) {
    var direction = block.getFieldValue('DIRECTION');
    var code = 'direction: ' + direction + ';\n';
    return code;
};

///////////////////////////////////////////////////////////////////
//Color and Background group//
/*Blocks in this group:
color
background-color
background-image
background-size
background-repeat
background-position
background-attachment
background-origin
background-clip */

// Color Block
Blockly.Blocks['css_color'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("color")
            .appendField(new Blockly.FieldColour("#000000"), "COLOR");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(60);
        this.setTooltip("Sets the color of the text.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_text_color.asp");
    }
};

Blockly.CSS['css_color'] = function(block) {
    var color = block.getFieldValue('COLOR');
    var code = 'color: ' + color + ';\n';
    return code;
};

// Background Color Block
Blockly.Blocks['css_background_color'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("background-color")
            .appendField(new Blockly.FieldColour("#FFFFFF"), "BACKGROUND_COLOR");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(60);
        this.setTooltip("Sets the background color of an element.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_background-color.asp");
    }
};

Blockly.CSS['css_background_color'] = function(block) {
    var backgroundColor = block.getFieldValue('BACKGROUND_COLOR');
    var code = 'background-color: ' + backgroundColor + ';\n';
    return code;
};

// Background Image Block
Blockly.Blocks['css_background_image'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("background-image")
            .appendField(new Blockly.FieldTextInput("url('')"), "BACKGROUND_IMAGE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(60);
        this.setTooltip("Sets the background image of an element.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_background-image.asp");
    }
};

Blockly.CSS['css_background_image'] = function(block) {
    var backgroundImage = block.getFieldValue('BACKGROUND_IMAGE');
    var code = 'background-image: ' + backgroundImage + ';\n';
    return code;
};

// Background Size Block
Blockly.Blocks['css_background_size'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("background-size")
            .appendField(new Blockly.FieldDropdown([["auto", "auto"], ["cover", "cover"], ["contain", "contain"], ["initial", "initial"], ["inherit", "inherit"]]), "BACKGROUND_SIZE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(60);
        this.setTooltip("Specifies the size of the background image.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_background-size.asp");
    }
};

Blockly.CSS['css_background_size'] = function(block) {
    var backgroundSize = block.getFieldValue('BACKGROUND_SIZE');
    var code = 'background-size: ' + backgroundSize + ';\n';
    return code;
};

// Background Repeat Block
Blockly.Blocks['css_background_repeat'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("background-repeat")
            .appendField(new Blockly.FieldDropdown([["repeat", "repeat"], ["no-repeat", "no-repeat"], ["repeat-x", "repeat-x"], ["repeat-y", "repeat-y"], ["space", "space"], ["round", "round"]]), "BACKGROUND_REPEAT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(60);
        this.setTooltip("Sets how background images are repeated.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_background-repeat.asp");
    }
};

Blockly.CSS['css_background_repeat'] = function(block) {
    var backgroundRepeat = block.getFieldValue('BACKGROUND_REPEAT');
    var code = 'background-repeat: ' + backgroundRepeat + ';\n';
    return code;
};

// Background Position Block
Blockly.Blocks['css_background_position'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("background-position")
            .appendField(new Blockly.FieldDropdown([["left top", "left top"], ["left center", "left center"], ["left bottom", "left bottom"], ["right top", "right top"], ["right center", "right center"], ["right bottom", "right bottom"], ["center top", "center top"], ["center center", "center center"], ["center bottom", "center bottom"]]), "BACKGROUND_POSITION");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(60);
        this.setTooltip("Sets the starting position of a background image.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_background-position.asp");
    }
};

Blockly.CSS['css_background_position'] = function(block) {
    var backgroundPosition = block.getFieldValue('BACKGROUND_POSITION');
    var code = 'background-position: ' + backgroundPosition + ';\n';
    return code;
};

// Background Attachment Block
Blockly.Blocks['css_background_attachment'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("background-attachment")
            .appendField(new Blockly.FieldDropdown([["scroll", "scroll"], ["fixed", "fixed"], ["local", "local"]]), "BACKGROUND_ATTACHMENT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(60);
        this.setTooltip("Sets whether a background image scrolls with the rest of the page, or is fixed.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_background-attachment.asp");
    }
};

Blockly.CSS['css_background_attachment'] = function(block) {
    var backgroundAttachment = block.getFieldValue('BACKGROUND_ATTACHMENT');
    var code = 'background-attachment: ' + backgroundAttachment + ';\n';
    return code;
};

// Background Origin Block
Blockly.Blocks['css_background_origin'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("background-origin")
            .appendField(new Blockly.FieldDropdown([["padding-box", "padding-box"], ["border-box", "border-box"], ["content-box", "content-box"]]), "BACKGROUND_ORIGIN");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(60);
        this.setTooltip("Specifies the origin position of a background image.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_background-origin.asp");
    }
};

Blockly.CSS['css_background_origin'] = function(block) {
    var backgroundOrigin = block.getFieldValue('BACKGROUND_ORIGIN');
    var code = 'background-origin: ' + backgroundOrigin + ';\n';
    return code;
};

// Background Clip Block
Blockly.Blocks['css_background_clip'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("background-clip")
            .appendField(new Blockly.FieldDropdown([["border-box", "border-box"], ["padding-box", "padding-box"], ["content-box", "content-box"]]), "BACKGROUND_CLIP");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(60);
        this.setTooltip("Specifies the painting area of the background.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_background-clip.asp");
    }
};

Blockly.CSS['css_background_clip'] = function(block) {
    var backgroundClip = block.getFieldValue('BACKGROUND_CLIP');
    var code = 'background-clip: ' + backgroundClip + ';\n';
    return code;
};

///////////////////////////////////////////////////////////////////
//Positioning group
/* Blocks in this group:
position
top
right
bottom
left
z-index
float
clear
overflow
visibility
clip
overflow-x
overflow-y
overflow-wrap */

// Position Block
Blockly.Blocks['css_position'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("position")
            .appendField(new Blockly.FieldDropdown([["static", "static"], ["relative", "relative"], ["absolute", "absolute"], ["fixed", "fixed"], ["sticky", "sticky"]]), "POSITION");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(210);
        this.setTooltip("Specifies the type of positioning method used for an element.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_class_position.asp");
    }
};

Blockly.CSS['css_position'] = function(block) {
    var position = block.getFieldValue('POSITION');
    var code = 'position: ' + position + ';\n';
    return code;
};

// Top Block
Blockly.Blocks['css_top'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("top")
            .appendField(new Blockly.FieldTextInput("0px"), "TOP");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(210);
        this.setTooltip("Specifies the top position of a positioned element.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_pos_top.asp");
    }
};

Blockly.CSS['css_top'] = function(block) {
    var top = block.getFieldValue('TOP');
    var code = 'top: ' + top + ';\n';
    return code;
};

// Right Block
Blockly.Blocks['css_right'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("right")
            .appendField(new Blockly.FieldTextInput("0px"), "RIGHT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(210);
        this.setTooltip("Specifies the right position of a positioned element.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_pos_right.asp");
    }
};

Blockly.CSS['css_right'] = function(block) {
    var right = block.getFieldValue('RIGHT');
    var code = 'right: ' + right + ';\n';
    return code;
};

// Bottom Block
Blockly.Blocks['css_bottom'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("bottom")
            .appendField(new Blockly.FieldTextInput("0px"), "BOTTOM");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(210);
        this.setTooltip("Specifies the bottom position of a positioned element.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_pos_bottom.asp");
    }
};

Blockly.CSS['css_bottom'] = function(block) {
    var bottom = block.getFieldValue('BOTTOM');
    var code = 'bottom: ' + bottom + ';\n';
    return code;
};

// Left Block
Blockly.Blocks['css_left'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("left")
            .appendField(new Blockly.FieldTextInput("0px"), "LEFT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(210);
        this.setTooltip("Specifies the left position of a positioned element.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_pos_left.asp");
    }
};

Blockly.CSS['css_left'] = function(block) {
    var left = block.getFieldValue('LEFT');
    var code = 'left: ' + left + ';\n';
    return code;
};

// Z-index Block
Blockly.Blocks['css_z_index'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("z-index")
            .appendField(new Blockly.FieldNumber(0), "Z_INDEX");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(210);
        this.setTooltip("Specifies the stack order of a positioned element.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_pos_z-index.asp");
    }
};

Blockly.CSS['css_z_index'] = function(block) {
    var zIndex = block.getFieldValue('Z_INDEX');
    var code = 'z-index: ' + zIndex + ';\n';
    return code;
};

// Float Block
Blockly.Blocks['css_float'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("float")
            .appendField(new Blockly.FieldDropdown([["none", "none"], ["left", "left"], ["right", "right"]]), "FLOAT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(210);
        this.setTooltip("Specifies whether an element should float to the left, right, or not at all.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_class_float.asp");
    }
};

Blockly.CSS['css_float'] = function(block) {
    var float = block.getFieldValue('FLOAT');
    var code = 'float: ' + float + ';\n';
    return code;
};

// Clear Block
Blockly.Blocks['css_clear'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("clear")
            .appendField(new Blockly.FieldDropdown([["none", "none"], ["left", "left"], ["right", "right"], ["both", "both"]]), "CLEAR");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(210);
        this.setTooltip("Specifies on which sides of an element floating elements are not allowed to float.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_class_clear.asp");
    }
};

Blockly.CSS['css_clear'] = function(block) {
    var clear = block.getFieldValue('CLEAR');
    var code = 'clear: ' + clear + ';\n';
    return code;
};

// Overflow Block
Blockly.Blocks['css_overflow'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("overflow")
            .appendField(new Blockly.FieldDropdown([["visible", "visible"], ["hidden", "hidden"], ["scroll", "scroll"], ["auto", "auto"]]), "OVERFLOW");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(210);
        this.setTooltip("Specifies what happens if content overflows an element's box.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_pos_overflow.asp");
    }
};

Blockly.CSS['css_overflow'] = function(block) {
    var overflow = block.getFieldValue('OVERFLOW');
    var code = 'overflow: ' + overflow + ';\n';
    return code;
};

// Visibility Block
Blockly.Blocks['css_visibility'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("visibility")
            .appendField(new Blockly.FieldDropdown([["visible", "visible"], ["hidden", "hidden"], ["collapse", "collapse"]]), "VISIBILITY");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(210);
        this.setTooltip("Specifies whether or not an element is visible.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_class_visibility.asp");
    }
};

Blockly.CSS['css_visibility'] = function(block) {
    var visibility = block.getFieldValue('VISIBILITY');
    var code = 'visibility: ' + visibility + ';\n';
    return code;
};

// Clip Block
Blockly.Blocks['css_clip'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("clip")
            .appendField(new Blockly.FieldTextInput("rect(0, 0, 0, 0)"), "CLIP");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(210);
        this.setTooltip("Defines the visible portion of an element.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_pos_clip.asp");
    }
};

Blockly.CSS['css_clip'] = function(block) {
    var clip = block.getFieldValue('CLIP');
    var code = 'clip: ' + clip + ';\n';
    return code;
};

// Overflow-X Block
Blockly.Blocks['css_overflow_x'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("overflow-x")
            .appendField(new Blockly.FieldDropdown([["visible", "visible"], ["hidden", "hidden"], ["scroll", "scroll"], ["auto", "auto"]]), "OVERFLOW_X");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(210);
        this.setTooltip("Specifies what happens if content overflows the left and right edges of an element's box.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_overflow-x.asp");
    }
};

Blockly.CSS['css_overflow_x'] = function(block) {
    var overflowX = block.getFieldValue('OVERFLOW_X');
    var code = 'overflow-x: ' + overflowX + ';\n';
    return code;
};

// Overflow-Y Block
Blockly.Blocks['css_overflow_y'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("overflow-y")
            .appendField(new Blockly.FieldDropdown([["visible", "visible"], ["hidden", "hidden"], ["scroll", "scroll"], ["auto", "auto"]]), "OVERFLOW_Y");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(210);
        this.setTooltip("Specifies what happens if content overflows the top and bottom edges of an element's box.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_overflow-y.asp");
    }
};

Blockly.CSS['css_overflow_y'] = function(block) {
    var overflowY = block.getFieldValue('OVERFLOW_Y');
    var code = 'overflow-y: ' + overflowY + ';\n';
    return code;
};

// Overflow-Wrap Block
Blockly.Blocks['css_overflow_wrap'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("overflow-wrap")
            .appendField(new Blockly.FieldDropdown([["normal", "normal"], ["break-word", "break-word"], ["anywhere", "anywhere"]]), "OVERFLOW_WRAP");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(210);
        this.setTooltip("Specifies whether or not the browser can break lines inside the selected element.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_overflow-wrap.asp");
    }
};

Blockly.CSS['css_overflow_wrap'] = function(block) {
    var overflowWrap = block.getFieldValue('OVERFLOW_WRAP');
    var code = 'overflow-wrap: ' + overflowWrap + ';\n';
    return code;
};


//////////////////////////////////////////////////////////////////////////////////////////////
//Flexbox group
/* Blocks in this group:
display
flex-direction
justify-content
align-items
flex-wrap
align-content
order
flex-grow
flex-shrink
flex-basis
align-self
flex */

// Display Block
Blockly.Blocks['css_display'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("display")
            .appendField(new Blockly.FieldDropdown([["flex", "flex"], ["inline-flex", "inline-flex"], ["block", "block"], ["inline-block", "inline-block"], ["none", "none"]]), "DISPLAY");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(30);
        this.setTooltip("Specifies the display behavior (the type of rendering box) of an element.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_class_display.asp");
    }
};

Blockly.CSS['css_display'] = function(block) {
    var display = block.getFieldValue('DISPLAY');
    var code = 'display: ' + display + ';\n';
    return code;
};

// Flex-Direction Block
Blockly.Blocks['css_flex_direction'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("flex-direction")
            .appendField(new Blockly.FieldDropdown([["row", "row"], ["row-reverse", "row-reverse"], ["column", "column"], ["column-reverse", "column-reverse"]]), "FLEX_DIRECTION");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(30);
        this.setTooltip("Specifies the direction of the flexible items.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_flex-direction.asp");
    }
};

Blockly.CSS['css_flex_direction'] = function(block) {
    var flexDirection = block.getFieldValue('FLEX_DIRECTION');
    var code = 'flex-direction: ' + flexDirection + ';\n';
    return code;
};

// Justify-Content Block
Blockly.Blocks['css_justify_content'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("justify-content")
            .appendField(new Blockly.FieldDropdown([["flex-start", "flex-start"], ["flex-end", "flex-end"], ["center", "center"], ["space-between", "space-between"], ["space-around", "space-around"], ["space-evenly", "space-evenly"]]), "JUSTIFY_CONTENT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(30);
        this.setTooltip("Aligns the flexible container's items when the items do not use all available space on the main-axis.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_justify-content.asp");
    }
};

Blockly.CSS['css_justify_content'] = function(block) {
    var justifyContent = block.getFieldValue('JUSTIFY_CONTENT');
    var code = 'justify-content: ' + justifyContent + ';\n';
    return code;
};

// Align-Items Block
Blockly.Blocks['css_align_items'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("align-items")
            .appendField(new Blockly.FieldDropdown([["stretch", "stretch"], ["center", "center"], ["flex-start", "flex-start"], ["flex-end", "flex-end"], ["baseline", "baseline"]]), "ALIGN_ITEMS");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(30);
        this.setTooltip("Aligns the flexible container's items when the items do not use all available space on the cross-axis.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_align-items.asp");
    }
};

Blockly.CSS['css_align_items'] = function(block) {
    var alignItems = block.getFieldValue('ALIGN_ITEMS');
    var code = 'align-items: ' + alignItems + ';\n';
    return code;
};

// Flex-Wrap Block
Blockly.Blocks['css_flex_wrap'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("flex-wrap")
            .appendField(new Blockly.FieldDropdown([["nowrap", "nowrap"], ["wrap", "wrap"], ["wrap-reverse", "wrap-reverse"]]), "FLEX_WRAP");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(30);
        this.setTooltip("Specifies whether the flexible items should wrap or not.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_flex-wrap.asp");
    }
};

Blockly.CSS['css_flex_wrap'] = function(block) {
    var flexWrap = block.getFieldValue('FLEX_WRAP');
    var code = 'flex-wrap: ' + flexWrap + ';\n';
    return code;
};

// Align-Content Block
Blockly.Blocks['css_align_content'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("align-content")
            .appendField(new Blockly.FieldDropdown([["stretch", "stretch"], ["center", "center"], ["flex-start", "flex-start"], ["flex-end", "flex-end"], ["space-between", "space-between"], ["space-around", "space-around"]]), "ALIGN_CONTENT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(30);
        this.setTooltip("Aligns the flexible container's lines when there is extra space on the cross-axis.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_align-content.asp");
    }
};

Blockly.CSS['css_align_content'] = function(block) {
    var alignContent = block.getFieldValue('ALIGN_CONTENT');
    var code = 'align-content: ' + alignContent + ';\n';
    return code;
};

// Order Block
Blockly.Blocks['css_order'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("order")
            .appendField(new Blockly.FieldNumber(0), "ORDER");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(30);
        this.setTooltip("Specifies the order of the flexible item, relative to the rest.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_order.asp");
    }
};

Blockly.CSS['css_order'] = function(block) {
    var order = block.getFieldValue('ORDER');
    var code = 'order: ' + order + ';\n';
    return code;
};

// Flex-Grow Block
Blockly.Blocks['css_flex_grow'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("flex-grow")
            .appendField(new Blockly.FieldNumber(0), "FLEX_GROW");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(30);
        this.setTooltip("Specifies how much the item will grow relative to the rest.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_flex-grow.asp");
    }
};

Blockly.CSS['css_flex_grow'] = function(block) {
    var flexGrow = block.getFieldValue('FLEX_GROW');
    var code = 'flex-grow: ' + flexGrow + ';\n';
    return code;
};

// Flex-Shrink Block
Blockly.Blocks['css_flex_shrink'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("flex-shrink")
            .appendField(new Blockly.FieldNumber(1), "FLEX_SHRINK");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(30);
        this.setTooltip("Specifies how the item will shrink relative to the rest.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_flex-shrink.asp");
    }
};

Blockly.CSS['css_flex_shrink'] = function(block) {
    var flexShrink = block.getFieldValue('FLEX_SHRINK');
    var code = 'flex-shrink: ' + flexShrink + ';\n';
    return code;
};

// Flex-Basis Block
Blockly.Blocks['css_flex_basis'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("flex-basis")
            .appendField(new Blockly.FieldTextInput("auto"), "FLEX_BASIS");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(30);
        this.setTooltip("Specifies the initial length of a flexible item.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_flex-basis.asp");
    }
};

Blockly.CSS['css_flex_basis'] = function(block) {
    var flexBasis = block.getFieldValue('FLEX_BASIS');
    var code = 'flex-basis: ' + flexBasis + ';\n';
    return code;
};

// Align-Self Block
Blockly.Blocks['css_align_self'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("align-self")
            .appendField(new Blockly.FieldDropdown([["auto", "auto"], ["flex-start", "flex-start"], ["flex-end", "flex-end"], ["center", "center"], ["baseline", "baseline"], ["stretch", "stretch"]]), "ALIGN_SELF");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(30);
        this.setTooltip("Specifies the alignment for the selected item inside the flexible container.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_align-self.asp");
    }
};

Blockly.CSS['css_align_self'] = function(block) {
    var alignSelf = block.getFieldValue('ALIGN_SELF');
    var code = 'align-self: ' + alignSelf + ';\n';
    return code;
};

// Flex Block
Blockly.Blocks['css_flex'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("flex")
            .appendField(new Blockly.FieldTextInput("0 1 auto"), "FLEX");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(30);
        this.setTooltip("A shorthand property for the flex-grow, flex-shrink, and flex-basis properties.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_flex.asp");
    }
};

Blockly.CSS['css_flex'] = function(block) {
    var flex = block.getFieldValue('FLEX');
    var code = 'flex: ' + flex + ';\n';
    return code;
};

////////////////////////////////////////////////////////////////////
// Grid section
/* Blocks in this section:
display
grid-template-columns
grid-template-rows
grid-template-areas
grid-gap
grid-column-gap
grid-row-gap
justify-items
align-items
justify-content
align-content
grid-auto-rows
grid-auto-columns
grid-auto-flow
grid-column
grid-row
grid-area
grid-template
gap */

// Display Block for Grid
Blockly.Blocks['css_display_grid'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("display")
            .appendField(new Blockly.FieldDropdown([["grid", "grid"], ["inline-grid", "inline-grid"]]), "DISPLAY");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("Specifies the display behavior of an element as a grid container.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_class_display.asp");
    }
};

Blockly.CSS['css_display_grid'] = function(block) {
    var display = block.getFieldValue('DISPLAY');
    var code = 'display: ' + display + ';\n';
    return code;
};

// Grid-Template-Columns Block
Blockly.Blocks['css_grid_template_columns'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("grid-template-columns")
            .appendField(new Blockly.FieldTextInput("none"), "GRID_TEMPLATE_COLUMNS");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("Specifies the number and size of columns in a grid layout.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_grid-template-columns.asp");
    }
};

Blockly.CSS['css_grid_template_columns'] = function(block) {
    var gridTemplateColumns = block.getFieldValue('GRID_TEMPLATE_COLUMNS');
    var code = 'grid-template-columns: ' + gridTemplateColumns + ';\n';
    return code;
};

// Grid-Template-Rows Block
Blockly.Blocks['css_grid_template_rows'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("grid-template-rows")
            .appendField(new Blockly.FieldTextInput("none"), "GRID_TEMPLATE_ROWS");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("Specifies the number and size of rows in a grid layout.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_grid-template-rows.asp");
    }
};

Blockly.CSS['css_grid_template_rows'] = function(block) {
    var gridTemplateRows = block.getFieldValue('GRID_TEMPLATE_ROWS');
    var code = 'grid-template-rows: ' + gridTemplateRows + ';\n';
    return code;
};

// Grid-Template-Areas Block
Blockly.Blocks['css_grid_template_areas'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("grid-template-areas")
            .appendField(new Blockly.FieldTextInput("none"), "GRID_TEMPLATE_AREAS");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("Specifies areas within a grid layout.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_grid-template-areas.asp");
    }
};

Blockly.CSS['css_grid_template_areas'] = function(block) {
    var gridTemplateAreas = block.getFieldValue('GRID_TEMPLATE_AREAS');
    var code = 'grid-template-areas: ' + gridTemplateAreas + ';\n';
    return code;
};

// Grid-Gap Block
Blockly.Blocks['css_grid_gap'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("grid-gap")
            .appendField(new Blockly.FieldTextInput("0px"), "GRID_GAP");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("Specifies the gaps between grid rows and columns.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_grid-gap.asp");
    }
};

Blockly.CSS['css_grid_gap'] = function(block) {
    var gridGap = block.getFieldValue('GRID_GAP');
    var code = 'grid-gap: ' + gridGap + ';\n';
    return code;
};

// Grid-Column-Gap Block
Blockly.Blocks['css_grid_column_gap'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("grid-column-gap")
            .appendField(new Blockly.FieldTextInput("0px"), "GRID_COLUMN_GAP");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("Specifies the gaps between grid columns.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_grid-column-gap.asp");
    }
};

Blockly.CSS['css_grid_column_gap'] = function(block) {
    var gridColumnGap = block.getFieldValue('GRID_COLUMN_GAP');
    var code = 'grid-column-gap: ' + gridColumnGap + ';\n';
    return code;
};

// Grid-Row-Gap Block
Blockly.Blocks['css_grid_row_gap'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("grid-row-gap")
            .appendField(new Blockly.FieldTextInput("0px"), "GRID_ROW_GAP");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("Specifies the gaps between grid rows.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_grid-row-gap.asp");
    }
};

Blockly.CSS['css_grid_row_gap'] = function(block) {
    var gridRowGap = block.getFieldValue('GRID_ROW_GAP');
    var code = 'grid-row-gap: ' + gridRowGap + ';\n';
    return code;
};

// Justify-Items Block
Blockly.Blocks['css_justify_items'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("justify-items")
            .appendField(new Blockly.FieldDropdown([["start", "start"], ["end", "end"], ["center", "center"], ["stretch", "stretch"]]), "JUSTIFY_ITEMS");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("Aligns grid items along the row axis.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_grid-justify-items.asp");
    }
};

Blockly.CSS['css_justify_items'] = function(block) {
    var justifyItems = block.getFieldValue('JUSTIFY_ITEMS');
    var code = 'justify-items: ' + justifyItems + ';\n';
    return code;
};

// Align-Items Block
Blockly.Blocks['css_align_items_grid'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("align-items")
            .appendField(new Blockly.FieldDropdown([["start", "start"], ["end", "end"], ["center", "center"], ["stretch", "stretch"]]), "ALIGN_ITEMS");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("Aligns grid items along the column axis.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_grid-align-items.asp");
    }
};

Blockly.CSS['css_align_items_grid'] = function(block) {
    var alignItems = block.getFieldValue('ALIGN_ITEMS');
    var code = 'align-items: ' + alignItems + ';\n';
    return code;
};

// Justify-Content Block for Grid
Blockly.Blocks['css_justify_content_grid'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("justify-content")
            .appendField(new Blockly.FieldDropdown([["start", "start"], ["end", "end"], ["center", "center"], ["space-between", "space-between"], ["space-around", "space-around"], ["space-evenly", "space-evenly"]]), "JUSTIFY_CONTENT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("Aligns the grid container's items along the row axis when the items do not use all available space.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_grid-justify-content.asp");
    }
};

Blockly.CSS['css_justify_content_grid'] = function(block) {
    var justifyContent = block.getFieldValue('JUSTIFY_CONTENT');
    var code = 'justify-content: ' + justifyContent + ';\n';
    return code;
};

// Align-Content Block for Grid
Blockly.Blocks['css_align_content_grid'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("align-content")
            .appendField(new Blockly.FieldDropdown([["start", "start"], ["end", "end"], ["center", "center"], ["space-between", "space-between"], ["space-around", "space-around"], ["space-evenly", "space-evenly"]]), "ALIGN_CONTENT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("Aligns the grid container's items along the column axis when the items do not use all available space.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_grid-align-content.asp");
    }
};

Blockly.CSS['css_align_content_grid'] = function(block) {
    var alignContent = block.getFieldValue('ALIGN_CONTENT');
    var code = 'align-content: ' + alignContent + ';\n';
    return code;
};

// Grid-Auto-Rows Block
Blockly.Blocks['css_grid_auto_rows'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("grid-auto-rows")
            .appendField(new Blockly.FieldTextInput("auto"), "GRID_AUTO_ROWS");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("Specifies the size of automatically created rows in a grid layout.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_grid-auto-rows.asp");
    }
};

Blockly.CSS['css_grid_auto_rows'] = function(block) {
    var gridAutoRows = block.getFieldValue('GRID_AUTO_ROWS');
    var code = 'grid-auto-rows: ' + gridAutoRows + ';\n';
    return code;
};

// Grid-Auto-Columns Block
Blockly.Blocks['css_grid_auto_columns'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("grid-auto-columns")
            .appendField(new Blockly.FieldTextInput("auto"), "GRID_AUTO_COLUMNS");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("Specifies the size of automatically created columns in a grid layout.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_grid-auto-columns.asp");
    }
};

Blockly.CSS['css_grid_auto_columns'] = function(block) {
    var gridAutoColumns = block.getFieldValue('GRID_AUTO_COLUMNS');
    var code = 'grid-auto-columns: ' + gridAutoColumns + ';\n';
    return code;
};

// Grid-Auto-Flow Block
Blockly.Blocks['css_grid_auto_flow'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("grid-auto-flow")
            .appendField(new Blockly.FieldDropdown([["row", "row"], ["column", "column"], ["dense", "dense"], ["row dense", "row dense"], ["column dense", "column dense"]]), "GRID_AUTO_FLOW");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("Controls how the auto-placement algorithm works in a grid layout.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_grid-auto-flow.asp");
    }
};

Blockly.CSS['css_grid_auto_flow'] = function(block) {
    var gridAutoFlow = block.getFieldValue('GRID_AUTO_FLOW');
    var code = 'grid-auto-flow: ' + gridAutoFlow + ';\n';
    return code;
};

// Grid-Column Block
Blockly.Blocks['css_grid_column'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("grid-column")
            .appendField(new Blockly.FieldTextInput("auto"), "GRID_COLUMN");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("Specifies the size and location of a grid item along the column axis.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_grid-column.asp");
    }
};

Blockly.CSS['css_grid_column'] = function(block) {
    var gridColumn = block.getFieldValue('GRID_COLUMN');
    var code = 'grid-column: ' + gridColumn + ';\n';
    return code;
};

// Grid-Row Block
Blockly.Blocks['css_grid_row'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("grid-row")
            .appendField(new Blockly.FieldTextInput("auto"), "GRID_ROW");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("Specifies the size and location of a grid item along the row axis.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_grid-row.asp");
    }
};

Blockly.CSS['css_grid_row'] = function(block) {
    var gridRow = block.getFieldValue('GRID_ROW');
    var code = 'grid-row: ' + gridRow + ';\n';
    return code;
};

// Grid-Area Block
Blockly.Blocks['css_grid_area'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("grid-area")
            .appendField(new Blockly.FieldTextInput("auto / auto / auto / auto"), "GRID_AREA");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("Specifies the size and location of a grid item within a grid layout.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_grid-area.asp");
    }
};

Blockly.CSS['css_grid_area'] = function(block) {
    var gridArea = block.getFieldValue('GRID_AREA');
    var code = 'grid-area: ' + gridArea + ';\n';
    return code;
};

// Grid-Template Block
Blockly.Blocks['css_grid_template'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("grid-template")
            .appendField(new Blockly.FieldTextInput("none / none"), "GRID_TEMPLATE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("A shorthand property for defining grid-template-rows, grid-template-columns, and grid-template-areas.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_grid-template.asp");
    }
};

Blockly.CSS['css_grid_template'] = function(block) {
    var gridTemplate = block.getFieldValue('GRID_TEMPLATE');
    var code = 'grid-template: ' + gridTemplate + ';\n';
    return code;
};

// Gap Block
Blockly.Blocks['css_gap'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("gap")
            .appendField(new Blockly.FieldTextInput("0px"), "GAP");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(0);
        this.setTooltip("Specifies the gaps between rows and columns in a grid layout.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_gap.asp");
    }
};

Blockly.CSS['css_gap'] = function(block) {
    var gap = block.getFieldValue('GAP');
    var code = 'gap: ' + gap + ';\n';
    return code;
};


/////////////////////////////////////////////////////////////////////////////////
//Shadows section
/* Blocks in this section:
box-shadow
text-shadow */

// Box-Shadow Block
Blockly.Blocks['css_box_shadow'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("box-shadow")
            .appendField(new Blockly.FieldTextInput("0px"), "H_OFFSET")
            .appendField(new Blockly.FieldTextInput("0px"), "V_OFFSET")
            .appendField(new Blockly.FieldTextInput("5px"), "BLUR")
            .appendField(new Blockly.FieldTextInput("0px"), "SPREAD")
            .appendField(new Blockly.FieldColour("#000000"), "COLOR");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(266);
        this.setTooltip("Applies shadow to an element's box.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_box-shadow.asp");
    }
};

Blockly.CSS['css_box_shadow'] = function(block) {
    var hOffset = block.getFieldValue('H_OFFSET');
    var vOffset = block.getFieldValue('V_OFFSET');
    var blur = block.getFieldValue('BLUR');
    var spread = block.getFieldValue('SPREAD');
    var color = block.getFieldValue('COLOR');
    var code = 'box-shadow: ' + hOffset + ' ' + vOffset + ' ' + blur + ' ' + spread + ' ' + color + ';\n';
    return code;
};

// Text-Shadow Block
Blockly.Blocks['css_text_shadow'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("text-shadow")
            .appendField(new Blockly.FieldTextInput("1px"), "H_OFFSET")
            .appendField(new Blockly.FieldTextInput("1px"), "V_OFFSET")
            .appendField(new Blockly.FieldTextInput("2px"), "BLUR")
            .appendField(new Blockly.FieldColour("#000000"), "COLOR");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(266);
        this.setTooltip("Applies shadow to text.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_text-shadow.asp");
    }
};

Blockly.CSS['css_text_shadow'] = function(block) {
    var hOffset = block.getFieldValue('H_OFFSET');
    var vOffset = block.getFieldValue('V_OFFSET');
    var blur = block.getFieldValue('BLUR');
    var color = block.getFieldValue('COLOR');
    var code = 'text-shadow: ' + hOffset + ' ' + vOffset + ' ' + blur + ' ' + color + ';\n';
    return code;
};

///////////////////////////////////////////////////////////////////////
//Borders section
/* Blocks in this section:
border-width
border-style
border-color
border-top
border-right
border-bottom
border-left
border-top-width
border-right-width
border-bottom-width
border-left-width
border-top-style
border-right-style
border-bottom-style
border-left-style
border-top-color
border-right-color
border-bottom-color
border-left-color */

// Border Width Block
Blockly.Blocks['css_border_width'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-width")
            .appendField(new Blockly.FieldTextInput("1px"), "WIDTH");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the width of the border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-width.asp");
    }
};

Blockly.CSS['css_border_width'] = function(block) {
    var width = block.getFieldValue('WIDTH');
    var code = 'border-width: ' + width + ';\n';
    return code;
};

// Border Style Block
Blockly.Blocks['css_border_style'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-style")
            .appendField(new Blockly.FieldDropdown([
                ["none", "none"], 
                ["hidden", "hidden"], 
                ["dotted", "dotted"], 
                ["dashed", "dashed"], 
                ["solid", "solid"], 
                ["double", "double"], 
                ["groove", "groove"], 
                ["ridge", "ridge"], 
                ["inset", "inset"], 
                ["outset", "outset"]
            ]), "STYLE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the style of the border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-style.asp");
    }
};

Blockly.CSS['css_border_style'] = function(block) {
    var style = block.getFieldValue('STYLE');
    var code = 'border-style: ' + style + ';\n';
    return code;
};

// Border Color Block
Blockly.Blocks['css_border_color'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-color")
            .appendField(new Blockly.FieldColour("#000000"), "COLOR");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the color of the border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-color.asp");
    }
};

Blockly.CSS['css_border_color'] = function(block) {
    var color = block.getFieldValue('COLOR');
    var code = 'border-color: ' + color + ';\n';
    return code;
};

// Border Top Block
Blockly.Blocks['css_border_top'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-top")
            .appendField(new Blockly.FieldTextInput("1px"), "WIDTH")
            .appendField(new Blockly.FieldDropdown([
                ["none", "none"], 
                ["hidden", "hidden"], 
                ["dotted", "dotted"], 
                ["dashed", "dashed"], 
                ["solid", "solid"], 
                ["double", "double"], 
                ["groove", "groove"], 
                ["ridge", "ridge"], 
                ["inset", "inset"], 
                ["outset", "outset"]
            ]), "STYLE")
            .appendField(new Blockly.FieldColour("#000000"), "COLOR");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the top border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-top.asp");
    }
};

Blockly.CSS['css_border_top'] = function(block) {
    var width = block.getFieldValue('WIDTH');
    var style = block.getFieldValue('STYLE');
    var color = block.getFieldValue('COLOR');
    var code = 'border-top: ' + width + ' ' + style + ' ' + color + ';\n';
    return code;
};

// Border Right Block
Blockly.Blocks['css_border_right'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-right")
            .appendField(new Blockly.FieldTextInput("1px"), "WIDTH")
            .appendField(new Blockly.FieldDropdown([
                ["none", "none"], 
                ["hidden", "hidden"], 
                ["dotted", "dotted"], 
                ["dashed", "dashed"], 
                ["solid", "solid"], 
                ["double", "double"], 
                ["groove", "groove"], 
                ["ridge", "ridge"], 
                ["inset", "inset"], 
                ["outset", "outset"]
            ]), "STYLE")
            .appendField(new Blockly.FieldColour("#000000"), "COLOR");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the right border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-right.asp");
    }
};

Blockly.CSS['css_border_right'] = function(block) {
    var width = block.getFieldValue('WIDTH');
    var style = block.getFieldValue('STYLE');
    var color = block.getFieldValue('COLOR');
    var code = 'border-right: ' + width + ' ' + style + ' ' + color + ';\n';
    return code;
};

// Border Bottom Block
Blockly.Blocks['css_border_bottom'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-bottom")
            .appendField(new Blockly.FieldTextInput("1px"), "WIDTH")
            .appendField(new Blockly.FieldDropdown([
                ["none", "none"], 
                ["hidden", "hidden"], 
                ["dotted", "dotted"], 
                ["dashed", "dashed"], 
                ["solid", "solid"], 
                ["double", "double"], 
                ["groove", "groove"], 
                ["ridge", "ridge"], 
                ["inset", "inset"], 
                ["outset", "outset"]
            ]), "STYLE")
            .appendField(new Blockly.FieldColour("#000000"), "COLOR");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the bottom border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-bottom.asp");
    }
};

Blockly.CSS['css_border_bottom'] = function(block) {
    var width = block.getFieldValue('WIDTH');
    var style = block.getFieldValue('STYLE');
    var color = block.getFieldValue('COLOR');
    var code = 'border-bottom: ' + width + ' ' + style + ' ' + color + ';\n';
    return code;
};

// Border Left Block
Blockly.Blocks['css_border_left'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-left")
            .appendField(new Blockly.FieldTextInput("1px"), "WIDTH")
            .appendField(new Blockly.FieldDropdown([
                ["none", "none"], 
                ["hidden", "hidden"], 
                ["dotted", "dotted"], 
                ["dashed", "dashed"], 
                ["solid", "solid"], 
                ["double", "double"], 
                ["groove", "groove"], 
                ["ridge", "ridge"], 
                ["inset", "inset"], 
                ["outset", "outset"]
            ]), "STYLE")
            .appendField(new Blockly.FieldColour("#000000"), "COLOR");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the left border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-left.asp");
    }
};

Blockly.CSS['css_border_left'] = function(block) {
    var width = block.getFieldValue('WIDTH');
    var style = block.getFieldValue('STYLE');
    var color = block.getFieldValue('COLOR');
    var code = 'border-left: ' + width + ' ' + style + ' ' + color + ';\n';
    return code;
};

// Border Top Width Block
Blockly.Blocks['css_border_top_width'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-top-width")
            .appendField(new Blockly.FieldTextInput("1px"), "WIDTH");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the width of the top border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-top_width.asp");
    }
};

Blockly.CSS['css_border_top_width'] = function(block) {
    var width = block.getFieldValue('WIDTH');
    var code = 'border-top-width: ' + width + ';\n';
    return code;
};

// Border Right Width Block
Blockly.Blocks['css_border_right_width'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-right-width")
            .appendField(new Blockly.FieldTextInput("1px"), "WIDTH");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the width of the right border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-right_width.asp");
    }
};

Blockly.CSS['css_border_right_width'] = function(block) {
    var width = block.getFieldValue('WIDTH');
    var code = 'border-right-width: ' + width + ';\n';
    return code;
};

// Border Bottom Width Block
Blockly.Blocks['css_border_bottom_width'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-bottom-width")
            .appendField(new Blockly.FieldTextInput("1px"), "WIDTH");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the width of the bottom border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-bottom_width.asp");
    }
};

Blockly.CSS['css_border_bottom_width'] = function(block) {
    var width = block.getFieldValue('WIDTH');
    var code = 'border-bottom-width: ' + width + ';\n';
    return code;
};

// Border Left Width Block
Blockly.Blocks['css_border_left_width'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-left-width")
            .appendField(new Blockly.FieldTextInput("1px"), "WIDTH");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the width of the left border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-left_width.asp");
    }
};

Blockly.CSS['css_border_left_width'] = function(block) {
    var width = block.getFieldValue('WIDTH');
    var code = 'border-left-width: ' + width + ';\n';
    return code;
};

// Border Top Style Block
Blockly.Blocks['css_border_top_style'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-top-style")
            .appendField(new Blockly.FieldDropdown([
                ["none", "none"], 
                ["hidden", "hidden"], 
                ["dotted", "dotted"], 
                ["dashed", "dashed"], 
                ["solid", "solid"], 
                ["double", "double"], 
                ["groove", "groove"], 
                ["ridge", "ridge"], 
                ["inset", "inset"], 
                ["outset", "outset"]
            ]), "STYLE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the style of the top border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-top_style.asp");
    }
};

Blockly.CSS['css_border_top_style'] = function(block) {
    var style = block.getFieldValue('STYLE');
    var code = 'border-top-style: ' + style + ';\n';
    return code;
};

// Border Right Style Block
Blockly.Blocks['css_border_right_style'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-right-style")
            .appendField(new Blockly.FieldDropdown([
                ["none", "none"], 
                ["hidden", "hidden"], 
                ["dotted", "dotted"], 
                ["dashed", "dashed"], 
                ["solid", "solid"], 
                ["double", "double"], 
                ["groove", "groove"], 
                ["ridge", "ridge"], 
                ["inset", "inset"], 
                ["outset", "outset"]
            ]), "STYLE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the style of the right border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-right_style.asp");
    }
};

Blockly.CSS['css_border_right_style'] = function(block) {
    var style = block.getFieldValue('STYLE');
    var code = 'border-right-style: ' + style + ';\n';
    return code;
};

// Border Bottom Style Block
Blockly.Blocks['css_border_bottom_style'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-bottom-style")
            .appendField(new Blockly.FieldDropdown([
                ["none", "none"], 
                ["hidden", "hidden"], 
                ["dotted", "dotted"], 
                ["dashed", "dashed"], 
                ["solid", "solid"], 
                ["double", "double"], 
                ["groove", "groove"], 
                ["ridge", "ridge"], 
                ["inset", "inset"], 
                ["outset", "outset"]
            ]), "STYLE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the style of the bottom border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-bottom_style.asp");
    }
};

Blockly.CSS['css_border_bottom_style'] = function(block) {
    var style = block.getFieldValue('STYLE');
    var code = 'border-bottom-style: ' + style + ';\n';
    return code;
};

// Border Left Style Block
Blockly.Blocks['css_border_left_style'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-left-style")
            .appendField(new Blockly.FieldDropdown([
                ["none", "none"], 
                ["hidden", "hidden"], 
                ["dotted", "dotted"], 
                ["dashed", "dashed"], 
                ["solid", "solid"], 
                ["double", "double"], 
                ["groove", "groove"], 
                ["ridge", "ridge"], 
                ["inset", "inset"], 
                ["outset", "outset"]
            ]), "STYLE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the style of the left border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-left_style.asp");
    }
};

Blockly.CSS['css_border_left_style'] = function(block) {
    var style = block.getFieldValue('STYLE');
    var code = 'border-left-style: ' + style + ';\n';
    return code;
};

// Border Top Color Block
Blockly.Blocks['css_border_top_color'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-top-color")
            .appendField(new Blockly.FieldColour("#000000"), "COLOR");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the color of the top border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-top_color.asp");
    }
};

Blockly.CSS['css_border_top_color'] = function(block) {
    var color = block.getFieldValue('COLOR');
    var code = 'border-top-color: ' + color + ';\n';
    return code;
};

// Border Right Color Block
Blockly.Blocks['css_border_right_color'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-right-color")
            .appendField(new Blockly.FieldColour("#000000"), "COLOR");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the color of the right border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-right_color.asp");
    }
};

Blockly.CSS['css_border_right_color'] = function(block) {
    var color = block.getFieldValue('COLOR');
    var code = 'border-right-color: ' + color + ';\n';
    return code;
};

// Border Bottom Color Block
Blockly.Blocks['css_border_bottom_color'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-bottom-color")
            .appendField(new Blockly.FieldColour("#000000"), "COLOR");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the color of the bottom border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-bottom_color.asp");
    }
};

Blockly.CSS['css_border_bottom_color'] = function(block) {
    var color = block.getFieldValue('COLOR');
    var code = 'border-bottom-color: ' + color + ';\n';
    return code;
};

// Border Left Color Block
Blockly.Blocks['css_border_left_color'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-left-color")
            .appendField(new Blockly.FieldColour("#000000"), "COLOR");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(184);
        this.setTooltip("Sets the color of the left border.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-left_color.asp");
    }
};

Blockly.CSS['css_border_left_color'] = function(block) {
    var color = block.getFieldValue('COLOR');
    var code = 'border-left-color: ' + color + ';\n';
    return code;
};

//////////////////////////////////////////////////////////////////////////////
//Animations and Transitions section
/* Blocks in this section:
transition
transition-property
transition-duration
transition-timing-function
transition-delay
animation
animation-name
animation-duration
animation-timing-function
animation-delay
animation-iteration-count
animation-direction
animation-fill-mode
animation-play-state */

// Transition Block
Blockly.Blocks['css_transition'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("transition")
            .appendField(new Blockly.FieldTextInput("all 0.3s ease"), "TRANSITION");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(82);
        this.setTooltip("Sets the transition effect for changing CSS properties.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_transition.asp");
    }
};

Blockly.CSS['css_transition'] = function(block) {
    var transition = block.getFieldValue('TRANSITION');
    var code = 'transition: ' + transition + ';\n';
    return code;
};

// Transition Property Block
Blockly.Blocks['css_transition_property'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("transition-property")
            .appendField(new Blockly.FieldTextInput("all"), "PROPERTY");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(82);
        this.setTooltip("Specifies the name of the CSS property for the transition effect.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_transition-property.asp");
    }
};

Blockly.CSS['css_transition_property'] = function(block) {
    var property = block.getFieldValue('PROPERTY');
    var code = 'transition-property: ' + property + ';\n';
    return code;
};

// Transition Duration Block
Blockly.Blocks['css_transition_duration'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("transition-duration")
            .appendField(new Blockly.FieldTextInput("0.3s"), "DURATION");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(82);
        this.setTooltip("Specifies the duration of the transition effect.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_transition-duration.asp");
    }
};

Blockly.CSS['css_transition_duration'] = function(block) {
    var duration = block.getFieldValue('DURATION');
    var code = 'transition-duration: ' + duration + ';\n';
    return code;
};

// Transition Timing Function Block
Blockly.Blocks['css_transition_timing_function'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("transition-timing-function")
            .appendField(new Blockly.FieldDropdown([
                ["ease", "ease"], 
                ["linear", "linear"], 
                ["ease-in", "ease-in"], 
                ["ease-out", "ease-out"], 
                ["ease-in-out", "ease-in-out"], 
                ["step-start", "step-start"], 
                ["step-end", "step-end"], 
                ["steps", "steps"], 
                ["cubic-bezier", "cubic-bezier"]
            ]), "FUNCTION");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(82);
        this.setTooltip("Specifies the speed curve of the transition effect.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp");
    }
};

Blockly.CSS['css_transition_timing_function'] = function(block) {
    var func = block.getFieldValue('FUNCTION');
    var code = 'transition-timing-function: ' + func + ';\n';
    return code;
};

// Transition Delay Block
Blockly.Blocks['css_transition_delay'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("transition-delay")
            .appendField(new Blockly.FieldTextInput("0s"), "DELAY");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(82);
        this.setTooltip("Specifies the delay before the transition effect starts.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_transition-delay.asp");
    }
};

Blockly.CSS['css_transition_delay'] = function(block) {
    var delay = block.getFieldValue('DELAY');
    var code = 'transition-delay: ' + delay + ';\n';
    return code;
};

// Animation Block
Blockly.Blocks['css_animation'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("animation")
            .appendField(new Blockly.FieldTextInput("name 1s ease 0s 1 normal none"), "ANIMATION");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(82);
        this.setTooltip("Sets the animation properties.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_animation.asp");
    }
};

Blockly.CSS['css_animation'] = function(block) {
    var animation = block.getFieldValue('ANIMATION');
    var code = 'animation: ' + animation + ';\n';
    return code;
};

// Animation Name Block
Blockly.Blocks['css_animation_name'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("animation-name")
            .appendField(new Blockly.FieldTextInput("none"), "NAME");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(82);
        this.setTooltip("Specifies the name of the @keyframes animation.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_animation-name.asp");
    }
};

Blockly.CSS['css_animation_name'] = function(block) {
    var name = block.getFieldValue('NAME');
    var code = 'animation-name: ' + name + ';\n';
    return code;
};

// Animation Duration Block
Blockly.Blocks['css_animation_duration'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("animation-duration")
            .appendField(new Blockly.FieldTextInput("1s"), "DURATION");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(82);
        this.setTooltip("Specifies the duration of the animation.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_animation-duration.asp");
    }
};

Blockly.CSS['css_animation_duration'] = function(block) {
    var duration = block.getFieldValue('DURATION');
    var code = 'animation-duration: ' + duration + ';\n';
    return code;
};

// Animation Timing Function Block
Blockly.Blocks['css_animation_timing_function'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("animation-timing-function")
            .appendField(new Blockly.FieldDropdown([
                ["ease", "ease"], 
                ["linear", "linear"], 
                ["ease-in", "ease-in"], 
                ["ease-out", "ease-out"], 
                ["ease-in-out", "ease-in-out"], 
                ["step-start", "step-start"], 
                ["step-end", "step-end"], 
                ["steps", "steps"], 
                ["cubic-bezier", "cubic-bezier"]
            ]), "FUNCTION");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(82);
        this.setTooltip("Specifies the speed curve of the animation.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp");
    }
};

Blockly.CSS['css_animation_timing_function'] = function(block) {
    var func = block.getFieldValue('FUNCTION');
    var code = 'animation-timing-function: ' + func + ';\n';
    return code;
};

// Animation Delay Block
Blockly.Blocks['css_animation_delay'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("animation-delay")
            .appendField(new Blockly.FieldTextInput("0s"), "DELAY");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(82);
        this.setTooltip("Specifies the delay before the animation starts.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_animation-delay.asp");
    }
};

Blockly.CSS['css_animation_delay'] = function(block) {
    var delay = block.getFieldValue('DELAY');
    var code = 'animation-delay: ' + delay + ';\n';
    return code;
};

// Animation Iteration Count Block
Blockly.Blocks['css_animation_iteration_count'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("animation-iteration-count")
            .appendField(new Blockly.FieldTextInput("1"), "COUNT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(82);
        this.setTooltip("Specifies the number of times the animation should be played.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_animation-iteration-count.asp");
    }
};

Blockly.CSS['css_animation_iteration_count'] = function(block) {
    var count = block.getFieldValue('COUNT');
    var code = 'animation-iteration-count: ' + count + ';\n';
    return code;
};

// Animation Direction Block
Blockly.Blocks['css_animation_direction'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("animation-direction")
            .appendField(new Blockly.FieldDropdown([
                ["normal", "normal"], 
                ["reverse", "reverse"], 
                ["alternate", "alternate"], 
                ["alternate-reverse", "alternate-reverse"]
            ]), "DIRECTION");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(82);
        this.setTooltip("Specifies the direction of the animation.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_animation-direction.asp");
    }
};

Blockly.CSS['css_animation_direction'] = function(block) {
    var direction = block.getFieldValue('DIRECTION');
    var code = 'animation-direction: ' + direction + ';\n';
    return code;
};

// Animation Fill Mode Block
Blockly.Blocks['css_animation_fill_mode'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("animation-fill-mode")
            .appendField(new Blockly.FieldDropdown([
                ["none", "none"], 
                ["forwards", "forwards"], 
                ["backwards", "backwards"], 
                ["both", "both"]
            ]), "MODE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(82);
        this.setTooltip("Specifies the fill mode of the animation.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_animation-fill-mode.asp");
    }
};

Blockly.CSS['css_animation_fill_mode'] = function(block) {
    var mode = block.getFieldValue('MODE');
    var code = 'animation-fill-mode: ' + mode + ';\n';
    return code;
};

// Animation Play State Block
Blockly.Blocks['css_animation_play_state'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("animation-play-state")
            .appendField(new Blockly.FieldDropdown([
                ["running", "running"], 
                ["paused", "paused"]
            ]), "STATE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(82);
        this.setTooltip("Specifies whether the animation is running or paused.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_animation-play-state.asp");
    }
};

Blockly.CSS['css_animation_play_state'] = function(block) {
    var state = block.getFieldValue('STATE');
    var code = 'animation-play-state: ' + state + ';\n';
    return code;
};


////////////////////////////////////////////////////////////////////
//Lists section
/* Blocks in this section: 
list-style
list-style-type
list-style-position
list-style-image */

// List Style Block
Blockly.Blocks['css_list_style'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("list-style")
            .appendField(new Blockly.FieldTextInput("disc outside none"), "STYLE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(242);
        this.setTooltip("Sets all the list properties in one declaration.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_list-style.asp");
    }
};

Blockly.CSS['css_list_style'] = function(block) {
    var style = block.getFieldValue('STYLE');
    var code = 'list-style: ' + style + ';\n';
    return code;
};

// List Style Type Block
Blockly.Blocks['css_list_style_type'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("list-style-type")
            .appendField(new Blockly.FieldDropdown([
                ["disc", "disc"], 
                ["circle", "circle"], 
                ["square", "square"], 
                ["decimal", "decimal"], 
                ["decimal-leading-zero", "decimal-leading-zero"], 
                ["lower-roman", "lower-roman"], 
                ["upper-roman", "upper-roman"], 
                ["lower-greek", "lower-greek"], 
                ["lower-latin", "lower-latin"], 
                ["upper-latin", "upper-latin"], 
                ["armenian", "armenian"], 
                ["georgian", "georgian"], 
                ["lower-alpha", "lower-alpha"], 
                ["upper-alpha", "upper-alpha"], 
                ["none", "none"]
            ]), "TYPE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(242);
        this.setTooltip("Specifies the type of list-item marker.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_list-style-type.asp");
    }
};

Blockly.CSS['css_list_style_type'] = function(block) {
    var type = block.getFieldValue('TYPE');
    var code = 'list-style-type: ' + type + ';\n';
    return code;
};

// List Style Position Block
Blockly.Blocks['css_list_style_position'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("list-style-position")
            .appendField(new Blockly.FieldDropdown([
                ["inside", "inside"], 
                ["outside", "outside"]
            ]), "POSITION");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(242);
        this.setTooltip("Specifies the position of the list-item marker.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_list-style-position.asp");
    }
};

Blockly.CSS['css_list_style_position'] = function(block) {
    var position = block.getFieldValue('POSITION');
    var code = 'list-style-position: ' + position + ';\n';
    return code;
};

// List Style Image Block
Blockly.Blocks['css_list_style_image'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("list-style-image")
            .appendField(new Blockly.FieldTextInput("none"), "IMAGE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(242);
        this.setTooltip("Specifies an image as the list-item marker.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_list-style-image.asp");
    }
};

Blockly.CSS['css_list_style_image'] = function(block) {
    var image = block.getFieldValue('IMAGE');
    var code = 'list-style-image: ' + image + ';\n';
    return code;
};

////////////////////////////////////////////////////////////////////////
//Tables section
/* Blocks in this section:
border-collapse
border-spacing
table-layout
caption-side
empty-cells */

// Border Collapse Block
Blockly.Blocks['css_border_collapse'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-collapse")
            .appendField(new Blockly.FieldDropdown([
                ["collapse", "collapse"], 
                ["separate", "separate"]
            ]), "COLLAPSE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(310);
        this.setTooltip("Sets whether the table borders should be collapsed into a single border or separated.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-collapse.asp");
    }
};

Blockly.CSS['css_border_collapse'] = function(block) {
    var collapse = block.getFieldValue('COLLAPSE');
    var code = 'border-collapse: ' + collapse + ';\n';
    return code;
};

// Border Spacing Block
Blockly.Blocks['css_border_spacing'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("border-spacing")
            .appendField(new Blockly.FieldTextInput("0px"), "SPACING");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(310);
        this.setTooltip("Sets the distance between the borders of adjacent cells.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_border-spacing.asp");
    }
};

Blockly.CSS['css_border_spacing'] = function(block) {
    var spacing = block.getFieldValue('SPACING');
    var code = 'border-spacing: ' + spacing + ';\n';
    return code;
};

// Table Layout Block
Blockly.Blocks['css_table_layout'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("table-layout")
            .appendField(new Blockly.FieldDropdown([
                ["auto", "auto"], 
                ["fixed", "fixed"]
            ]), "LAYOUT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(310);
        this.setTooltip("Sets the table layout algorithm to be used for a table.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_table-layout.asp");
    }
};

Blockly.CSS['css_table_layout'] = function(block) {
    var layout = block.getFieldValue('LAYOUT');
    var code = 'table-layout: ' + layout + ';\n';
    return code;
};

// Caption Side Block
Blockly.Blocks['css_caption_side'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("caption-side")
            .appendField(new Blockly.FieldDropdown([
                ["top", "top"], 
                ["bottom", "bottom"]
            ]), "SIDE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(310);
        this.setTooltip("Specifies the placement of the table caption.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_caption-side.asp");
    }
};

Blockly.CSS['css_caption_side'] = function(block) {
    var side = block.getFieldValue('SIDE');
    var code = 'caption-side: ' + side + ';\n';
    return code;
};

// Empty Cells Block
Blockly.Blocks['css_empty_cells'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("empty-cells")
            .appendField(new Blockly.FieldDropdown([
                ["show", "show"], 
                ["hide", "hide"]
            ]), "CELLS");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(310);
        this.setTooltip("Specifies whether to show or hide borders and backgrounds of empty cells.");
        this.setHelpUrl("https://www.w3schools.com/cssref/pr_empty-cells.asp");
    }
};

Blockly.CSS['css_empty_cells'] = function(block) {
    var cells = block.getFieldValue('CELLS');
    var code = 'empty-cells: ' + cells + ';\n';
    return code;
};
 
//////////////////////////////////////////////////////////////////////
//Multi-column Layout section
/* Blocks in this section:
column-count
column-gap
column-rule
column-rule-width
column-rule-style
column-rule-color
column-span
column-width
columns
column-fill */

// Column Count Block
Blockly.Blocks['css_column_count'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("column-count")
            .appendField(new Blockly.FieldNumber(1, 1), "COUNT");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(104);
        this.setTooltip("Specifies the number of columns an element should be divided into.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_column-count.asp");
    }
};

Blockly.CSS['css_column_count'] = function(block) {
    var count = block.getFieldValue('COUNT');
    var code = 'column-count: ' + count + ';\n';
    return code;
};

// Column Gap Block
Blockly.Blocks['css_column_gap'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("column-gap")
            .appendField(new Blockly.FieldTextInput("normal"), "GAP");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(104);
        this.setTooltip("Specifies the gap between the columns.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_column-gap.asp");
    }
};

Blockly.CSS['css_column_gap'] = function(block) {
    var gap = block.getFieldValue('GAP');
    var code = 'column-gap: ' + gap + ';\n';
    return code;
};

// Column Rule Block
Blockly.Blocks['css_column_rule'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("column-rule")
            .appendField(new Blockly.FieldTextInput("1px solid black"), "RULE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(104);
        this.setTooltip("Sets all the column rule properties in one declaration.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_column-rule.asp");
    }
};

Blockly.CSS['css_column_rule'] = function(block) {
    var rule = block.getFieldValue('RULE');
    var code = 'column-rule: ' + rule + ';\n';
    return code;
};

// Column Rule Width Block
Blockly.Blocks['css_column_rule_width'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("column-rule-width")
            .appendField(new Blockly.FieldTextInput("1px"), "WIDTH");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(104);
        this.setTooltip("Specifies the width of the rule between columns.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_column-rule-width.asp");
    }
};

Blockly.CSS['css_column_rule_width'] = function(block) {
    var width = block.getFieldValue('WIDTH');
    var code = 'column-rule-width: ' + width + ';\n';
    return code;
};

// Column Rule Style Block
Blockly.Blocks['css_column_rule_style'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("column-rule-style")
            .appendField(new Blockly.FieldDropdown([
                ["none", "none"], 
                ["hidden", "hidden"], 
                ["dotted", "dotted"], 
                ["dashed", "dashed"], 
                ["solid", "solid"], 
                ["double", "double"], 
                ["groove", "groove"], 
                ["ridge", "ridge"], 
                ["inset", "inset"], 
                ["outset", "outset"]
            ]), "STYLE");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(104);
        this.setTooltip("Specifies the style of the rule between columns.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_column-rule-style.asp");
    }
};

Blockly.CSS['css_column_rule_style'] = function(block) {
    var style = block.getFieldValue('STYLE');
    var code = 'column-rule-style: ' + style + ';\n';
    return code;
};

// Column Rule Color Block
Blockly.Blocks['css_column_rule_color'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("column-rule-color")
            .appendField(new Blockly.FieldColour("#000000"), "COLOR");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(104);
        this.setTooltip("Specifies the color of the rule between columns.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_column-rule-color.asp");
    }
};

Blockly.CSS['css_column_rule_color'] = function(block) {
    var color = block.getFieldValue('COLOR');
    var code = 'column-rule-color: ' + color + ';\n';
    return code;
};

// Column Span Block
Blockly.Blocks['css_column_span'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("column-span")
            .appendField(new Blockly.FieldDropdown([
                ["none", "none"], 
                ["all", "all"]
            ]), "SPAN");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(104);
        this.setTooltip("Specifies how many columns an element should span across.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_column-span.asp");
    }
};

Blockly.CSS['css_column_span'] = function(block) {
    var span = block.getFieldValue('SPAN');
    var code = 'column-span: ' + span + ';\n';
    return code;
};

// Column Width Block
Blockly.Blocks['css_column_width'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("column-width")
            .appendField(new Blockly.FieldTextInput("auto"), "WIDTH");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(104);
        this.setTooltip("Specifies the width of the columns.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_column-width.asp");
    }
};

Blockly.CSS['css_column_width'] = function(block) {
    var width = block.getFieldValue('WIDTH');
    var code = 'column-width: ' + width + ';\n';
    return code;
};

// Columns Block
Blockly.Blocks['css_columns'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("columns")
            .appendField(new Blockly.FieldTextInput("auto auto"), "COLUMNS");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(104);
        this.setTooltip("Sets the number of columns and the width of the columns in one declaration.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_columns.asp");
    }
};

Blockly.CSS['css_columns'] = function(block) {
    var columns = block.getFieldValue('COLUMNS');
    var code = 'columns: ' + columns + ';\n';
    return code;
};

// Column Fill Block
Blockly.Blocks['css_column_fill'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("column-fill")
            .appendField(new Blockly.FieldDropdown([
                ["balance", "balance"], 
                ["auto", "auto"]
            ]), "FILL");
        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");
        this.setColour(104);
        this.setTooltip("Specifies how to fill columns.");
        this.setHelpUrl("https://www.w3schools.com/cssref/css3_pr_column-fill.asp");
    }
};

Blockly.CSS['css_column_fill'] = function(block) {
    var fill = block.getFieldValue('FILL');
    var code = 'column-fill: ' + fill + ';\n';
    return code;
};
