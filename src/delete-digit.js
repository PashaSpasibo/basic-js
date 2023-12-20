const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];
  n = n.toString();
  for (let i = 0; i<n.length; i++){
    let a = n.split('');
    a.splice(i, 1);
    arr.push(parseInt(a.join('')));
  }
  arr = arr.sort((a,b) => b-a)
  return arr[0];
}

module.exports = {
  deleteDigit
};
