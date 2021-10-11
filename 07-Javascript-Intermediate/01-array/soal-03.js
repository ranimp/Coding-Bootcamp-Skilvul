// Soal - 03
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
function searchInArray(arr, num) {
    let convArr = [] // definisikan variabel untuk menampung perubahan array dua dimensi menjadi satu dimensi
    convArr = arr.join().split(","); // melakukan perubahan array
    convArrNum = convArr.map(i=>Number(i)); // merubah string menjadi number

    // melakukan pengecekan untuk mengetahui apakah angka ada di dalam array atau tidak
    for (let i = 0; i < convArrNum.length; i++) {
        if(convArrNum[i] == num){
            return i  // mengembalikan index
        }
    }
    return null
}


console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));