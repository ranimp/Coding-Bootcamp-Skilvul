// soal-01
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
// function sumOfArray(array) {
//     let total = 0;
//     let count = array.length
//     if (array.length <= 0) {
//         return 0;
//       } else {
//         total = array.pop() + sumOfArray(array);
//         return total
//       } 
// }

// console.log(sumOfArray(arr1));
// console.log(sumOfArray(arr2));

//soal - 02
function sumOfArray(array) {
  let total = 0;
  let count = array.length
  if (array.length <= 0) {
      return 0;
    } else {
      total = array.pop() + sumOfArray(array);
      return total
    } 
}
const avg1 = sumOfArray(arr1) / arr1.length;
console.log(arr1.length)
// const avg2;
// function countAboveAvg(arr,avg) {

// }

// const totalAboveAvg1 = countAboveAvg(arr1, avg1);
// const totalAboveAvg2 = countAboveAvg(arr2, avg2);

// console.log(totalAboveAvg1);
// console.log(totalAboveAvg2);
