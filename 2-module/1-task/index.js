/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let amountOfSalaries = 0;

  for (const key in salaries) {

    if (isFinite(salaries[key])) {
      amountOfSalaries += salaries[key];
    }

  }

  return amountOfSalaries;
}
