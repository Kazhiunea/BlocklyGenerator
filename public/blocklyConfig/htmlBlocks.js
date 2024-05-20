//Aside - obsolete with CSS implemented
Blockly.Blocks['aside'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Aside");
        this.appendDummyInput()
            .appendField(new Blockly.FieldLabelSerializable("Width:"), "")
            .appendField(new Blockly.FieldNumber(0, 0, 100), "width")
            .appendField("%");
        this.appendDummyInput()
            .appendField("Position:")
            .appendField(new Blockly.FieldDropdown([["Left", "Left"], ["Right", "Right"]]), "position");
        this.appendDummyInput()
            .appendField("Background colour:")
            .appendField(new Blockly.FieldColour("#000000"), "colour");
        this.appendStatementInput("NAME")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("The <aside> tag defines some content aside from the content it is placed in.");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_aside.asp");
    }
};

//Text effects:
Blockly.Blocks['textWithStyle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Text with style");
        this.appendDummyInput()
            .appendField("Text style")
            .appendField(new Blockly.FieldDropdown([["Bold", "bold"], ["Italic", "italic"], ["Underline", "underline"], ["Strike-through", "strikethrough"], ["Subscription", "subscribe"], ["Superscription", "superscribe"]]), "formating");
        this.appendDummyInput()
            .appendField("Text colour")
            .appendField(new Blockly.FieldColour("#000000"), "colour");
        this.appendDummyInput()
            .appendField("Text:")
            .appendField(new Blockly.FieldTextInput(" "), "INPUT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Various style options for text");
        this.setHelpUrl("");
    }
};




Blockly.HTML = new Blockly.Generator('HTML');

// Create the _blockToCode dictionary for HTML blocks
Blockly.HTML._blockToCode = {};

Blockly.HTML.init = function (workspace) {
    // Initialize the HTML code generation.
};

Blockly.HTML.finish = function (code) {
    return code;
};

Blockly.HTML.scrub_ = function (block, code) {
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = Blockly.HTML.blockToCode(nextBlock);
    return code + nextCode;
};





Blockly.HTML['aside'] = function (block) {
    var width = block.getFieldValue('width');
    var position = block.getFieldValue('position');
    var colour = block.getFieldValue('colour');
    var statements_content = Blockly.HTML.statementToCode(block, 'NAME');
    var code = '<aside style="width:' + width + '%; float:' + position + '; background-color:' + colour + ';">\n' + statements_content + '</aside>\n';
    return code;
};





Blockly.HTML['textWithStyle'] = function (block) {
    var formating = block.getFieldValue('formating');
    var colour = block.getFieldValue('colour');
    var text = block.getFieldValue('INPUT');
    var style = '';

    if (formating === 'bold') {
        style += 'font-weight:bold;';
    } else if (formating === 'italic') {
        style += 'font-style:italic;';
    } else if (formating === 'underline') {
        style += 'text-decoration:underline;';
    } else if (formating === 'strikethrough') {
        style += 'text-decoration:line-through;';
    } else if (formating === 'subscribe') {
        text = '<sub>' + text + '</sub>';
    } else if (formating === 'superscribe') {
        text = '<sup>' + text + '</sup>';
    }

    if (colour) {
        style += 'color:' + colour + ';';
    }

    var code = '<span style="' + style + '">' + text + '</span>\n';
    return code;
};



Blockly.Blocks['image'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Image")
            .appendField(new Blockly.FieldTextInput("URL"), "IMAGE")
            .appendField("or")
            .appendField(new Blockly.FieldTextInput("alternative text"), "ALT");
        this.appendDummyInput()
            .appendField("ID")
            .appendField(new Blockly.FieldTextInput(""), "ID");
        this.appendDummyInput()
            .appendField("Class")
            .appendField(new Blockly.FieldTextInput(""), "CLASS");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(310);
        this.setTooltip("The <img> tag is used to embed an image in an HTML page.");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_img.asp");
    }
};

