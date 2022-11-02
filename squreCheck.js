// [1,2,3,4,5]   [1,4,16,9,25]

// check array 1 squre is exited in array and not  if then true otherwise false;

//condition 1
// array1[i ] 8 array [i]  === array[j ] return true else false


// function squreCheck(array1, array2) {
//     for (let i = 0; i < array1.length; i++) {
//         let isSqure = false;
//         for (let j = 0; j < array2.length; j++) {
//             // condition squreCheck
//             if (array1[i] * array1[i] === array2[j]) {
//                 isSqure = true
//             }
//             if (j === array2.length - 1) {
//                 if (!isSqure) {
//                     return false
//                 }
//             }
//         }

//     }
//     return true

// }

// anoter methoods 

// var arr1 = [1, 2, 3, 4]
// var arr2 = [1, 4, 9, 16, 45]

function findSquare(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        var isSquare = false;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] * arr1[i] == arr2[j]) {
                isSquare = true;
            }
        }
    }
    return isSquare;
}

let check = findSquare([1, 2, 3, 4, 5], [1, 4, 16, 9, 45])
console.log(check);


// time complixty is o(n)2