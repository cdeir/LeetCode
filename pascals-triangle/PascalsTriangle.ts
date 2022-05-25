/* https://leetcode.com/problems/pascals-triangle/ */
/* Difficulty: Easy */

//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1



// Of the strings passed in, find the longest common prefix
function generate(numRows: number): number[][] {
    let output: number[][] = (numRows > 0 ? [[1]] : []);
    let currentRow = 1;
    while(currentRow < numRows){
        // form the array
        let prevArray: number[] = output[currentRow - 1];

        // will always have a 1 for starters
        let tempArray: number[] = [1]
        // let's say our prevArray = [1, 3, 3, 1], currentRow would be 4?
        for(let i = 0; i < currentRow - 1; i++){
            let sumToAdd: number = prevArray[i] + prevArray[i+1];
            tempArray.push(sumToAdd);
        }
        tempArray.push(1);

        // push the array -> output
        output.push(tempArray);
        currentRow++;

    }

    return output;
}