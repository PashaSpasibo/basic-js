const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  let repeatedAdd = '';
  function rep(text, sep, times){
    return `${(text + sep).repeat(times - 1)}${text}`
  }
  if (options.addition !== undefined){
    if (options.additionRepeatTimes !== undefined){
      repeatedAdd = rep(options.addition, options.additionSeparator, options.additionRepeatTimes);
    }
    else repeatedAdd = options.addition;
  }
  else repeatedAdd = '';

  if (options.repeatTimes !== undefined){
    return rep(str + repeatedAdd, options.separator, options.repeatTimes)
  }
  else return str + repeatedAdd
}
module.exports = {
  repeater
};
