const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  domains.forEach((dom) => {
    domArr = dom.split('.')
    let d = '';
    for (let i = domArr.length-1; i >=0; i--) {
      d += `.${domArr[i]}`
      if (!Object.hasOwn(res, `${d}`)) {
        res[`${d}`] = 1
      } else {
        res[`${d}`] += 1;
      }
    }
  })
  return res;
}

module.exports = {
  getDNSStats
};
getDNSStats(['epam.com'])