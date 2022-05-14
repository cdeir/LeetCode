/* https://leetcode.com/problems/roman-to-integer/ */

function romanToInt(s: string): number {
    // For each roman numeral, add to final sum. 
    let finalSum: number = 0;
    
    interface IHash {
        [letter: string] : number;
    }    

    // Create a hash for the roman numerals
    const numeralHash: IHash = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    for(let charCount = 0; charCount < s.length; charCount++){
        // check for the negative
        if(s.charAt(charCount) === "I" && charCount < s.length - 1 && (s.charAt(charCount + 1) === "V" || s.charAt(charCount + 1) === "X")){
            finalSum = finalSum - numeralHash[s.charAt(charCount)];
        } else if(s.charAt(charCount) === "X" && charCount < s.length - 1 && (s.charAt(charCount + 1) === "L" || s.charAt(charCount + 1) === "C")) {
            finalSum = finalSum - numeralHash[s.charAt(charCount)];
        } else if(s.charAt(charCount) === "C" && charCount < s.length - 1 && (s.charAt(charCount + 1) === "D" || s.charAt(charCount + 1) === "M")){
            finalSum = finalSum - numeralHash[s.charAt(charCount)];
        } else {
            // we can just add the number equivalent to the sum
            finalSum = finalSum + numeralHash[s.charAt(charCount)];
        }
    }

    return finalSum;
}