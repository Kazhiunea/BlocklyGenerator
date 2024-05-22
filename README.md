# Blockly HTML, CSS and JavaScript Generator

This is a tool which allows you to use the visual programming library "Blockly" and generate a HTML document. You can also generate CSS and JavaScript code, which will be combined and used in one HTML document.

## Installation 

If you want to try the application you can do so [via this link.](https://kazhiunea.github.io/BlocklyGenerator/index.html)

Alternatively you can do the following:
1. Clone the repository
2. Install Node.js via [ the official website](https://nodejs.org/en) 
3. Open a terminal with administrative priveledges and navigate to the cloned repository
4. Run

```bash
  npm install express

  npm install blockly

  npm start
```
5. Check on which port the app is running
6. Open the browser and use the link of
```bash
  localhost:*port*
```


## Navigation

The tool includes 3 sections:
1. Blockly workspace - the place where you can manipulate and combine blocks
2. Live preview - here you will see the compiled source code you've generated
3. Source code - here you will see the source code of the HTML document you are generating

On the left there is a menu where you can change between he different language workplaces or copy the generated source code into your clipboard.

## Blockly workspace
Each Blockly workspace has a toolbox with the blocks categorized in them. They are also color coded for your convenience.

You can also find an Examples section in each of the toolboxes which could help you get started.

Hovering over different blocks will show you a brief explanation about what the block is used for but if more information is needed you can right click a block and click on "Help" to be navigated to a corresponding documentation page.

## Bug reporting

If you come across any issues or bugs while using the app, please file a GitHub issue detailing your problem and we will try to solve it.
