// import "./js/enemy/enemy.js";
// import "./js/entity.js";

// const grid = document.querySelector('.grid');

// for (i = 0; i < 225; i++) {
//     const square = document.createElement('div');
//     grid.appendChild(square);
// }

// const squares = Array.from(document.querySelectorAll('.grid div'));

// const aliensInvaders = [
//     0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
//     15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
//     30, 31, 32, 33, 34, 35, 36, 37, 38, 39
// ]

// function draw() {
//     for (let i = 0; i < alienInvaders.length; i++) {
//         squares[aliensInvaders[I]].classList.add('invader')
//     }
// }

let invader = new Invader(1, 1);
invader.draw();