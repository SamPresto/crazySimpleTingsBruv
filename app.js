const input = document.querySelector('#userInput');
const submit = document.querySelector('#submit');
const clear = document.querySelector('#clear');

const ul = document.querySelector('#list');

submit.addEventListener('click', () => {
    if(input.value != '') {
        let newLi = document.createElement('LI');
        newLi.innerText = input.value;
        ul.appendChild(newLi);
        input.value = '';
    } else { alert("ADD TEXT TO CREATE A TODO"); }
});

clear.addEventListener('click', () => {
    ul.innerHTML = '';
});

ul.addEventListener('click', (e) => {
    if(e.target.nodeName = "LI") {

        e.target.style.color = 'green';
        e.target.style.textDecoration = 'line-through';
    }
});
ul.addEventListener('dblclick', (e) => {
    if(e.target.nodeName = "LI") {
        e.target.remove();
    }
});