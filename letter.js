

class Letter{
    constructor(value){
        this.char = value;
        this.guessed = false;
    }

    getValue(){
        return this.char;
    }

    guessing(guess){
        if (this.char == guess){
            this.guessed = true;
        }
    }

    checkGuess(){
        return this.guessed;
    }
}
module.exports=Letter;