const cookie = document.querySelector('#cookie');
let counterDisplay = document.querySelector('#cookieCount');
let cookieRateDisplay = document.querySelector('#cookiesPerSec');

let cookieCount = 0;
let cookieRate = 0;
const winningScore = 1000000;


// while score is less than 1,000,000
// while(cookieCount <= winningScore){

//     // if score has surpased beggening
//     if(cookieCount >= 50){

//         // cookie rate becomes 1 per second
//         cookieRate++;

//         // display cookie counter with current cookie count value
//         counterDisplay.innerText = cookieCount;


//     }

//     window.setInterval(function () {
//         cookieCount += cookieRate;
//         counterDisplay.innerText = cookieCount;
//     }, 1000);
    
// }


window.setInterval(function () {
    cookieCount += 1;
    counterDisplay.innerText = cookieCount;
}, 1000);


// const startingAmount = false;

// while(!startingAmount) {
//     if(cookieCount >= 50) {
//         startingAmount = true;

//         // add options to buy
        
//     }
// }


// function perSecond(cookieCount) {
//     if(cookieCount >= 50) {
//         cookieRate += 1;
//     }
//     if(cookieCount >= 200) {
//         cookieRate += 1;
//     }
// }

// function keepTrack(cookieCount) {
//     window.setInterval(function () {
//         if(cookieCount >= 50) {
//             cookieCount += 1;
//             counterDisplay.innerText = cookieCount;
//         }
//         if(cookieCount >= 100) {
//             cookie
//         }
//     }, 1000);
    
// }

// window.setInterval(function () {
//     cookieCount++;
//     counterDisplay.innerText = cookieCount;
// }, 1000);




// hover ON cookie
cookie.addEventListener('mouseenter', () => {
    if(!cookie.classList.contains('hover')) {
        cookie.classList.add('hover');
    }
});

// hover OFF cookie
cookie.addEventListener('mouseleave', () => {
    if(cookie.classList.contains('hover')) {
        cookie.classList.remove('hover');
    }
});

function addCookie() {
    cookieCount++;
    counterDisplay.innerText = cookieCount;

    //once user gets 10 clicks
    if(cookieCount >= 10) {
        cookie.innerText = 'Keep Going!';
    }
    if(cookieCount >= 25) {
        cookie.innerText = 'Almost There!';
    }
    if(cookieCount >= 50) {
        cookie.innerText = 'Nice!'
        cookie.style.backgroundColor = 'black';
    }



    // while(cookieCount >= 50) {
    //     setTimeout(() => {
    //         cookieCount += 0.25;
    //         counterDisplay.innerText = cookieCount;
    //     }, 500);
    // }
}

//clicked cookie
cookie.addEventListener('click', addCookie);
