//https://leetcode.com/problems/find-the-duplicate-number/

// [2,2,2,2,2]  -> test 1
// [1,3,4,2,2]  -> test 2
function findDuplicate(nums) {
  let sortNums = nums.sort();
  let map = {};
  for (let i of sortNums) {
    map[sortNums[i]] = map[sortNums[i]] || 0 + 1;
  }
  console.log(map, "map");
}

let res = findDuplicate([1, 3, 4, 2, 2]);
console.log(res, "res");
