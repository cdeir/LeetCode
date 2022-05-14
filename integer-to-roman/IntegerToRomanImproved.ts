/* https://leetcode.com/problems/integer-to-roman/ */

// Using two separate arrays, one for numbers and one for numerals:
// (1) is *slower* than an array of key-value pairs
// (2) uses *less memory* than array of key-value pairs

// Convert integer to roman numeral string
function intToRomanImproved(num: number): string {
    let romanString: string = "";
    let remainingInputNum: number = num;

    // split the key-value pairs into two separate arrays after a scroll through the solution.
    const numberValues = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    const romanNumValues = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]

    // pointer helps us iterate through array of possible letters/numbers
    let pointer = numberValues.length - 1;

    // if positive, 
    while(remainingInputNum > 0){

        // if the symbol in array is greater than our input num, go to the next symbol
        if(remainingInputNum - numberValues[pointer] < 0){
            pointer--;
        } else {
            // else, add symbol to our string and reduce our remainder
            romanString = romanString + romanNumValues[pointer];
            remainingInputNum = remainingInputNum - numberValues[pointer];
        }
    }

    return romanString;
};