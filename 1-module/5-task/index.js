/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  return str.length > 20 ? `${str.slice(0, maxlength - 1)}…` : str
}
