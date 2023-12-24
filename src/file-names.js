const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const res = [];
  let i = 0;
  let c = 0;
  names.forEach(check = (n) =>{
    if (res.includes(n)){
      i++;
      if(!c) n = `${n}(${i})`;
      else n = `${n.split('(')[0]}(${i})`
      c++;
      check(n);
    }
    else{
      res.push(n);
      i = 0;
      c = 0;
    }
  })
  return res;
}

module.exports = {
  renameFiles
};