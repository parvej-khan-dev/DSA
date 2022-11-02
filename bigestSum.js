// get biggest consegative sum of array
// [1,2,3,4,5,6,7,8,9]

function biggestSum(array, num) {
  if (num > array) {
    throw new Error("this is Not Possible");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let tem = 0;
      for (let j = 0; j < num; j++) {
        tem += array[i + j];
      }
      if (tem > max) {
        max = tem;
        console.log(max);
      }
    }
    return max;
  }
}

const result = biggestSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 4);
console.log(result);
