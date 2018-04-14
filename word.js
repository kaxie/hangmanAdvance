let lett = require('./letter.js')

class Word{
    constructor(word){
        var wordLength = word.length;
        this.wordLength = wordLength;
        var wordConstructed = new Array();
        for (var i=0;i< wordLength; i++){
            var newChar = new Letter(word[i]);
            wordConstructed.push(newChar);
        }
        this.value = wordConstructed;
    }
    getWord(){
        var str = "";
        for (var i=0;i<this.wordLength;i++){
            if(this.wordConstructed[i].checkGuess()){
                str += this.wordConstructed[i].getValue();
            }
            else{
                str += "_";
            }
        }
        return str;
    }

    guessChar(character){
        for (var i=0;i<this.wordLength;i++){
            this.wordConstructed[i].guessing(character);
        }
    }
    
    guessAll(){
        var allguessed = true;
        for (var i=0;i<this.wordLength;i++){
            if(!this.wordConstructed[i].checkGuess()){
                allguessed = false;
            }
        }
        return allguessed;
    }
}
module.exports=Word;