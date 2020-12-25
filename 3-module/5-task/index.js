/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let result = {};

  let newStr = str.split(',').join(' ').split(' ');

  newStr = newStr.filter((item) => {
    if (+item) {
      return item;
    }
  });

  newStr = newStr.map((item) => +item)
  newStr = newStr.sort((a, b) => a - b);

  result.max = newStr[newStr.length - 1];
  result.min = newStr[0];

  return result;
}
