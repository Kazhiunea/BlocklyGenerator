//The Image block:
Blockly.Blocks['image'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Image")
          .appendField(new Blockly.FieldTextInput("URL"), "IMAGE")
          .appendField("or")
          .appendField(new Blockly.FieldTextInput("alternative text"), "ALT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("The <img> tag is used to embed an image in an HTML page.");
   this.setHelpUrl("https://www.w3schools.com/tags/tag_img.asp");
    }
  };
  
  //The Body block:
  Blockly.Blocks['body'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Body");
      this.appendStatementInput("content")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("The <body> tag defines the document's body.");
   this.setHelpUrl("https://www.w3schools.com/tags/tag_body.asp");
    }
  };
  
  //The Document block:
  Blockly.Blocks['document'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Document");
      this.appendStatementInput("content")
          .setCheck(null);
      this.setColour(0);
   this.setTooltip("The <html> tag represents the root of an HTML document.");
   this.setHelpUrl("https://www.w3schools.com/tags/tag_html.asp");
    }
  };
  
  //The Header block:
  Blockly.Blocks['header'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Header");
      this.appendStatementInput("content")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("The <head> element is a container for metadata");
   this.setHelpUrl("https://www.w3schools.com/tags/tag_head.asp");
    }
  };
  
  //The Paragraph block:
  Blockly.Blocks['paragraph'] = {
    init: function() {
      this.appendStatementInput("content")
          .setCheck(null)
          .appendField("Paragraph");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("The <p> tag defines a paragraph.");
   this.setHelpUrl("https://www.w3schools.com/tags/tag_p.asp");
    }
  };
  
  //The Text block:
  Blockly.Blocks['text'] = {
    init: function() {
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
  
  //The Title block:
  Blockly.Blocks['title'] = {
    init: function() {
      this.appendStatementInput("content")
          .setCheck(null)
          .appendField("Title");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("The <title> tag defines the title of the document.");
   this.setHelpUrl("https://www.w3schools.com/tags/tag_title.asp");
    }
  };
  
  
  //////////////////////////////////////////////////////////////
  //The HTML Code Generators:
  var HTMLGenerator = new Blockly.Generator('HTML');
  
  HTMLGenerator.init = function(workspace) {};
  HTMLGenerator.finish = function(code) {return code;};
  
  HTMLGenerator.scrub_ = function(block, code) {
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = HTMLGenerator.blockToCode(nextBlock);
    return code + nextCode;
  };
  
  
  //Document Code Generator
  HTMLGenerator['document'] = function(block) {
    var content_of_conjoined = HTMLGenerator.statementToCode(block, 'content');
    var code = '<!DOCTYPE HTML>\n<html>\n' + content_of_conjoined + '</html>\n';
    return code;
  };
  
  //Header Code Generator
  HTMLGenerator['header'] = function(block) {
    var content_of_conjoined = HTMLGenerator.statementToCode(block, 'content');
    var code = '<head>\n  <meta charset="utf-8">\n' + content_of_conjoined + '</head>\n';
    return code;
  };
  
  //Title Code Generator
  HTMLGenerator['title'] = function(block) {
    var content_of_conjoined = HTMLGenerator.statementToCode(block, 'content');
    var code = '<title>' + content_of_conjoined.trim() + '</title>\n';
    return code;
  };
  
  
  //Text Code Generator
  HTMLGenerator['text'] = function(block) {
    var content_of_conjoined = block.getFieldValue('content');
    var code = content_of_conjoined + '\n';
    return code;
  };
  
  //Paragraph Code Generator
  HTMLGenerator['paragraph'] = function(block) {
    var content_of_conjoined = HTMLGenerator.statementToCode(block, 'content');
    var code = '<p>\n' + content_of_conjoined + '</p>\n';
    return code;
  };
  
  //Body Elemento 
  HTMLGenerator['body'] = function(block) {
    var content_of_conjoined = HTMLGenerator.statementToCode(block, 'content');
    var code = '<body>\n' + content_of_conjoined + '</body>\n';
    return code;
  };
  
  //Image Elemento kodo generatorius
  HTMLGenerator['image'] = function(block) {
    var text_image = block.getFieldValue('IMAGE');
    var text_alt = block.getFieldValue('ALT');
    var code = '<img src="' +  text_image + '" alt="' + text_alt + '">\n';
    return code;
  };
  
  
  
  
  //Aditionals:
  
  //bold:
  //REPLACED
  /*
  Blockly.Blocks['strong'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Bold Text");
      this.appendStatementInput("content")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  HTMLGenerator['strong'] = function(block) {
  var content = HTMLGenerator.statementToCode(block, 'content');
  var code = '<b>' + content + '</b>\n';
  return code;
  };*/
  
  //new line
  Blockly.Blocks['newline'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("New Line");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("The <br> tag inserts a single line break.");
   this.setHelpUrl("https://www.w3schools.com/tags/tag_br.asp");
    }
  };
  
  HTMLGenerator['newline'] = function(block) {
  return '<br>\n';
  };
  
  
  //unordered list:
  Blockly.Blocks['unorderedList'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Unordered List");
      this.appendStatementInput("content")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("The <ul> tag defines an unordered (bulleted) list.");
   this.setHelpUrl("https://www.w3schools.com/tags/tag_ul.asp");
    }
  };
  
  HTMLGenerator['unorderedList'] = function(block) {
  var statements_content = HTMLGenerator.statementToCode(block, 'content');
  // Generating the HTML code for an unordered list
  var code = '<ul>\n' + statements_content + '</ul>\n';
  return code;
  };
  
  //ordered list
  Blockly.Blocks['orderedList'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ordered List");
      this.appendStatementInput("content")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("The <ol> tag defines an ordered list. An ordered list can be numerical or alphabetical.");
   this.setHelpUrl("https://www.w3schools.com/tags/tag_ol.asp");
    }
  };
  
  HTMLGenerator['orderedList'] = function(block) {
  var statements_content = HTMLGenerator.statementToCode(block, 'content');
  var code = '<ol>\n' + statements_content + '</ol>\n';
  return code;
  };
  
  //list element
  Blockly.Blocks['listElem'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("List element");
      this.appendStatementInput("content")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("The <li> tag defines a list item.");
   this.setHelpUrl("https://www.w3schools.com/tags/tag_li.asp");
    }
  };
  
  HTMLGenerator['listElem'] = function(block) {
  var statements_content = HTMLGenerator.statementToCode(block, 'content');
  var code = '<li>\n' + statements_content + '</li>\n';
  return code;
  };
  
  //Aside
  Blockly.Blocks['aside'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Aside");
      this.appendDummyInput()
          .appendField(new Blockly.FieldLabelSerializable("Width:"), "")
          .appendField(new Blockly.FieldNumber(0, 0, 100), "width")
          .appendField("%");
      this.appendDummyInput()
          .appendField("Position:")
          .appendField(new Blockly.FieldDropdown([["Left","Left"], ["Right","Right"]]), "position");
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
  
  HTMLGenerator['aside'] = function(block) {
    var width = block.getFieldValue('width');
    var position = block.getFieldValue('position');
    var colour = block.getFieldValue('colour');
    var content = HTMLGenerator.statementToCode(block, 'NAME');
  
    return '<aside style="width:' + width + '%; float:' + position + '; background-color:' + colour + ';">\n' + content + '\n</aside>\n';
  };
  
  //hyperlink
  Blockly.Blocks['hyperlink'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Hyperlink");
      this.appendStatementInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("Link")
          .appendField(new Blockly.FieldTextInput(""), "link");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("The <a> tag defines a hyperlink, which is used to link from one page to another.");
   this.setHelpUrl("https://www.w3schools.com/tags/tag_a.asp");
    }
  };
  
  HTMLGenerator['hyperlink'] = function(block) {
    var content = HTMLGenerator.statementToCode(block, 'NAME');
    var link = block.getFieldValue('link');
    var code = '<a href="' + link + '">' + content + '</a>';
    return code;
  };
  
  //Description list
  Blockly.Blocks['descriptionList'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Description List");
      this.appendStatementInput("content")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("The <dl> tag defines a description list.");
   this.setHelpUrl("https://www.w3schools.com/tags/tag_dl.asp");
    }
  };
  
  HTMLGenerator['descriptionList'] = function(block) {
  var statements_content = HTMLGenerator.statementToCode(block, 'content');
  var code = '<dl>\n' + statements_content + '</dl>\n';
  return code;
  };
  
  //Description item:
  Blockly.Blocks['descriptionItem'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Description item");
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
  
  HTMLGenerator['descriptionItem'] = function(block) {
    var itemInput = HTMLGenerator.statementToCode(block, 'NAME') || '\n';
    var descriptionInput = HTMLGenerator.statementToCode(block, 'NAMEDescription') || '\n';
    return '<dt>' + itemInput + '</dt>\n<dd>' + descriptionInput + '</dd>\n';
  };
  
  //Heading
  Blockly.Blocks['heading'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Heading");
      this.appendDummyInput()
          .appendField("Heading style:")
          .appendField(new Blockly.FieldDropdown([["Heading1","Heading 1"], ["Heading2","Heading 2"], ["Heading3","Heading 3"], ["Heading4","Heading 4"], ["Heading5","Heading 5"], ["Heading6","Heading 6"]]), "heading")
          .appendField("Text:")
          .appendField(new Blockly.FieldTextInput(" "), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("The <h1> to <h6> tags are used to define HTML headings.");
   this.setHelpUrl("https://www.w3schools.com/tags/tag_hn.asp");
    }
  };
  
  HTMLGenerator['heading'] = function(block) {
    var heading = block.getFieldValue('heading');
    var text = block.getFieldValue('NAME');
    return '<h' + heading[heading.length-1] + '>' + text + '</h' + heading[heading.length-1] + '>\n';
  };
  
  
  //Text effects:
  Blockly.Blocks['textWithStyle'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Text with style");
      this.appendDummyInput()
          .appendField("Text style")
          .appendField(new Blockly.FieldDropdown([["Bold","bold"], ["Italic","italic"], ["Underline","underline"], ["Strike-through","strikethrough"], ["Subscription","subscribe"], ["Superscription","superscribe"]]), "formating");
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
  
  HTMLGenerator['textWithStyle'] = function(block) {
    var htmlCode = "";
    var textStyle = block.getFieldValue('formating');
    var textColour = block.getFieldValue('colour');
    var text = block.getFieldValue('INPUT');
    switch (textStyle) {
      case "bold":
        htmlCode = "<b style='color:" + textColour + ";'>" + text + "</b>";
        break;
      case "strikethrough":
        htmlCode = "<s style='color:" + textColour + ";'>" + text + "</s>";
        break;
      case "underline":
        htmlCode = "<u style='color:" + textColour + ";'>" + text + "</u>";
        break;
      case "italic":
        htmlCode = "<i style='color:" + textColour + ";'>" + text + "</i>";
        break;
      case "subscribe":
        htmlCode = "<sub style='color:" + textColour + ";'>" + text + "</sub>";
        break;
      case "superscribe":
        htmlCode = "<sup style='color:" + textColour + ";'>" + text + "</sup>";
        break;
    }
    return htmlCode;
  };
  
  //Table
  
  Blockly.Blocks['table'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Table");
      this.appendDummyInput()
          .appendField("Border size:")
          .appendField(new Blockly.FieldNumber(0, 0, 10), "borderSize");
      this.appendDummyInput()
          .appendField("Border colour")
          .appendField(new Blockly.FieldColour("#000000"), "colour");
      this.appendStatementInput("content")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("The <table> tag defines an HTML table.");
   this.setHelpUrl("https://www.w3schools.com/tags/tag_table.asp");
    }
  };
  
  HTMLGenerator['table'] = function(block) {
  var borderSize = block.getFieldValue('borderSize');
  var colour = block.getFieldValue('colour');
  var content = HTMLGenerator.statementToCode(block, 'content');
  return '<table style="border: ' + borderSize + 'px solid ' + colour + '">' + content + '</table>\n';
  };
  
  //Row
  Blockly.Blocks['tableRow'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Table row");
      this.appendDummyInput()
          .appendField("Border size:")
          .appendField(new Blockly.FieldNumber(0, 0, 10), "borderSize");
      this.appendDummyInput()
          .appendField("Border colour")
          .appendField(new Blockly.FieldColour("#000000"), "colour");
      this.appendStatementInput("content")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("The <tr> tag defines a row in an HTML table.");
   this.setHelpUrl("https://www.w3schools.com/tags/tag_tr.asp");
    }
  };
  
  HTMLGenerator['tableRow'] = function(block) {
  var borderSize = block.getFieldValue('borderSize');
  var colour = block.getFieldValue('colour');
  var content = HTMLGenerator.statementToCode(block, 'content');
  return '<tr style="border: ' + borderSize + 'px solid ' + colour + '">' + content + '</tr>\n';
  };
  
  //Table Entry
  Blockly.Blocks['tableElement'] = {
   init: function() {
      this.appendDummyInput()
          .appendField("Table element");
      this.appendDummyInput()
          .appendField("Border size:")
          .appendField(new Blockly.FieldNumber(0, 0, 10), "borderSize");
      this.appendDummyInput()
          .appendField("Border colour")
          .appendField(new Blockly.FieldColour("#000000"), "colour");
      this.appendStatementInput("content")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("The <td> tag defines a standard data cell in an HTML table.");
   this.setHelpUrl("https://www.w3schools.com/tags/tag_td.asp");
    }
  };
  
  HTMLGenerator['tableElement'] = function(block) {
  var borderSize = block.getFieldValue('borderSize');
  var colour = block.getFieldValue('colour');
  var content = HTMLGenerator.statementToCode(block, 'content');
  return '<td style="border: ' + borderSize + 'px solid ' + colour + '">' + content + '</td>\n';
  };