Blockly.HTML['image'] = function (block) {
    var imageUrl = block.getFieldValue('IMAGE');
    var altText = block.getFieldValue('ALT');
    var id = block.getFieldValue('ID');
    var className = block.getFieldValue('CLASS');

    var idAttribute = id ? ' id="' + id + '"' : '';
    var classAttribute = className ? ' class="' + className + '"' : '';

    var code = '<img src="' + imageUrl + '" alt="' + altText + '"' + idAttribute + classAttribute + '>';
    return code;
};

Blockly.Blocks['body'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Body");
        this.appendDummyInput()
            .appendField("ID")
            .appendField(new Blockly.FieldTextInput(""), "ID");
        this.appendDummyInput()
            .appendField("Class")
            .appendField(new Blockly.FieldTextInput(""), "CLASS");
        this.appendStatementInput("content")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("The <body> tag defines the document's body.");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_body.asp");
    }
};

Blockly.HTML['body'] = function (block) {
    var statements_content = Blockly.HTML.statementToCode(block, 'content');
    var id = block.getFieldValue('ID');
    var className = block.getFieldValue('CLASS');
    var idAttribute = id ? ' id="' + id + '"' : '';
    var classAttribute = className ? ' class="' + className + '"' : '';
    var code = '<body' + idAttribute + classAttribute + '>\n' + statements_content + '</body>\n';
    return code;
};

//No longer needed when this is by default written and there can only be one of this
Blockly.Blocks['document'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Document");
        this.appendDummyInput()
            .appendField("ID")
            .appendField(new Blockly.FieldTextInput(""), "ID");
        this.appendDummyInput()
            .appendField("Class")
            .appendField(new Blockly.FieldTextInput(""), "CLASS");
        this.appendStatementInput("content")
            .setCheck(null);
        this.setColour(0);
        this.setTooltip("The <html> tag represents the root of an HTML document.");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_html.asp");
    }
};

Blockly.HTML['document'] = function (block) {
    var statements_content = Blockly.HTML.statementToCode(block, 'content');
    var id = block.getFieldValue('ID');
    var className = block.getFieldValue('CLASS');
    var idAttribute = id ? ' id="' + id + '"' : '';
    var classAttribute = className ? ' class="' + className + '"' : '';
    var code = '<!DOCTYPE html>\n<html' + idAttribute + classAttribute + '>\n' + statements_content + '</html>\n';
    return code;
};

//No longer needed when this is by default written and there can only be one of this
Blockly.Blocks['header'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Header");
        this.appendDummyInput()
            .appendField("ID")
            .appendField(new Blockly.FieldTextInput(""), "ID");
        this.appendDummyInput()
            .appendField("Class")
            .appendField(new Blockly.FieldTextInput(""), "CLASS");
        this.appendStatementInput("content")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("The <head> element is a container for metadata");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_head.asp");
    }
};

Blockly.HTML['header'] = function (block) {
    var statements_content = Blockly.HTML.statementToCode(block, 'content');
    var id = block.getFieldValue('ID');
    var className = block.getFieldValue('CLASS');
    var idAttribute = id ? ' id="' + id + '"' : '';
    var classAttribute = className ? ' class="' + className + '"' : '';
    var code = '<header' + idAttribute + classAttribute + '>\n' + statements_content + '</header>\n';
    return code;
};

Blockly.Blocks['paragraph'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Paragraph");
        this.appendDummyInput()
            .appendField("ID")
            .appendField(new Blockly.FieldTextInput(""), "ID");
        this.appendDummyInput()
            .appendField("Class")
            .appendField(new Blockly.FieldTextInput(""), "CLASS");
        this.appendStatementInput("content")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("The <p> tag defines a paragraph.");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_p.asp");
    }
};

Blockly.HTML['paragraph'] = function (block) {
    var statements_content = Blockly.HTML.statementToCode(block, 'content');
    var id = block.getFieldValue('ID');
    var className = block.getFieldValue('CLASS');
    var idAttribute = id ? ' id="' + id + '"' : '';
    var classAttribute = className ? ' class="' + className + '"' : '';
    var code = '<p' + idAttribute + classAttribute + '>\n' + statements_content + '</p>\n';
    return code;
};

Blockly.Blocks['text'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Text")
            .appendField(new Blockly.FieldTextInput(""), "content");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("A text field");
        this.setHelpUrl("");
    }
};

