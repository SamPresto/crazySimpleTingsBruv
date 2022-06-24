const player = document.querySelectorAll('#player');


for(let person of player) {
    person.addEventListener('click', () => {
        person.remove();
    });
}

