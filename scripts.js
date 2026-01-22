/* PSEUDOCODE FOR THE PROGRAM:
1. Create a new repository for the program (Rock, Paper, Scissor)
2. Create a function for the computer that randomly return any of the strings: Rock, 
Paper, Scissor.
3. Create a function for the user that required an entry from the user among the strings 
and return the valid option. 
4. Create two variables that tracks both computer and user score 
and initialized the variables to zero.
5. Create a function that takes the record of the highest score between the user and 
the computer and return it as the winner.
6. Create a function that uses function 5 as a variable to delcare the final winner 
after 5 rounds.
*/

let str1 = 'rock';
let str2 = 'paper';
let str3 = 'scissor';

function getComputerChoice() {
    if (Math.floor(Math.random() * 20) <= 5) {
        console.log(str1);
    } else if (Math.floor(Math.random() * 20) <= 10) {
        console.log(str2);
    } else if (Math.floor(Math.random() * 20) <= 15) {
        console.log(str3);
    }
}
getComputerChoice();

function getHumanChoice() {
    let userInput = prompt("Let's play: Rock, Paper, Scisssor", "Shoot!!!");
    if (userInput === str1 || userInput === str2 || userInput === str3) {
        console.log(userInput);
    } else {
        console.log("Play fair!")
    }
}

getHumanChoice();