Blockly.HTML['text'] = function (block) {
    var text = block.getFieldValue('content');
    var code = text + '\n';
    return code;
};

Blockly.Blocks['title'] = {
    init: function () {
        this.appendStatementInput("content")
            .setCheck(null)
            .appendField("Title");
        this.appendDummyInput()
            .appendField("ID")
            .appendField(new Blockly.FieldTextInput(""), "ID");
        this.appendDummyInput()
            .appendField("Class")
            .appendField(new Blockly.FieldTextInput(""), "CLASS");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("The <title> tag defines the title of the document.");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_title.asp");
    }
};

Blockly.HTML['title'] = function (block) {
    var statements_content = Blockly.HTML.statementToCode(block, 'content');
    var id = block.getFieldValue('ID');
    var className = block.getFieldValue('CLASS');
    var idAttribute = id ? ' id="' + id + '"' : '';
    var classAttribute = className ? ' class="' + className + '"' : '';
    var code = '<title' + idAttribute + classAttribute + '>\n' + statements_content + '</title>\n';
    return code;
};



Blockly.Blocks['unorderedList'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Unordered List");
        this.appendDummyInput()
            .appendField("ID")
            .appendField(new Blockly.FieldTextInput(""), "ID");
        this.appendDummyInput()
            .appendField("Class")
            .appendField(new Blockly.FieldTextInput(""), "CLASS");
        this.appendStatementInput("content")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("The <ul> tag defines an unordered (bulleted) list.");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_ul.asp");
    }
};

Blockly.HTML['unorderedList'] = function (block) {
    var statements_content = Blockly.HTML.statementToCode(block, 'content');
    var id = block.getFieldValue('ID');
    var className = block.getFieldValue('CLASS');
    var idAttribute = id ? ' id="' + id + '"' : '';
    var classAttribute = className ? ' class="' + className + '"' : '';
    var code = '<ul' + idAttribute + classAttribute + '>\n' + statements_content + '</ul>\n';
    return code;
};

Blockly.Blocks['newline'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("New Line");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("The <br> tag inserts a single line break.");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_br.asp");
    }
};

Blockly.HTML['newline'] = function (block) {
    var code = '<br>\n';
    return code;
};

Blockly.Blocks['heading'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Heading");
        this.appendDummyInput()
            .appendField("Heading style:")
            .appendField(new Blockly.FieldDropdown([
                ["Heading 1", "h1"],
                ["Heading 2", "h2"],
                ["Heading 3", "h3"],
                ["Heading 4", "h4"],
                ["Heading 5", "h5"],
                ["Heading 6", "h6"]
            ]), "heading");
        this.appendDummyInput()
            .appendField("Text:")
            .appendField(new Blockly.FieldTextInput(" "), "NAME");
        this.appendDummyInput()
            .appendField("ID:")
            .appendField(new Blockly.FieldTextInput(""), "ID");
        this.appendDummyInput()
            .appendField("Class:")
            .appendField(new Blockly.FieldTextInput(""), "CLASS");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("The <h1> to <h6> tags are used to define HTML headings.");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_hn.asp");
    }
};

Blockly.HTML['heading'] = function (block) {
    var heading = block.getFieldValue('heading');
    var text = block.getFieldValue('NAME');
    var id = block.getFieldValue('ID');
    var className = block.getFieldValue('CLASS');
    var idAttribute = id ? ' id="' + id + '"' : '';
    var classAttribute = className ? ' class="' + className + '"' : '';
    var code = '<' + heading + idAttribute + classAttribute + '>' + text + '</' + heading + '>\n';
    return code;
};

Blockly.Blocks['hyperlink'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Hyperlink");
        this.appendStatementInput("NAME")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("Link")
            .appendField(new Blockly.FieldTextInput(""), "link");
        this.appendDummyInput()
            .appendField("ID:")
            .appendField(new Blockly.FieldTextInput(""), "ID");
        this.appendDummyInput()
            .appendField("Class:")
            .appendField(new Blockly.FieldTextInput(""), "CLASS");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(310);
        this.setTooltip("The <a> tag defines a hyperlink, which is used to link from one page to another.");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_a.asp");
    }
};

