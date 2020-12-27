/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

function showSalary(users, maxAge) {

  return users.map(({age, name, balance}) => {
    if (age <= maxAge) {
      return `${name}, ${balance}\n`;
    }
  }).join('').slice(0, -1);

}

