/* Generates password of set length with set qualities: 
numbers, words, special signs, big letters etc. */
import {words} from './words.js';
export class PasswordGeneratorLogic {
    
    constructor(passwordLen){
        this.passwordLen = passwordLen;
    }
    
    charPool(smallLetters, bigLetters, specialSigns, numbers) {
        var pool = '';
        const charLetters = 'abcdefghijklmnopqrstuvwxyz'; 
        const charSpecial = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'; 
        const charNumbers = '0123456789';    
        
        if (smallLetters === true) {
            pool = pool + charLetters;
        } 
        
        if (bigLetters === true) {
            pool = pool + charLetters.toUpperCase();
        } 
        
        if (specialSigns === true) {
            pool = pool + charSpecial;
        }
        
        if (numbers === true){
            pool = pool + charNumbers;
        }
        return pool;
    }
    
    randomChar(charSet) {
        var randomCharacter = '';
        
        if (typeof charSet === "string") {                                                         // select random character from set
            randomCharacter = charSet.charAt(Math.floor(Math.random() * charSet.length));
            return randomCharacter;
        }   else if ( Array.isArray(charSet) ) {
            randomCharacter = charSet[Math.floor(Math.random() * charSet.length)];
            return randomCharacter;
        }   else {
            throw 'error';
        }
    }
    
    capitalizeFirst(stringToModify, howMany) {
    var outcome = stringToModify;
    var prefixString = outcome.substr(0,howMany);
    prefixString = prefixString.toUpperCase();
    outcome = outcome.substr(howMany);
    outcome = prefixString + outcome;
    return outcome;
}   

    totallyRandom(howMany, pool) {           // generates string of specified length with selected additional signs
    var outcome = '';
        for (var i = 0; i < howMany; i++) {
            outcome += this.randomChar(pool);                                                // randomChar chooses random character from character pool
        }
    return outcome;
    }
    
    addNumbers(stringToModify, howMany) {
    var suffixString = this.totallyRandom(howMany, this.charPool(false,false,false,true));
    stringToModify += suffixString;

    return stringToModify;
}

    mixed() {                  //operations on arrays are easier
        
        const vowels = ['a','e','u','i','o'];                 
        var pool = this.charPool(true, false, false, false);
        var poolArray = [];
        var mixed_password = '';
        for (var i=0; i<pool.length; i++) {                     //making pools of characters into array
            poolArray[i] = pool.charAt(i);
        }
        
        for (var j=0; j<vowels.length; j++) {                       //deleting vowels from pool
            let index = poolArray.indexOf(vowels[j]);
            poolArray.splice(index,1);
        }
        
        for (var k=0; k<this.passwordLen; k++) {                //password is created from non-vovel and vowel one after another
            if (k%2===0) {
                mixed_password += this.randomChar(poolArray);
    
            } else {
                mixed_password += this.randomChar(vowels);
            }
        }
        
        return mixed_password;
    }
    
    wordsPassword() {
        var words_pass = '';

                      
            while (words_pass.length < this.passwordLen) {
                var rest = this.passwordLen - words_pass.length;                // checking how many characters are left to fill
                if (rest == 1) {
                    break;
                } else {
                    var choppedWordsList = words.slice(1,rest);                     // slicing array of words so it won't try to add word longer than it needs to be
                    var wordsOfSameLength = this.randomChar(choppedWordsList);     // return array of words of the same length
                    var temp = this.randomChar(wordsOfSameLength);                // pick random word
                    temp = this.capitalizeFirst(temp,1);
                    words_pass += temp;
                }
            }
        return words_pass;
    }
    
    another(){
        var x=this.wordsPassword();
        if (x.length!=this.passwordLen) {
            return this.another();
        } else {
            return x;
        }
    }
}

// let uno = new PasswordGenerator(30);

// uno.password=uno.totallyRandom(uno.passwordLen, uno.charPool(true,true,true,true));
// console.log(uno.password);

// uno.passwordPin = uno.addNumbers('',uno.passwordLen);
// console.log(uno.passwordPin);

// uno.passwordTwo = uno.mixed();
// console.log(uno.passwordTwo);

// uno.passwordThree = uno.wordsPassword();
// console.log(uno.passwordThree);

// uno.passwordFour = uno.another();
// console.log(uno.passwordFour);

// console.log('\n');