Blockly.HTML['hyperlink'] = function (block) {
    var link = block.getFieldValue('link');
    var id = block.getFieldValue('ID');
    var className = block.getFieldValue('CLASS');
    var statements_content = Blockly.HTML.statementToCode(block, 'NAME');
    var idAttribute = id ? ' id="' + id + '"' : '';
    var classAttribute = className ? ' class="' + className + '"' : '';
    var code = '<a href="' + link + '"' + idAttribute + classAttribute + '>\n' + statements_content + '</a>\n';
    return code;
};

Blockly.Blocks['table'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Table");
        this.appendDummyInput()
            .appendField("Border size:")
            .appendField(new Blockly.FieldNumber(0, 0, 10), "borderSize");
        this.appendDummyInput()
            .appendField("Border colour")
            .appendField(new Blockly.FieldColour("#000000"), "colour");
        this.appendDummyInput()
            .appendField("ID")
            .appendField(new Blockly.FieldTextInput(""), "ID");
        this.appendDummyInput()
            .appendField("Class")
            .appendField(new Blockly.FieldTextInput(""), "CLASS");
        this.appendStatementInput("content")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip("The <table> tag defines an HTML table.");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_table.asp");
    }
};

Blockly.HTML['table'] = function (block) {
    var borderSize = block.getFieldValue('borderSize');
    var colour = block.getFieldValue('colour');
    var id = block.getFieldValue('ID');
    var className = block.getFieldValue('CLASS');
    var idAttribute = id ? ' id="' + id + '"' : '';
    var classAttribute = className ? ' class="' + className + '"' : '';
    var statements_content = Blockly.HTML.statementToCode(block, 'content');
    var code = '<table border="' + borderSize + '" style="border-color:' + colour + ';"' + idAttribute + classAttribute + '>\n' + statements_content + '</table>\n';
    return code;
};

Blockly.Blocks['tableRow'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Table row");
        this.appendDummyInput()
            .appendField("Border size:")
            .appendField(new Blockly.FieldNumber(0, 0, 10), "borderSize");
        this.appendDummyInput()
            .appendField("Border colour")
            .appendField(new Blockly.FieldColour("#000000"), "colour");
        this.appendDummyInput()
            .appendField("ID")
            .appendField(new Blockly.FieldTextInput(""), "ID");
        this.appendDummyInput()
            .appendField("Class")
            .appendField(new Blockly.FieldTextInput(""), "CLASS");
        this.appendStatementInput("content")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip("The <tr> tag defines a row in an HTML table.");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_tr.asp");
    }
};

Blockly.HTML['tableRow'] = function (block) {
    var borderSize = block.getFieldValue('borderSize');
    var colour = block.getFieldValue('colour');
    var id = block.getFieldValue('ID');
    var className = block.getFieldValue('CLASS');
    var idAttribute = id ? ' id="' + id + '"' : '';
    var classAttribute = className ? ' class="' + className + '"' : '';
    var statements_content = Blockly.HTML.statementToCode(block, 'content');
    var code = '<tr style="border:' + borderSize + 'px solid ' + colour + ';"' + idAttribute + classAttribute + '>\n' + statements_content + '</tr>\n';
    return code;
};

Blockly.Blocks['tableElement'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Table element");
        this.appendDummyInput()
            .appendField("Border size:")
            .appendField(new Blockly.FieldNumber(0, 0, 10), "borderSize");
        this.appendDummyInput()
            .appendField("Border colour")
            .appendField(new Blockly.FieldColour("#000000"), "colour");
        this.appendDummyInput()
            .appendField("ID")
            .appendField(new Blockly.FieldTextInput(""), "ID");
        this.appendDummyInput()
            .appendField("Class")
            .appendField(new Blockly.FieldTextInput(""), "CLASS");
        this.appendStatementInput("content")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip("The <td> tag defines a standard data cell in an HTML table.");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_td.asp");
    }
};

