const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n < 10) {return n}
  else {
    let a = n.toString().split('').map((i)=>parseInt(i)).reduce((a,b)=>a+b);
    return getSumOfDigits(a);
    
  }
}
console.log(getSumOfDigits(99))
module.exports = {
  getSumOfDigits
};
 