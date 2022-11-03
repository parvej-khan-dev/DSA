// find in index of target value that iś aviablé in array
// iƒ target value is not aviablé then return -1 ;
// Input: nums = [-1,0,3,5,9,12], target = 9
// -> breack in two parts anď get mid index
// let midIndex = nums[min] + nums[max]/ 2

function getInex(nums, target) {
  let min = 0;
  let max = nums.length - 1;

  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);
    if (nums[midIndex] < target) {
      min = midIndex + 1;
    } else if (nums[midIndex] > target) {
      max = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

let result = getInex([-1, 0, 3, 5, 9, 12], 9);
console.log(result);
