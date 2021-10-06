Blockly.defineBlocksWithJsonArray['execute_motion'] = function(block) { 
  var dropdown_motion = block.getFieldValue('motion_cmd');
  var code = 'SEND_COMMAND( "' + dropdown_motion + '" ) ; \n';
  return code;
};

Blockly.JavaScript['execute_motion'] = function(block) { 
  var dropdown_motion = block.getFieldValue('motion_cmd');
  var code = 'SEND_COMMAND( "' + dropdown_motion + '" ) ; \n';
  return code;
};

Blockly.JavaScript['forward_blks'] = function(block) { 
  var dropdown_speed = block.getFieldValue('speed_cmd');
  var dropdown_step = block.getFieldValue('step_cmd');
  console.log(" Test = " + dropdown_speed) ;
  var code = 'SEND_COMMAND( "F,' + dropdown_speed + ','+dropdown_step+'#" ) ; \n';
  return code;
};

Blockly.JavaScript['backward_blks'] = function(block) { 
  var dropdown_speed = block.getFieldValue('speed_cmd');
  var dropdown_step = block.getFieldValue('step_cmd');
  console.log(" Test = " + dropdown_speed) ;
  var code = 'SEND_COMMAND( "B,' + dropdown_speed + ','+dropdown_step+'#" ) ; \n';
  return code;
};

Blockly.JavaScript['turnR_blks'] = function(block) { 
  var dropdown_speed = block.getFieldValue('speed_cmd');
  console.log(" Test = " + dropdown_speed) ;
  var code = 'SEND_COMMAND( "R,' + dropdown_speed + '#" ) ; \n';
  return code;
};

Blockly.JavaScript['turnL_blks'] = function(block) { 
  var dropdown_speed = block.getFieldValue('speed_cmd');
  console.log(" Test = " + dropdown_speed) ;
  var code = 'SEND_COMMAND( "L,' + dropdown_speed + '#" ) ; \n';
  return code;
};

Blockly.JavaScript['turnLR_blks'] = function(block) { 
  var dropdown_L_step = block.getFieldValue('step_L_cmd');
  var dropdown_R_step = block.getFieldValue('step_R_cmd');
  console.log(" Test = " + dropdown_L_step) ;
  var code = 'SEND_COMMAND( "LR,' + dropdown_L_step + ','+dropdown_R_step+',10#" ) ; \n';
  return code;
};

Blockly.JavaScript['servo_move_blks'] = function(block) { 
  var s0 = Blockly.JavaScript.valueToCode(this, 's0', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var s1 = Blockly.JavaScript.valueToCode(this, 's1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var s2 = Blockly.JavaScript.valueToCode(this, 's2', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var s3 = Blockly.JavaScript.valueToCode(this, 's3', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  console.log(" Test = M," + s0 + ","+ s1 + ","+ s2 + ","+ s3 + "#") ;
  var code = 'SEND_COMMAND( "M,' + s0 + ','+ s1 + ','+ s2 + ','+ s3 + '#" ) ; \n';
  return code;
};

// Need to debug 
Blockly.JavaScript['wait_ms'] = function(block) { 
  var seconds = Number(block.getFieldValue('MS'));
  var code = 'waitForMS(' + MS + ');\n';
  return code;
};

/**
 * Generator for wait block creates call to new method
 * <code>waitForSeconds()</code>.
 */
Blockly.JavaScript['wait_seconds'] = function(block) {
  var seconds = Number(block.getFieldValue('SECONDS'));
  var code = 'waitForSeconds(' + seconds + ');\n';
  return code;
};

/**
 * Register the interpreter asynchronous function
 * <code>waitForSeconds()</code>.
 */
function initInterpreterWaitForSeconds(interpreter, scope) {
	  // Ensure function name does not conflict with variable names.
	  Blockly.JavaScript.addReservedWords('waitForSeconds');

	  var wrapper = interpreter.createAsyncFunction(
		function(timeInSeconds, callback) {
		  // Delay the call to the callback.
		  console.log("in waitForSeconds loop wait=" + timeInSeconds) ;
		  setTimeout(callback, timeInSeconds * 1000);
		});
	  interpreter.setProperty(scope, 'waitForSeconds', wrapper);
  
	  
	  // for waitForMS( 200 );
	  Blockly.JavaScript.addReservedWords('waitForMS');
	  var wrapper = interpreter.createAsyncFunction(
		function(timeInSeconds, callback) {
		  // Delay the call to the callback.
		  console.log("in waitForMS loop wait=" + timeInSeconds) ;
		  setTimeout(callback, timeInSeconds );
		});
	  interpreter.setProperty(scope, 'waitForMS', wrapper);
	  
  
	Blockly.JavaScript.addReservedWords('controlServo');
	var wrapper = interpreter.createAsyncFunction(
	function(arg1, arg2 , callback) {
		// Delay the call to the callback.
		console.log("controlServo = " + arg1 + "," + arg2 ) ;
		controlServo( arg1, arg2) ;
		setTimeout(callback, 1 ); // callback rightaway 
	});
	interpreter.setProperty(scope, 'controlServo', wrapper);
  
  
}

