/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {

  return str.split('-').map((elem, index) => {
    return index >= 1 ? `${elem[0].toUpperCase()}${elem.slice(1)}` : elem;
  }).join('');

}
