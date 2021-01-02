/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {


  let rows = table.tHead.rows[0].cells;
  let statusIndexTable;
  let ageIndexTable;
  let genderIndexTable;
  for (let i = 0; i < rows.length; i++) {

    if (rows[i].innerHTML === 'Status') {
      statusIndexTable = rows[i].cellIndex;
    } else if (rows[i].innerHTML === 'Age') {
      ageIndexTable = rows[i].cellIndex;
    } else if (rows[i].innerHTML === 'Gender') {
      genderIndexTable = rows[i].cellIndex;
    }
  }
  let cell = table.rows;

  for (let j = 0; j < cell.length; j++) {
    let age = cell[j].cells[ageIndexTable].innerHTML;
    let gender = cell[j].cells[genderIndexTable].innerHTML;
    let status = cell[j].cells[statusIndexTable];

    if (age < 18) {
      cell[j].style = "text-decoration: line-through";
    } else if (status.getAttribute('data-available') === 'true') {
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

    if (age < 18) {
      cell[j].style = "text-decoration: line-through";
    }

  }
}


