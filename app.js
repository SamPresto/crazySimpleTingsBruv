const namePlace = document.querySelector('#name');
const date = document.querySelector('#date');
const amount = document.querySelector('#amount');
const addExpenseBtn = document.querySelector('#addData');

const tableData = document.querySelector('tbody');

const table = document.querySelector('table');

const totalSpent = document.querySelector('#totalSpent');
let totalMoney = 0;

// use event degredation to remove tr when clicked
table.addEventListener('click', (e) => {    

    if(e.target.id = 'tableData' && e.target.parentElement.id != 'tableHead') {
        e.target.parentElement.remove();
    }

});


addExpenseBtn.addEventListener('click', () => {
    if(namePlace.value != '' && date.value != '' && amount.value != '') {

        // create new table row
        let newTr = document.createElement('TR');
        newTr.setAttribute('id', 'tableData');

        // create new table data for the name
        let newName = document.createElement('TD');
        let newNameText = document.createTextNode(namePlace.value);

        newName.appendChild(newNameText);
        newTr.appendChild(newName);


        // create new table data for the date
        let newDate = document.createElement('TD');
        let newDateText = document.createTextNode(date.value);

        newDate.appendChild(newDateText);
        newTr.appendChild(newDate);


        // create new table data for the amount
        let newAmount = document.createElement('TD');
        let newAmountText = document.createTextNode(`$${amount.value}`);
        let actualAmount = newAmountText.toString();


        newAmount.appendChild(newAmountText);
        newTr.appendChild(newAmount);

        tableData.appendChild(newTr);


        // reset text inputs
        namePlace.value = '';
        date.value = '';
        amount.value = '';

    }
    else {
        alert("FINISH ALL INPUTS");
    }
});