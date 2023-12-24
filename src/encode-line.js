const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let current = '';
  let counter = 0
  if (str){
    for (let i of str){
      if (current != ''){
        if (i !== current){
          function writeRes(){
          if (counter > 1){
            res += counter + current
          } else if (counter === 1) {
            res += current
          }
          }
          writeRes();
          counter = 0;
        }
      }
        current = i;
        counter += 1;
    }
    writeRes();
    return res;
  }
  return '';
}

module.exports = {
  encodeLine
};
