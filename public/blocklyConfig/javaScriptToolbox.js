const javaScriptToolbox = `
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
<category name="Variables" colour="100">
    <block type="js_var_declare"></block>
    <block type="js_var_reference"></block>
  </category>
<category name="Logic" colour="300">
<block type="js_if"></block>
<block type="js_comparison"></block>
<block type="js_logic_and_or"></block>
<block type="js_logic_not"></block>
<block type="js_logic_boolean"></block>
<block type="js_ternary"></block>
</category>
<category name="Math" colour="60">
    <block type="js_number"></block>
    <block type="js_arithmetic"></block>
    <block type="js_trig"></block>
    <block type="js_advanced_math"></block>
    <block type="js_atan2"></block>
    <block type="js_constants"></block>
    <block type="js_number_property"></block>
    <block type="js_rounding"></block>
    <block type="js_remainder"></block>
    <block type="js_constrain"></block>
    <block type="js_random_int"></block>
    <block type="js_math_random_fraction"></block>
  </category>
<category name="Text" colour="160">
    <block type="js_text"></block>
    <block type="js_text_length"></block>
    <block type="js_text_empty"></block>
    <block type="js_text_concat"></block>
    <block type="text_change_case"></block>
    <block type="text_reverse"></block>
  </category>
  <category name="HTML Manipulation" colour="30">
  <block type="js_get_element_by_id"></block>
  <block type="js_set_element_text"></block>
  <block type="js_add_event_listener"></block>
</category>

</xml>
`;