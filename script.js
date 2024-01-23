// Пример таблицы
const container = document.querySelector('#exampleFilterBasicDemo');
const hot = new Handsontable(container, {
  data: [
    {
      id: 21,
      LastName: 'Петров',
      FirstName: 'Иван',
    },
    {
      id: 54,
      LastName: 'Петров',
      FirstName: 'Андрей',
    },
    {
      id: 122,
      LastName: 'Иванов',
      FirstName: 'Иван',
    },
    {
      id: 91,
      LastName: 'Сидоров',
      FirstName: 'Николай',
    },
    {
      id: 13,
      LastName: 'Иванов',
      FirstName: 'Виктор',
    },
  ],
  columns: [
    {
      title: 'id',
      type: 'numeric',
      data: 'id',
    },
    {
      title: 'LastName',
      type: 'text',
      data: 'LastName',
    },
    {
      title: 'FirstName',
      type: 'text',
      data: 'FirstName',
    },
  ],
// Добавили фильтры и скрыли столбец с id от пользователя
	filters: true,
  dropdownMenu: true,
  height: 'auto',
  autoWrapRow: true,
  autoWrapCol: true,
  licenseKey: 'non-commercial-and-evaluation',
});

// Скрыли столбец id по его названию
var idColIndex = hot.getColHeader().indexOf('id');
hot.updateSettings({
  hiddenColumns: {
    columns: [idColIndex],
    indicators: true,
  }
})

// Добавили хук, срабатывающий после фильтрации данных
hot.addHook('afterFilter', function getFilteredIDs() {
  // Сохранили отфильтрованные данные в массив
  let filteredData = hot.getDataAtCol(idColIndex);
  // Передали массив методу-заглушке
  Stub (filteredData)
});

// Добавили функцию вывода для отдельной кнопки
const filteredIDsButton = document.getElementById('filteredIDsButton');

filteredIDsButton.addEventListener('click', function getFilteredIDsButton() {
  // Сохранили отфильтрованные данные в массив 
  let filteredData = hot.getDataAtCol(idColIndex);
  // Передали массив методу-заглушке
  Stub(filteredData);
});

// Метод-заглушка, принимающий на вход массив с id
function Stub(filteredIDs) {
	console.log(filteredIDs)
}
