var prompt = require('prompt');
var inquirer = require('inquirer');

let words = require('./word.js');
let fs = require('fs');
var wordToGuess = process.argv[2]
prompt.start();
 
var word = new Word(wordToGuess);

while (!word.guessAll()){
    prompt.get(['charGuess'], function (err, result) {
        // 
        // Log the results. 
        // 
        console.log(' The character you are guessing ' + result.charGuess);
        word.guessChar(result.charGuess);
        console.log("current state is"+ word.getWord());
        if (word.guessAll()){
            console.log("Congradulations! you have guessed all the characters!")
            return;
        }
      });
}

