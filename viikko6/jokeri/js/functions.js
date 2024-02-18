const generateButton = document.getElementById('generateButton');
const jokerTable = document.getElementById('jokerTable');
const rowCount = document.getElementById('rowCount');
let rowCountValue = 0;

function generateJokerRow() {
  const newRow = document.createElement('tr');
  for (let i = 0; i < 7; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    const newCell = document.createElement('td');
    newCell.textContent = randomNumber;
    newRow.appendChild(newCell);
  }
  jokerTable.appendChild(newRow);
  rowCountValue++;
  rowCount.textContent = `Arvottuja rivejä: ${rowCountValue}`;
}

generateButton.addEventListener('click', generateJokerRow);