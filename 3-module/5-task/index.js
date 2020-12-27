/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let result = {};

  let newStr = str.split(',').join(' ').split(' ');

  newStr = newStr.filter((item) => {
    return !!Number(item);
  }).map((item) => Number(item))

  result.max = Math.max(...newStr);
  result.min = Math.min(...newStr);

  return result;
}
