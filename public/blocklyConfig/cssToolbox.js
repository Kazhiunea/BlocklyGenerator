const cssToolbox = `
<xml xmlns="https://developers.google.com/blockly/xml">
  <category name="CSS Selector" colour="170">
    <block type="css_selector">
  </category>
  <category name="Box Model" colour="100">
    <block type="css_margin">
      <field name="MARGIN">0px</field>
    </block>
    <block type="css_padding">
      <field name="PADDING">0px</field>
    </block>
    <block type="css_border">
      <field name="BORDER_SIZE">1</field>
      <field name="BORDER_UNIT">px</field>
      <field name="BORDER_STYLE">solid</field>
      <field name="BORDER_COLOR">#000000</field>
    </block>
    <block type="css_border_radius">
      <field name="BORDER_RADIUS">0px</field>
    </block>
    <block type="css_width">
      <field name="WIDTH">100px</field>
    </block>
    <block type="css_height">
      <field name="HEIGHT">100px</field>
    </block>
    <block type="css_box_sizing">
      <field name="BOX_SIZING">content-box</field>
    </block>
    <block type="css_margin_top">
      <field name="MARGIN_TOP">0px</field>
    </block>
    <block type="css_margin_right">
      <field name="MARGIN_RIGHT">0px</field>
    </block>
    <block type="css_margin_bottom">
      <field name="MARGIN_BOTTOM">0px</field>
    </block>
    <block type="css_margin_left">
      <field name="MARGIN_LEFT">0px</field>
    </block>
    <block type="css_padding_top">
      <field name="PADDING_TOP">0px</field>
    </block>
    <block type="css_padding_right">
      <field name="PADDING_RIGHT">0px</field>
    </block>
    <block type="css_padding_bottom">
      <field name="PADDING_BOTTOM">0px</field>
    </block>
    <block type="css_padding_left">
      <field name="PADDING_LEFT">0px</field>
    </block>
  </category>
  <category name="Text" colour="300">
    <block type="css_font_family">
      <field name="FONT_FAMILY">Arial</field>
    </block>
    <block type="css_font_size">
      <field name="FONT_SIZE">16px</field>
    </block>
    <block type="css_font_style">
      <field name="FONT_STYLE">normal</field>
    </block>
    <block type="css_font_weight">
      <field name="FONT_WEIGHT">normal</field>
    </block>
    <block type="css_line_height">
      <field name="LINE_HEIGHT">normal</field>
    </block>
    <block type="css_text_align">
      <field name="TEXT_ALIGN">left</field>
    </block>
    <block type="css_text_decoration">
      <field name="TEXT_DECORATION">none</field>
    </block>
    <block type="css_letter_spacing">
      <field name="LETTER_SPACING">normal</field>
    </block>
    <block type="css_word_spacing">
      <field name="WORD_SPACING">normal</field>
    </block>
    <block type="css_text_transform">
      <field name="TEXT_TRANSFORM">none</field>
    </block>
    <block type="css_text_shadow">
      <field name="H_OFFSET">0</field>
      <field name="V_OFFSET">0</field>
      <field name="BLUR">0</field>
      <field name="COLOR">#000000</field>
    </block>
    <block type="css_text_indent">
      <field name="TEXT_INDENT">0px</field>
    </block>
    <block type="css_white_space">
      <field name="WHITE_SPACE">normal</field>
    </block>
    <block type="css_text_overflow">
      <field name="TEXT_OVERFLOW">clip</field>
    </block>
    <block type="css_direction">
      <field name="DIRECTION">ltr</field>
    </block>
  </category>
  <category name="Color and Background" colour="60">
    <block type="css_color">
      <field name="COLOR">#000000</field>
    </block>
    <block type="css_background_color">
      <field name="BACKGROUND_COLOR">#FFFFFF</field>
    </block>
    <block type="css_background_image">
      <field name="BACKGROUND_IMAGE">url('')</field>
    </block>
    <block type="css_background_size">
      <field name="BACKGROUND_SIZE">auto</field>
    </block>
    <block type="css_background_repeat">
      <field name="BACKGROUND_REPEAT">repeat</field>
    </block>
    <block type="css_background_position">
      <field name="BACKGROUND_POSITION">left top</field>
    </block>
    <block type="css_background_attachment">
      <field name="BACKGROUND_ATTACHMENT">scroll</field>
    </block>
    <block type="css_background_origin">
      <field name="BACKGROUND_ORIGIN">padding-box</field>
    </block>
    <block type="css_background_clip">
      <field name="BACKGROUND_CLIP">border-box</field>
    </block>
  </category>
  <category name="Positioning" colour="210">
    <block type="css_position">
        <field name="POSITION">static</field>
    </block>
    <block type="css_top">
        <field name="TOP">0px</field>
    </block>
    <block type="css_right">
        <field name="RIGHT">0px</field>
    </block>
    <block type="css_bottom">
        <field name="BOTTOM">0px</field>
    </block>
    <block type="css_left">
        <field name="LEFT">0px</field>
    </block>
    <block type="css_z_index">
        <field name="Z_INDEX">0</field>
    </block>
    <block type="css_float">
        <field name="FLOAT">none</field>
    </block>
    <block type="css_clear">
        <field name="CLEAR">none</field>
    </block>
    <block type="css_overflow">
        <field name="OVERFLOW">visible</field>
    </block>
    <block type="css_visibility">
        <field name="VISIBILITY">visible</field>
    </block>
    <block type="css_clip">
        <field name="CLIP">rect(0, 0, 0, 0)</field>
    </block>
    <block type="css_overflow_x">
        <field name="OVERFLOW_X">visible</field>
    </block>
    <block type="css_overflow_y">
        <field name="OVERFLOW_Y">visible</field>
    </block>
    <block type="css_overflow_wrap">
        <field name="OVERFLOW_WRAP">normal</field>
    </block>
</category>
<category name="Flexbox" colour="30">
    <block type="css_display">
        <field name="DISPLAY">flex</field>
    </block>
    <block type="css_flex_direction">
        <field name="FLEX_DIRECTION">row</field>
    </block>
    <block type="css_justify_content">
        <field name="JUSTIFY_CONTENT">flex-start</field>
    </block>
    <block type="css_align_items">
        <field name="ALIGN_ITEMS">stretch</field>
    </block>
    <block type="css_flex_wrap">
        <field name="FLEX_WRAP">nowrap</field>
    </block>
    <block type="css_align_content">
        <field name="ALIGN_CONTENT">stretch</field>
    </block>
    <block type="css_order">
        <field name="ORDER">0</field>
    </block>
    <block type="css_flex_grow">
        <field name="FLEX_GROW">0</field>
    </block>
    <block type="css_flex_shrink">
        <field name="FLEX_SHRINK">1</field>
    </block>
    <block type="css_flex_basis">
        <field name="FLEX_BASIS">auto</field>
    </block>
    <block type="css_align_self">
        <field name="ALIGN_SELF">auto</field>
    </block>
    <block type="css_flex">
        <field name="FLEX">0 1 auto</field>
    </block>
</category>
<category name="Grid" colour="#FF0000">
    <block type="css_display_grid">
        <field name="DISPLAY">grid</field>
    </block>
    <block type="css_grid_template_columns">
        <field name="GRID_TEMPLATE_COLUMNS">none</field>
    </block>
    <block type="css_grid_template_rows">
        <field name="GRID_TEMPLATE_ROWS">none</field>
    </block>
    <block type="css_grid_template_areas">
        <field name="GRID_TEMPLATE_AREAS">none</field>
    </block>
    <block type="css_grid_gap">
        <field name="GRID_GAP">0px</field>
    </block>
    <block type="css_grid_column_gap">
        <field name="GRID_COLUMN_GAP">0px</field>
    </block>
    <block type="css_grid_row_gap">
        <field name="GRID_ROW_GAP">0px</field>
    </block>
    <block type="css_justify_items">
        <field name="JUSTIFY_ITEMS">start</field>
    </block>
    <block type="css_align_items_grid">
        <field name="ALIGN_ITEMS">stretch</field>
    </block>
    <block type="css_justify_content_grid">
        <field name="JUSTIFY_CONTENT">flex-start</field>
    </block>
    <block type="css_align_content_grid">
        <field name="ALIGN_CONTENT">stretch</field>
    </block>
    <block type="css_grid_auto_rows">
        <field name="GRID_AUTO_ROWS">auto</field>
    </block>
    <block type="css_grid_auto_columns">
        <field name="GRID_AUTO_COLUMNS">auto</field>
    </block>
    <block type="css_grid_auto_flow">
        <field name="GRID_AUTO_FLOW">row</field>
    </block>
    <block type="css_grid_column">
        <field name="GRID_COLUMN">auto</field>
    </block>
    <block type="css_grid_row">
        <field name="GRID_ROW">auto</field>
    </block>
    <block type="css_grid_area">
        <field name="GRID_AREA">auto / auto / auto / auto</field>
    </block>
    <block type="css_grid_template">
        <field name="GRID_TEMPLATE">none / none</field>
    </block>
    <block type="css_gap">
        <field name="GAP">0px</field>
    </block>
</category>
<category name="Shadows" colour="266">
    <block type="css_box_shadow">
        <field name="H_OFFSET">0px</field>
        <field name="V_OFFSET">0px</field>
        <field name="BLUR">5px</field>
        <field name="SPREAD">0px</field>
        <field name="COLOR">#000000</field>
    </block>
</category>
<category name="Borders" colour="184">
    <block type="css_border_width">
        <field name="WIDTH">1px</field>
    </block>
    <block type="css_border_style">
        <field name="STYLE">solid</field>
    </block>
    <block type="css_border_color">
        <field name="COLOR">#000000</field>
    </block>
    <block type="css_border_top">
        <field name="WIDTH">1px</field>
        <field name="STYLE">solid</field>
        <field name="COLOR">#000000</field>
    </block>
    <block type="css_border_right">
        <field name="WIDTH">1px</field>
        <field name="STYLE">solid</field>
        <field name="COLOR">#000000</field>
    </block>
    <block type="css_border_bottom">
        <field name="WIDTH">1px</field>
        <field name="STYLE">solid</field>
        <field name="COLOR">#000000</field>
    </block>
    <block type="css_border_left">
        <field name="WIDTH">1px</field>
        <field name="STYLE">solid</field>
        <field name="COLOR">#000000</field>
    </block>
    <block type="css_border_top_width">
        <field name="WIDTH">1px</field>
    </block>
    <block type="css_border_right_width">
        <field name="WIDTH">1px</field>
    </block>
    <block type="css_border_bottom_width">
        <field name="WIDTH">1px</field>
    </block>
    <block type="css_border_left_width">
        <field name="WIDTH">1px</field>
    </block>
    <block type="css_border_top_style">
        <field name="STYLE">solid</field>
    </block>
    <block type="css_border_right_style">
        <field name="STYLE">solid</field>
    </block>
    <block type="css_border_bottom_style">
        <field name="STYLE">solid</field>
    </block>
    <block type="css_border_left_style">
        <field name="STYLE">solid</field>
    </block>
    <block type="css_border_top_color">
        <field name="COLOR">#000000</field>
    </block>
    <block type="css_border_right_color">
        <field name="COLOR">#000000</field>
    </block>
    <block type="css_border_bottom_color">
        <field name="COLOR">#000000</field>
    </block>
    <block type="css_border_left_color">
        <field name="COLOR">#000000</field>
    </block>
</category>
<category name="Animations and Transitions" colour="82">
    <block type="css_transition">
        <field name="TRANSITION">all 0.3s ease</field>
    </block>
    <block type="css_transition_property">
        <field name="PROPERTY">all</field>
    </block>
    <block type="css_transition_duration">
        <field name="DURATION">0.3s</field>
    </block>
    <block type="css_transition_timing_function">
        <field name="FUNCTION">ease</field>
    </block>
    <block type="css_transition_delay">
        <field name="DELAY">0s</field>
    </block>
    <block type="css_animation">
        <field name="ANIMATION">name 1s ease 0s 1 normal none</field>
    </block>
    <block type="css_animation_name">
        <field name="NAME">none</field>
    </block>
    <block type="css_animation_duration">
        <field name="DURATION">1s</field>
    </block>
    <block type="css_animation_timing_function">
        <field name="FUNCTION">ease</field>
    </block>
    <block type="css_animation_delay">
        <field name="DELAY">0s</field>
    </block>
    <block type="css_animation_iteration_count">
        <field name="COUNT">1</field>
    </block>
    <block type="css_animation_direction">
        <field name="DIRECTION">normal</field>
    </block>
    <block type="css_animation_fill_mode">
        <field name="MODE">none</field>
    </block>
    <block type="css_animation_play_state">
        <field name="STATE">running</field>
    </block>
</category>
<category name="Lists" colour="242">
    <block type="css_list_style_type">
        <field name="TYPE">disc</field>
    </block>
    <block type="css_list_style_position">
        <field name="POSITION">outside</field>
    </block>
    <block type="css_list_style_image">
        <field name="IMAGE">none</field>
    </block>
</category>
<category name="Tables" colour="310">
    <block type="css_border_collapse">
        <field name="COLLAPSE">collapse</field>
    </block>
    <block type="css_border_spacing">
        <field name="SPACING">0px</field>
    </block>
    <block type="css_table_layout">
        <field name="LAYOUT">auto</field>
    </block>
    <block type="css_caption_side">
        <field name="SIDE">top</field>
    </block>
    <block type="css_empty_cells">
        <field name="CELLS">show</field>
    </block>
</category>
<category name="Multi-Column Layout" colour="104">
    <block type="css_column_count">
        <field name="COUNT">1</field>
    </block>
    <block type="css_column_gap">
        <field name="GAP">normal</field>
    </block>
    <block type="css_column_rule">
        <field name="RULE">1px solid black</field>
    </block>
    <block type="css_column_rule_width">
        <field name="WIDTH">1px</field>
    </block>
    <block type="css_column_rule_style">
        <field name="STYLE">solid</field>
    </block>
    <block type="css_column_rule_color">
        <field name="COLOR">#000000</field>
    </block>
    <block type="css_column_span">
        <field name="SPAN">none</field>
    </block>
    <block type="css_column_width">
        <field name="WIDTH">auto</field>
    </block>
    <block type="css_columns">
        <field name="COLUMNS">auto auto</field>
    </block>
    <block type="css_column_fill">
        <field name="FILL">balance</field>
    </block>
</category>
</xml>


    `;

