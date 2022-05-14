/* https://leetcode.com/problems/integer-to-roman/ */

// For our array
type dict = {
    letter: string;
    num: number;
}

// Convert integer to roman numeral string
function intToRoman(num: number): string {
    let romanString: string = "";
    let remainingInputNum: number = num;

    // Create a hash for the roman numerals
    const numeralHash: Array<dict> = [{
        letter: "I",
        num: 1
    }, {
        letter: "IV",
        num: 4
    }, {  
        letter: "V",
        num: 5
    }, {
        letter: "IX",
        num: 9
    }, {   
        letter: "X",
        num: 10
    }, {
        letter: "XL",
        num: 40
    }, {
        letter: "L",
        num: 50
    }, {
        letter: "XC",
        num: 90
    }, {
        letter: "C",
        num: 100
    }, {
        letter: "CD",
        num: 400
    }, {
        letter: "D",
        num: 500
    }, {
        letter: "CM",
        num: 900
    }, {
        letter: "M",
        num: 1000
    }];

    // pointer helps us iterate through array of possible letters
    let pointer = numeralHash.length - 1;

    // if positive, 
    while(remainingInputNum > 0){

        // if the symbol in array is greater than our input num, go to the next symbol
        if(remainingInputNum - numeralHash[pointer].num < 0){
            pointer--;
        } else {
            // else, add symbol to our string and reduce our remainder
            romanString = romanString + numeralHash[pointer].letter;
            remainingInputNum = remainingInputNum - numeralHash[pointer].num;
        }
    }

    return romanString;
};