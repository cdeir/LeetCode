/* https://leetcode.com/problems/merge-two-sorted-lists/ */

// First define the ListNode class (from LC) - assumed to be number
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null){
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next)
    }
}

// Test input:
// list1 = [1, 2, 4]
// list2 = [1, 3, 4]



// User input:
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let list1NextPointer, list2NextPointer = null;

    // Edge cases: (1) null for both lists, (2) null for one of two lists
    if(list1 === null){
        return (list2 === null ? null : list2) ;
    } 
    if(list2 === null && list1 !== null){
        return list1;
    } 

    // if both list1 and list2 exist, we should get here. Therefore, find our new head
    let headToBeReturned = (list1.val <= list2.val ? list1 : list2);
    if(list1.val <= list2.val){
        list1NextPointer = list1.next;
        list2NextPointer = list2;
    } else {
        list2NextPointer = list2.next;
        list1NextPointer = list1;
    }
    // headToBeReturned.next = (list1.val <= list2.val ? list2 : list1);
    let mergedListPointer = headToBeReturned;


    // Each iteration through this while loop, we only want to add ONE link to the list.
    // Add the lowest of the two to the list.
    while(list1NextPointer !== null || list2NextPointer !== null){
        console.log(list1NextPointer.val, " <-- list1Pointer, list2Pointer --> ", list2NextPointer.val);
        if(list1NextPointer !== null && list2NextPointer !== null) {
            // set the next link in the list to the lesser of the two values.
            if(list1NextPointer.val <= list2NextPointer.val){
                mergedListPointer.next = list1NextPointer;
                list1NextPointer = list1NextPointer.next;
                
            } else {
                mergedListPointer.next = list2NextPointer;
                list2NextPointer = list2NextPointer.next;
                
            }
            mergedListPointer = mergedListPointer.next;

        } else if(list1NextPointer !== null) {
            mergedListPointer.next = list1NextPointer;
            list1NextPointer = list1NextPointer.next;
            mergedListPointer = mergedListPointer.next;
        } else {
            // this must mean list2NextPointer !== null
            mergedListPointer.next = list2NextPointer;
            list2NextPointer = list2NextPointer.next;
            mergedListPointer = mergedListPointer.next;
        }




    }


    return headToBeReturned;

}