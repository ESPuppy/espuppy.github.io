Blockly.Python['oled_init'] = function(block) {
  Blockly.Python.definitions_['import_oled'] = 'import OLED';

  var dropdown_size = block.getFieldValue('size');

  var code = `oled = OLED.SSD1306_I2C(128, ${+dropdown_size == 0 ? 64 : 32})\n`;
  return code;
};

//add for rotation
Blockly.Python['oled_rotate'] = function(block) {
  var value_rotate_dir = Blockly.Python.valueToCode(block, 'rotate_dir', Blockly.Python.ORDER_ATOMIC);
  var code = `oled.rotate_s(${value_rotate_dir})\n`;
  return code;
};

Blockly.Python['oled_draw_text'] = function(block) {
  Blockly.Python.definitions_['import_oled'] = 'import OLED';
  
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var code = `oled.text(${value_text}, ${value_x}, ${value_y})\n`;
  return code;
};


Blockly.Python['oled_draw_line'] = function(block) {
  Blockly.Python.definitions_['import_oled'] = 'import OLED';

  var value_x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
  var value_y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
  var value_x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
  var value_y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);

  var code = `oled.line(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2}, 1); oled.show()\n`;
  return code;
};

Blockly.Python['oled_draw_rect'] = function(block) {
  Blockly.Python.definitions_['import_oled'] = 'import OLED';

  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_width = Blockly.Python.valueToCode(block, 'width', Blockly.Python.ORDER_ATOMIC);
  var value_height = Blockly.Python.valueToCode(block, 'height', Blockly.Python.ORDER_ATOMIC);
  var dropdown_fill = block.getFieldValue('fill');

  var code = `oled.${(+dropdown_fill) ? 'fill_rect' : 'rect'}(${value_x}, ${value_y}, ${value_width}, ${value_height}, 1); oled.show()\n`;
  return code;
};

Blockly.Python['oled_fill'] = function(block) {
  var code = 'oled.fill(1)\n';
  return code;
};

Blockly.Python['oled_clear'] = function(block) {
  var code = 'oled.fill(0)\n';
  return code;
};

Blockly.Python['oled_show'] = function(block) {
  var code = 'oled.show()\n';
  return code;
};