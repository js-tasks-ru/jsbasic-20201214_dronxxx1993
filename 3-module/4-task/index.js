/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, maxAge) {

  let selectedUsers = '';

  users.forEach(({age, name, balance}) => {

    if (age <= maxAge) {
      selectedUsers += `${name}, ${balance}\n`;
    }

    return selectedUsers;

  });

  return selectedUsers.slice(0, -1);
}
