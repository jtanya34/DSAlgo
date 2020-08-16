/**
 * Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 */

 /**
  * Example 1:
  * Given nums = [3,2,2,3], val = 3,
  * Your function should return length = 2, with the first two elements of nums being 2.
  * It doesn't matter what you leave beyond the returned length.
  */
 /**
  * Clarification:
  * Confused why the returned value is an integer but your answer is an array?
  * Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.
  * Internally you can think of this:
  */


  // Solution

  var removeElement = function(nums, val) {
    let j=0;
    let length=nums.length
    for(let i=0;i<length;i++){
        if(nums[i]!==val){
            nums[j]=nums[i]
            j++
        }
    }
    return j
};