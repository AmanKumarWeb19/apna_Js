// Q-1 Print all the Number(0 - 100)

// for (let i = 1; i <= 100; i++) {
//   console.log("number =", i);
// }

// Q-2 Print all the Even Number(0 - 100)

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log("Even Number =", i);
//   }
// }

// Q-3 Print all the Odd Number(0 - 100)

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log("Odd Number =", i);
//   }
// }

// Q-4 Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.

let gameNum = 25;
let promptNum = prompt("Guess the Number..!");

while (promptNum != gameNum) {
  promptNum = prompt("You Entered Wrong Number please Try Again..!");
}
console.log("Congratulations You Entered Right Number Yeah....!");
