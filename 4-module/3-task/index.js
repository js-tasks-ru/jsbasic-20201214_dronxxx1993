/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */

const indexTableELaments = (table) => {

  const rows = table.tHead.rows[0].cells;
  const indexTable = {};

  for (let i = 0; i < rows.length; i++) {

    if (rows[i].innerHTML === 'Status') {
      indexTable.statusIndexTable = rows[i].cellIndex;
    } else if (rows[i].innerHTML === 'Age') {
      indexTable.ageIndexTable = rows[i].cellIndex;
    } else if (rows[i].innerHTML === 'Gender') {
      indexTable.genderIndexTable = rows[i].cellIndex;
    }

  }
  return indexTable;
};

function highlight(table) {

  const {ageIndexTable, genderIndexTable, statusIndexTable} = indexTableELaments(table);

  const cell = table.rows;

  for (let j = 0; j < cell.length; j++) {
    const age = cell[j].cells[ageIndexTable].innerHTML;
    const gender = cell[j].cells[genderIndexTable].innerHTML;
    const status = cell[j].cells[statusIndexTable];

    if (age < 18) {
      cell[j].style = "text-decoration: line-through";
    }

    if (status.getAttribute('data-available') === 'true') {
      cell[j].classList.add('available');
    } else if (status.getAttribute('data-available') === 'false') {
      cell[j].classList.add('unavailable');
    } else if (!status.hasAttribute("data-available")) {
      cell[j].setAttribute('hidden', 'true');
    }

    if (gender === 'f') {
      cell[j].classList.add('female');
    } else if (gender === 'm') {
      cell[j].classList.add('male');
    }

  }
}


