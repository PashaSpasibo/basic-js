const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let upperRow;
  let res;
  matrix.forEach((row) => {
    if (upperRow){
      for (let i in upperRow){
        if (upperRow[i] !== 0){
          res += row[i]
        }
      }
    }
    else {
      res = row.reduce((a,b) => a + b)
    }
    upperRow = row;
  })
  return res;
}
module.exports = {
  getMatrixElementsSum
};
