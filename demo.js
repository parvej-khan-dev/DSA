// problem 1 check sum of zero giving array

// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     // console.log("i", i);
//     for (let j = 1; j < arr.length; j++) {
//       //   console.log("j", j);
//       if (arr[i] + arr[j] === 0) {
//         console.log([arr[i], arr[j]]);
//       }
//     }
//   }
// }

// sumZero(arr);

function findSum(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      let result = [arr[left], arr[right]];
      return result;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// let arr =;
const res = findSum([-5, -4, -3, -2, -1, 0, , 2, 4]);
console.log(res);
