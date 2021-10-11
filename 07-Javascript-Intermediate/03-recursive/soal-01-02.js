// soal - 01
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
    if(arr.length === 0){
        return 0
    }
    const nilai = arr [0]
    return nilai + sumOfArray (arr.slice(1))
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// soal - 02
const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;
function countAboveAvg(arr, avg) {
    if(arr.length === 0) {
        return 0
    }
    return (arr[0] > avg) + countAboveAvg(arr.slice(1), avg);
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);