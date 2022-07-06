// local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "pika.png",
        text: "He picked up the burnt end of the branch and made a mark on the stone. Day 52 if the marks on the stone were accurate. He couldn't be sure. Day and nights had begun to blend together creating confusion, but he knew it was a long time. Much too long.",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web deisgner",
        img: "anna.png",
        text: "His parents continued to question him. He didn't know what to say to them since they refused to believe the truth. He explained again and again, and they dismissed his explanation as a figment of his imagination. There was no way that grandpa, who had been dead for five years, could have told him where the treasure had been hidden. Of course, it didn't help that grandpa was roaring with laughter in the chair next to him as he tried to explain once again how he'd found it.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "peter.png",
        text: "She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease. She reluctantly crept a little closer with the encouragement of her friends as the fear continued to build. She couldn't help but feel that something horrible was about to happen.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "bill.png",
        text: "Greg understood that this situation would make Michael terribly uncomfortable. Michael simply had no idea what was about to come and even though Greg could prevent it from happening, he opted to let it happen. It was quite ironic, really. He rationalized that it would ultimately make Michael a better person and that no matter how uncomfortable, everyone should experience racism at least once in their lifetime.",
    },
];

// select items
const img = document.querySelector('#person-img'); // pfp
const author = document.querySelector('#author'); // persons name
const job = document.querySelector('#job'); // job position
const info = document.querySelector('#info'); // description

const prevBtn = document.querySelector('.prev-btn'); // previous button
const nextBtn = document.querySelector('.next-btn'); // next button
const randomBtn = document.querySelector('.random-btn'); // random button

// set starting item
let currentItem = 0;

// load inital item
window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem);  // set initial review to the first person in reviews object
});

// show person based on item
function showPerson(person) {
    const item = reviews[person]; // set item to the item in reviews object of current person
    img.src = item.img; // set image to image of current person
    author.textContent = item.name; // set author to author of current person
    job.textContent = item.job; // set job to job of current person
    info.textContent = item.text; // set info to info of current person
}

// show next person
nextBtn.addEventListener('click', () => {
    currentItem++; // next person data set
    if(currentItem > reviews.length - 1) {
        currentItem = 0; // if at last person in data set, go back to the first person
    }
    showPerson(currentItem);
});

// show previous person
prevBtn.addEventListener('click', () => {
    currentItem--; // previous person data set
    if(currentItem < 0) {
        currentItem = reviews.length -1; // if at first person in data set, go to the last person
    }
    showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});