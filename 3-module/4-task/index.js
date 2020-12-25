/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let str = '';

  users.forEach((elem) => {
    if (elem.age <= age) {
      str += `${elem.name}, ${elem.balance}\n`;
    }
    return str;
  });
  return str.slice(0, -1);
}
