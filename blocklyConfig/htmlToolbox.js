const htmlToolbox = `
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
  <category name="Document Structure" colour="#ff9999">
    <block type="body"></block>
    <block type="title"></block>
    <block type="paragraph"></block>
    <block type="div"></block>
  </category>
  <category name="Text Elements" colour="#9999ff">
    <block type="text"></block>
    <block type="text_with_id"></block>
    <block type="newline"></block> 
    <block type="topic_break"></block>
    <block type="heading"></block>
    <block type="abbr"></block>
    <block type="acronym"></block>
  </category>
  <category name="Lists" colour="#99cc99">
    <block type="unorderedList"></block>
    <block type="orderedList"></block>
    <block type="listElem"></block>
    <block type="descriptionList"></block>
    <block type="descriptionItem"></block>
  </category>
  <category name="Tables" colour="#cccc99">
    <block type="table"></block>
    <block type="tableRow"></block>
    <block type="tableElement"></block>
  </category>
  <category name="Multimedia" colour="310">
    <block type="image"></block>
    <block type="hyperlink"></block>
    <block type="video"></block>
    <block type="audio"></block>
    <block type="progress"></block>
    <block type="iframe"></block>
  </category>
  <category name="Form Elements" colour="#ff69b4">
    <block type="button"></block>
    <block type="select_dropdown"></block>
    <block type="option"></block>
    <block type="input"></block>
  </category>
  <category name="Examples" colour="#cccccc">
    <block type="body" gap="16">
      <statement name="content">
        <block type="image">
          <field name="IMAGE">https://example.com/image.jpg</field>
          <field name="ALT">Example Image</field>
          <next>
            <block type="paragraph">
              <statement name="content">
                <block type="text">
                  <field name="content">This is an example caption.</field>
                </block>
              </statement>
            </block>
          </next>
        </block>
      </statement>
    </block>
    <block type="body" gap="16">
      <statement name="content">
        <block type="orderedList">
          <statement name="content">
            <block type="listElem">
              <statement name="content">
                <block type="text">
                  <field name="content">First item</field>
                </block>
              </statement>
              <next>
                <block type="listElem">
                  <statement name="content">
                    <block type="text">
                      <field name="content">Second item</field>
                    </block>
                  </statement>
                </block>
              </next>
            </block>
          </statement>
        </block>
      </statement>
    </block>
    <block type="body" gap="16">
    <statement name="content">
      <block type="heading">
        <field name="LEVEL">1</field>
        <statement name="content">
          <block type="text">
            <field name="content">Welcome to My Blog</field>
            <next>
              <block type="paragraph">
                <statement name="content">
                  <block type="text">
                    <field name="content">This is the first paragraph of my blog. I will share my thoughts and experiences here.</field>
                    <next>
                      <block type="unorderedList">
                        <statement name="content">
                          <block type="listElem">
                            <statement name="content">
                              <block type="text">
                                <field name="content">First item</field>
                              </block>
                            </statement>
                            <next>
                              <block type="listElem">
                                <statement name="content">
                                  <block type="text">
                                    <field name="content">Second item</field>
                                  </block>
                                </statement>
                                <next>
                                  <block type="listElem">
                                    <statement name="content">
                                      <block type="text">
                                        <field name="content">Third item</field>
                                      </block>
                                    </statement>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </statement>
                      </block>
                    </next>
                  </block>
                </statement>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </statement>
  </block>
  <block type="body" gap="16">
    <statement name="content">
      <block type="paragraph">
        <statement name="content">
          <block type="hyperlink">
            <field name="HREF">https://example.com</field>
            <field name="TEXT">Click here to visit example.com</field>
          </block>
        </statement>
      </block>
    </statement>
  </block>
  <block type="body" gap="16">
    <statement name="content">
      <block type="table">
        <statement name="content">
          <block type="tableRow">
            <statement name="content">
              <block type="tableElement">
                <field name="CONTENT">Header 1</field>
                <next>
                  <block type="tableElement">
                    <field name="CONTENT">Header 2</field>
                  </block>
                </next>
              </block>
            </statement>
            <next>
              <block type="tableRow">
                <statement name="content">
                  <block type="tableElement">
                    <field name="CONTENT">Data 1</field>
                    <next>
                      <block type="tableElement">
                        <field name="CONTENT">Data 2</field>
                      </block>
                    </next>
                  </block>
                </statement>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </statement>
  </block>
  </category>
</xml>
`;