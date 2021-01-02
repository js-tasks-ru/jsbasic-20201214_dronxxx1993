/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {

  [...table.rows].forEach((element, index) => {
    element.cells[index].style.backgroundColor = 'red';
  });

}
