/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */

export default class UserTable {

  constructor(rows) {
    this.rows = rows;
    this.elem = this.render();
    this.addListener();
  }

  __createTable(elem) {
    const table = document.createElement('table');

    table.innerHTML = `
      <thead>
          <tr>
              <th>Имя</th>
              <th>Возраст</th>
              <th>Зарплата</th>
              <th>Город</th>
              <th></th>
          </tr>
      </thead>
      <tbody>
        ${elem}
      </tbody>
    `

    return table;
  }

  _createBodyTable() {

    return this.rows.map(({age, name, salary, city}) => {
      return `<tr>
                <td>${name}</td>
                <td>${age}</td>
                <td>${salary}</td>
                <td>${city}</td>
                <td><button class = 'remove'>X</button></td>
               </tr>
             `;
    }).join('');
  }

  destroy(event) {
    event.closest('tr').remove();
  }

  addListener() {
    this.btn = this.elem.querySelectorAll('button');

    this.btn.forEach(btn => {
      btn.addEventListener('click', (event) => {
        this.destroy(event.target);
      });
    });

  }

  render() {
    return this.__createTable(this._createBodyTable());
  }

}

