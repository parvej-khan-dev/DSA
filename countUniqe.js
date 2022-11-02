// [1,1,2,3,4,5,6,6,7,7,8]
// counte Uniqe number

// function uniqeNumber(arr) {
//   //   get uniqe number count
//   //get uniqe value
//   let a = null;
//   let res = 0;
//   arr.forEach((item) => {
//     // console.log(a);
//     if (a !== item) {
//       a = item;
//       res++;
//     }
//   });
//   return res;
// }

// another method
function uniqeNumber(arr) {
  if (arr.length > 0) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Arrty is Empty");
  }
}

const result = uniqeNumber([1, 1, 2, 3, 4, 5, 6, 6, 7, 7, 8]);
console.log(result); // exp: 8 but get : 1

//time complixcity p(n)
