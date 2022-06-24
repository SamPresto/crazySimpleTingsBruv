// input from user stored in this variable
const input = document.querySelector('#note');

const inputTitle = document.querySelector('#noteTitle');

// button variable
const addBtn = document.querySelector('#addNote');

// this is a div element that we want to append text to
const addText = document.querySelector('#addTextHere');


const viewNote = document.querySelector('#view');
const deleteNote = document.querySelector('#delete');


// when add note button is clicked, do this...
addBtn.addEventListener('click', () => {
    if(input.value != '' && inputTitle.value != '') {

        div = document.createElement('div');
        div.style.backgroundColor = '#ffa';

        title = document.createElement('h2');

        text = document.createElement('p');

        viewBtn = document.createElement('button');
        viewBtn.id = 'view';
        console.log(viewBtn.id);
        viewBtn.innerText = 'View Note';

        deleteBtn = document.createElement('button');
        deleteBtn.id = 'delete';
        console.log(deleteBtn.id);
        deleteBtn.innerText = 'Delete Note';

        title.innerText = inputTitle.value;

        text.innerText = input.value;

        div.appendChild(title);
        div.appendChild(text);
        div.appendChild(viewBtn);
        div.appendChild(deleteBtn);

        div.setAttribute('id', 'toDelete');

        addText.appendChild(div);



        input.value = '';
        inputTitle.value = '';

    }
    else {
        alert("ADD TEXT U DUMB...");
    }
});

addText.addEventListener('click', (e) => {
    
    if(e.target.id === 'delete') {
        console.log(this);
    }
    
    
    
    // viewNote.addEventListener('click', () => {
    //     // view note in bigger way idk but it seems very complicated
    // });
    // deleteNote.addEventListener('click', () => {
    //     this.parentElement.remove();
    // });
});





// we should add an event listener to the notes to expand the note
// when clicked on
addText.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(e.target.parentElement);

    if(e.target.parentElement = 'div' && e.target.id === 'delete') {
        //delete note
        e.target.parentElement.remove();
    }

    if(e.target.parentElement = 'div' && e.target.id === 'view') {
        //view note bigger

    }



    // if(e.target.parentElement.nodeName = 'div' && e.target.id != 'view' && e.target.parentElement.id === 'toDelete' && e.target.id != 'toDelete' ) {
    //     e.target.parentElement.remove();
    // }
});
