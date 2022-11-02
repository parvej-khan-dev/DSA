// sort a Array

// array = [2,1,3,4]
// first =
// second
// if first < second => first++ , second++, run function again
// if first > second => [arry[first], array[second]] = [aray[second], array[first]]

// check sortest array
function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

// let check = isSorted(array1, "isSorted");
// console.log("check", check);

// [1,2,3,4]
let array1 = [1, 3, 2, 4];
let newArray = [];
let i = 0;
let j = 1;

function checkSort(array) {
  if (isSorted(array)) {
    newArray = array;
    console.log("first");
    return;
  } else if (array[i] < array[j]) {
    i++;
    j++;
    checkSort(array);
    console.log("secod");
  } else {
    [array[i], array[j]] = [array[j], array[i]];
    i = 0;
    j = 1;
    checkSort(array);
    console.log("thirtd");
  }
}

let res = checkSort(array1);
console.log(newArray); // final sortet array;
