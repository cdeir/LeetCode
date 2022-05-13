/* https://leetcode.com/problems/merge-sorted-array/ */


/**
 Do not return anything, modify nums1 in-place instead.
 nums 1, nums2 are sorted arrays in non-descending order
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    // Output: [1,2,2,3,5,6]
    // Edge case nums1 all zeros (as m = 0)
    // Edge case nums2 || nums1 empty array
    let indexTracker: number = nums1.length - 1;
    let nums1Index: number= m - 1;
    let nums2Index: number = n - 1; 


    // start from the end of nums1 and work our way back
    while(indexTracker >= 0){
        
        // handle edge cases & if we've already inserted all of one array
        if(nums1Index < 0 && nums2Index >= 0){
            nums1[indexTracker] = nums2[nums2Index];
            nums2Index--;
        } else if(nums2Index < 0 && nums1Index >= 0) {
            nums1[indexTracker] = nums1[nums1Index];
            nums1Index--;
        } else {
            // insert the greater of the two and decrement respective index
            if(nums2[nums2Index] >= nums1[nums1Index]){
                nums1[indexTracker] = nums2[nums2Index];
                nums2Index--;
            } else {
                nums1[indexTracker] = nums1[nums1Index];
                nums1Index--;
            }
        }

        indexTracker--;
    }
};
