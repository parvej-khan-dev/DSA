// array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//numer = 7
// problem statement is find the index of number 7

//we use divide & conquer method that is called binaery search in ds algo
// min = 0
// max = array.length -1
// mid = (min + max ) / 2    midIndex = 7 , element = 8
// conditions
// if array[midIndex] < Number
// min = midIndex + 1
// if arrray [midIndex ]  > Number
// max = midIndex -1

// min is index of

function searchalgo(array, number) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);
    console.log(" min " + min + " midIndex " + midIndex + " max " + max);
    if (array[midIndex] < number) {
      min = midIndex + 1;
      console.log("arry[midindex]", array[midIndex]);
    } else if (array[midIndex] > number) {
      max = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

let result = searchalgo(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  14
);
console.log(result);

// Time Complixcity is log(n)  binary 
