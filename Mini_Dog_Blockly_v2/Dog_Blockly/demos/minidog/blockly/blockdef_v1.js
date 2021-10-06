Blockly.defineBlocksWithJsonArray([{
   "type": "wait_seconds",
   "message0": "等待 %1 秒 (1~5)", 
   "args0": [{ 
      "type": "field_number", 
	  "name": "SECONDS", 
	  "min": 0,
	  "max": 5, 
	  "value": 1
	  }],
	"previousStatement": null, 
	"nextStatement": null, 
    "colour": 360
  }]);

Blockly.Blocks['execute_motion'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("移動方向")
        .appendField(new Blockly.FieldDropdown([["前進","F,2,30#"], ["後退","B,2,30#"], ["左轉","L,10#"], ["右轉","R,10#"]]), "motion_cmd");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("MiniDog Motion");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['forward_blks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("前進-速度")
        .appendField(new Blockly.FieldDropdown([["很快","2"],["快","5"],["中","10"],["慢","20"],["很慢","30"]]), "speed_cmd")
        .appendField("步伐")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["10","10"], ["20","20"], ["30","30"]]), "step_cmd");
     this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("MiniDog Motion");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['backward_blks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("後退-速度")
        .appendField(new Blockly.FieldDropdown([["很快","2"],["快","5"],["中","10"],["慢","20"],["很慢","30"]]), "speed_cmd")
        .appendField("步伐")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["10","10"], ["20","20"], ["30","30"]]), "step_cmd");
     this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("MiniDog Motion");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turnR_blks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("右轉-速度")
        .appendField(new Blockly.FieldDropdown([["快","10"],["中","15"],["慢","20"]]), "speed_cmd")
     this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("MiniDog Motion");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turnL_blks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("左轉-速度")
        .appendField(new Blockly.FieldDropdown([["快","10"],["中","15"],["慢","20"]]), "speed_cmd")
     this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("MiniDog Motion");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turnLR_blks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("左邊-步伐")
        .appendField(new Blockly.FieldDropdown([["-30","-30"],["-20","-20"],["-10","-10"],["0","0"],["10","10"],["20","20"],["30","30"]]), "step_L_cmd")
        .appendField("右邊-步伐")
        .appendField(new Blockly.FieldDropdown([["-30","-30"],["-20","-20"],["-10","-10"],["0","0"],["10","10"],["20","20"],["30","30"]]), "step_R_cmd")
     this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("MiniDog Motion");
 this.setHelpUrl("往前為正，往後為負");
  }
};

Blockly.Blocks['servo_move_blks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("轉動角度")
    this.appendValueInput('s0').setCheck('Number').appendField("左前腳")
    this.appendValueInput('s3').setCheck('Number').appendField("右後腳")
    this.appendValueInput('s1').setCheck('Number').appendField("右前腳")
    this.appendValueInput('s2').setCheck('Number').appendField("左後腳")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("立正時角度，130,50,50,130");
 this.setHelpUrl("");
  }
};

