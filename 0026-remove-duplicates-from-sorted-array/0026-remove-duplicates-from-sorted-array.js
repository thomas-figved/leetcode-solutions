/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let leftPointer = 0
    let rightPointer = 1

    if(nums.length==1) {
        return nums
    }

    while(rightPointer<nums.length) {
        if(nums[leftPointer] != nums[rightPointer]){
            nums[leftPointer+1] = nums[rightPointer]
            leftPointer++
        }
        rightPointer++
    }

    return leftPointer+1
};