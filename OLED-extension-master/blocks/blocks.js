Blockly.defineBlocksWithJsonArray([
{
  "type": "oled_init",
  "message0": "OLED initial with size %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "size",
      "options": [
        [
          "128x64",
          "0"
        ],
        [
          "128x32",
          "1"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "Setup OLED for ready use",
  "helpUrl": ""
},
//add for rotation block
{
  "type": "oled_rotate",
  "message0": "OLED Screen set rotate at %1 ",
  "args0": [
    {
      "type": "input_value",
      "name": "rotate_dir",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "oled_draw_text",
  "message0": "OLED draw text %1 at (x: %2 , y: %3 )",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "Draw text on OLED",
  "helpUrl": ""
},
{
  "type": "oled_draw_line",
  "message0": "OLED draw line start at (x: %1 , y: %2 ) end at (x: %3 , y: %4 )",
  "args0": [
    {
      "type": "input_value",
      "name": "x1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "x2",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y2",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "Draw line on OLED",
  "helpUrl": ""
},
{
  "type": "oled_draw_rect",
  "message0": "OLED draw rectangle start at (x: %1 , y: %2 ) width: %3 height: %4 fill: %5",
  "args0": [
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "width",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "height",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "fill",
      "options": [
        [
          "No",
          "0"
        ],
        [
          "Yes",
          "1"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "Draw rectangle on OLED",
  "helpUrl": ""
},
{
  "type": "oled_fill",
  "message0": "OLED fill",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "Fill screen",
  "helpUrl": ""
},
{
  "type": "oled_clear",
  "message0": "OLED clear",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "clear screen",
  "helpUrl": ""
},
{
  "type": "oled_show",
  "message0": "OLED show",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "show screen",
  "helpUrl": ""
}
]);
