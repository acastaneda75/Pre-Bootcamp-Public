/* 
    MERGE SORT
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
        1. create a merge function to merge two already sorted arrays into a single
            sorted array.
        - you do NOT need to work in place, ok to use a new array
    EXAMPLE: merge([1,4,5], [2,3,6]) will return [1,2,3,4,5,6]
*/
function merge(nums1, nums2){
    let newArray = []
    for(let i = 0; i < nums1.length; i++){
        if(nums1[i] < nums2[i]){
        newArray.push(nums1[i]);
        newArray.push(nums2[i]);
    }   else{
        newArray.push(nums2[i]);
        newArray.push(nums1[i]);
    }
    }
    return newArray
}

console.log(merge([1,4,5], [2,3,6]))
/*
        2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
            previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
            can therefore be merged into a sorted array.
*/
function mergeSort(nums){
    if (nums.length < 2){
        return nums;
    }
    for(let i = 0; i < nums.length/2; i++){
        console.log(nums.slice(nums.length/2));
    }
    return nums
}

console.log(mergeSort([1,4,5,2,3,6]))



// Recursion sample: 
function sum(num){
    if(num === 1){ // this is our base case, because once num hits 1, we don't want to keep reducing it, as it doesn't add more information that's useful or accurate
        return 1;
    }

    return num + sum(num-1); // this is our recursive case, because it's where the function calls itself
}