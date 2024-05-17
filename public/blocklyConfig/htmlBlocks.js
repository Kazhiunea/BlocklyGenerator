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

  
  
   Blockly.HTML = new Blockly.Generator('HTML');

   // Create the _blockToCode dictionary for HTML blocks
   Blockly.HTML._blockToCode = {};
   
   Blockly.HTML.init = function(workspace) {
       // Initialize the HTML code generation.
   };
   
   Blockly.HTML.finish = function(code) {
       return code;
   };
   
   Blockly.HTML.scrub_ = function(block, code) {
       var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
       var nextCode = Blockly.HTML.blockToCode(nextBlock);
       return code + nextCode;
   };
   
   Blockly.HTML['document'] = function(block) {
       var statements_content = Blockly.HTML.statementToCode(block, 'content');
       var code = '<!DOCTYPE html>\n<html>\n' + statements_content + '</html>\n';
       return code;
   };
   
   Blockly.HTML['body'] = function(block) {
       var statements_content = Blockly.HTML.statementToCode(block, 'content');
       var code = '<body>\n' + statements_content + '</body>\n';
       return code;
   };
   
   Blockly.HTML['header'] = function(block) {
       var statements_content = Blockly.HTML.statementToCode(block, 'content');
       var code = '<header>\n' + statements_content + '</header>\n';
       return code;
   };
   
   Blockly.HTML['paragraph'] = function(block) {
       var statements_content = Blockly.HTML.statementToCode(block, 'content');
       var code = '<p>\n' + statements_content + '</p>\n';
       return code;
   };
   
   Blockly.HTML['text'] = function(block) {
       var text = block.getFieldValue('content');
       var code = text + '\n';
       return code;
   };
   
   Blockly.HTML['title'] = function(block) {
       var statements_content = Blockly.HTML.statementToCode(block, 'content');
       var code = '<title>\n' + statements_content + '</title>\n';
       return code;
   };
   
   Blockly.HTML['newline'] = function(block) {
       var code = '<br>\n';
       return code;
   };
   
   Blockly.HTML['unorderedList'] = function(block) {
       var statements_content = Blockly.HTML.statementToCode(block, 'content');
       var code = '<ul>\n' + statements_content + '</ul>\n';
       return code;
   };
   
   Blockly.HTML['orderedList'] = function(block) {
       var statements_content = Blockly.HTML.statementToCode(block, 'content');
       var code = '<ol>\n' + statements_content + '</ol>\n';
       return code;
   };
   
   Blockly.HTML['listElem'] = function(block) {
       var statements_content = Blockly.HTML.statementToCode(block, 'content');
       var code = '<li>\n' + statements_content + '</li>\n';
       return code;
   };
   
   Blockly.HTML['aside'] = function(block) {
       var width = block.getFieldValue('width');
       var position = block.getFieldValue('position');
       var colour = block.getFieldValue('colour');
       var statements_content = Blockly.HTML.statementToCode(block, 'NAME');
       var code = '<aside style="width:' + width + '%; float:' + position + '; background-color:' + colour + ';">\n' + statements_content + '</aside>\n';
       return code;
   };
   
   Blockly.HTML['hyperlink'] = function(block) {
       var link = block.getFieldValue('link');
       var statements_content = Blockly.HTML.statementToCode(block, 'NAME');
       var code = '<a href="' + link + '">\n' + statements_content + '</a>\n';
       return code;
   };
   
   Blockly.HTML['descriptionList'] = function(block) {
       var statements_content = Blockly.HTML.statementToCode(block, 'content');
       var code = '<dl>\n' + statements_content + '</dl>\n';
       return code;
   };
   
   Blockly.HTML['descriptionItem'] = function(block) {
       var item = Blockly.HTML.statementToCode(block, 'NAME');
       var description = Blockly.HTML.statementToCode(block, 'NAMEDescription');
       var code = '<dt>' + item + '</dt>\n<dd>' + description + '</dd>\n';
       return code;
   };
   
   Blockly.HTML['heading'] = function(block) {
       var heading = block.getFieldValue('heading');
       var text = block.getFieldValue('NAME');
       var code = '<' + heading + '>' + text + '</' + heading + '>\n';
       return code;
   };
   
   Blockly.HTML['textWithStyle'] = function(block) {
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
   
   Blockly.HTML['table'] = function(block) {
       var borderSize = block.getFieldValue('borderSize');
       var colour = block.getFieldValue('colour');
       var statements_content = Blockly.HTML.statementToCode(block, 'content');
       var code = '<table border="' + borderSize + '" style="border-color:' + colour + ';">\n' + statements_content + '</table>\n';
       return code;
   };
   
   Blockly.HTML['tableRow'] = function(block) {
       var borderSize = block.getFieldValue('borderSize');
       var colour = block.getFieldValue('colour');
       var statements_content = Blockly.HTML.statementToCode(block, 'content');
       var code = '<tr style="border:' + borderSize + 'px solid ' + colour + ';">\n' + statements_content + '</tr>\n';
       return code;
   };
   
   Blockly.HTML['tableElement'] = function(block) {
       var borderSize = block.getFieldValue('borderSize');
       var colour = block.getFieldValue('colour');
       var statements_content = Blockly.HTML.statementToCode(block, 'content');
       var code = '<td style="border:' + borderSize + 'px solid ' + colour + ';">\n' + statements_content + '</td>\n';
       return code;
   };
   