Blockly.HTML['tableElement'] = function (block) {
    var borderSize = block.getFieldValue('borderSize');
    var colour = block.getFieldValue('colour');
    var id = block.getFieldValue('ID');
    var className = block.getFieldValue('CLASS');
    var idAttribute = id ? ' id="' + id + '"' : '';
    var classAttribute = className ? ' class="' + className + '"' : '';
    var statements_content = Blockly.HTML.statementToCode(block, 'content');
    var code = '<td style="border:' + borderSize + 'px solid ' + colour + ';"' + idAttribute + classAttribute + '>\n' + statements_content + '</td>\n';
    return code;
};

Blockly.Blocks['orderedList'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Ordered List");
        this.appendDummyInput()
            .appendField("ID")
            .appendField(new Blockly.FieldTextInput(""), "ID");
        this.appendDummyInput()
            .appendField("Class")
            .appendField(new Blockly.FieldTextInput(""), "CLASS");
        this.appendStatementInput("content")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("The <ol> tag defines an ordered list. An ordered list can be numerical or alphabetical.");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_ol.asp");
    }
};

Blockly.HTML['orderedList'] = function (block) {
    var id = block.getFieldValue('ID');
    var className = block.getFieldValue('CLASS');
    var idAttribute = id ? ' id="' + id + '"' : '';
    var classAttribute = className ? ' class="' + className + '"' : '';
    var statements_content = Blockly.HTML.statementToCode(block, 'content');
    var code = '<ol' + idAttribute + classAttribute + '>\n' + statements_content + '</ol>\n';
    return code;
};


Blockly.Blocks['listElem'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("List element");
        this.appendDummyInput()
            .appendField("ID")
            .appendField(new Blockly.FieldTextInput(""), "ID");
        this.appendDummyInput()
            .appendField("Class")
            .appendField(new Blockly.FieldTextInput(""), "CLASS");
        this.appendStatementInput("content")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("The <li> tag defines a list item.");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_li.asp");
    }
};

Blockly.HTML['listElem'] = function (block) {
    var id = block.getFieldValue('ID');
    var className = block.getFieldValue('CLASS');
    var idAttribute = id ? ' id="' + id + '"' : '';
    var classAttribute = className ? ' class="' + className + '"' : '';
    var statements_content = Blockly.HTML.statementToCode(block, 'content');
    var code = '<li' + idAttribute + classAttribute + '>\n' + statements_content + '</li>\n';
    return code;
};

Blockly.Blocks['descriptionList'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Description List");
        this.appendDummyInput()
            .appendField("ID")
            .appendField(new Blockly.FieldTextInput(""), "ID");
        this.appendDummyInput()
            .appendField("Class")
            .appendField(new Blockly.FieldTextInput(""), "CLASS");
        this.appendStatementInput("content")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("The <dl> tag defines a description list.");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_dl.asp");
    }
};

Blockly.HTML['descriptionList'] = function (block) {
    var id = block.getFieldValue('ID');
    var className = block.getFieldValue('CLASS');
    var idAttribute = id ? ' id="' + id + '"' : '';
    var classAttribute = className ? ' class="' + className + '"' : '';
    var statements_content = Blockly.HTML.statementToCode(block, 'content');
    var code = '<dl' + idAttribute + classAttribute + '>\n' + statements_content + '</dl>\n';
    return code;
};

Blockly.Blocks['descriptionItem'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Description item");
        this.appendDummyInput()
            .appendField("ID")
            .appendField(new Blockly.FieldTextInput(""), "ID");
        this.appendDummyInput()
            .appendField("Class")
            .appendField(new Blockly.FieldTextInput(""), "CLASS");
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("Item:");
        this.appendStatementInput("NAMEDescription")
            .setCheck(null)
            .appendField("Description:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("The <dt> tag defines a term/name in a description list.");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_dt.asp");
    }
};

Blockly.HTML['descriptionItem'] = function (block) {
    var id = block.getFieldValue('ID');
    var className = block.getFieldValue('CLASS');
    var idAttribute = id ? ' id="' + id + '"' : '';
    var classAttribute = className ? ' class="' + className + '"' : '';
    var item = Blockly.HTML.statementToCode(block, 'NAME');
    var description = Blockly.HTML.statementToCode(block, 'NAMEDescription');
    var code = '<dt' + idAttribute + classAttribute + '>' + item + '</dt>\n<dd>' + description + '</dd>\n';
    return code;
};
