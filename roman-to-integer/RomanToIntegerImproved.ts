/* https://leetcode.com/problems/roman-to-integer/ */

interface IHash {
    [letter: string] : number;
}

// Convert roman numeral to base 10 value
function romanToIntImproved(s: string): number {
    let finalSum: number = 0;
    
    // Create a hash to store roman numerals
    const numeralHash: IHash = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    // Loop through the string passed in
    for(let charCount = 0; charCount < s.length; charCount++){
        // Check for the negative before adding
        // If negative, process both current and next char
        if(s.charAt(charCount) === "I" && charCount < s.length - 1 && (s.charAt(charCount + 1) === "V" || s.charAt(charCount + 1) === "X")){
            finalSum = finalSum - numeralHash[s.charAt(charCount)] + numeralHash[s.charAt(charCount + 1)];
            charCount++;
        } else if(s.charAt(charCount) === "X" && charCount < s.length - 1 && (s.charAt(charCount + 1) === "L" || s.charAt(charCount + 1) === "C")) {
            finalSum = finalSum - numeralHash[s.charAt(charCount)] + numeralHash[s.charAt(charCount + 1)];
            charCount++;
        } else if(s.charAt(charCount) === "C" && charCount < s.length - 1 && (s.charAt(charCount + 1) === "D" || s.charAt(charCount + 1) === "M")){
            finalSum = finalSum - numeralHash[s.charAt(charCount)] + numeralHash[s.charAt(charCount + 1)];
            charCount++;
        } else {
            // We can just add the current char (number) to the sum.
            finalSum = finalSum + numeralHash[s.charAt(charCount)];
        }

    }

    return finalSum;
}