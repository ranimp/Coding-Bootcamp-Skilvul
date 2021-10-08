// Soal - 01

const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(number) {
    let newArr = [];     // definisikan penampung array baru
    // cek kondisi
    if (number == arr) {
        // melakukan perulangan dengan forEach
        arr.forEach(num => {
            // memasukkan data ke array baru dari belakang
            newArr.unshift(num)
        });
        // kembalikan array baru
        return newArr;
    }
    else {
        arr2.forEach(num => {
            newArr.unshift(num)
        });
        return newArr;
    }
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

// Soal - 02
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(number) {
    let output = [];  // definisikan penampung output array
    let sum = 0; // definisikan penampung hasil sum semua element array
    let count = number.length; // definisikan panjang array sebagai pembagi untuk mencari rata"
    let averageNumber = 0; // definisikan penampung untuk hasil rata"

    // cek kondisi
    if (number == arr1) {
        // melakukan perulangan untuk menghitung jumlah sum element
        arr1.forEach((item) => {
            sum += item
        });
        // menghitung rata"
        averageNumber = (sum/count).toFixed(0);
        averageNumber = Number(averageNumber); //konversi string ke number

        // melakukukan pengecekan untuk mencari angka yang lebih dari hasil rata"
        for (let i = 0; i < number.length; i++){
            if (number[i] > averageNumber) {
                // memasukkan hasil ke penampung output
                output.push(arr1[i])
            };
        };
    // mengembalikan panjang output untuk mendapatkan ada berapa angka yang lebih dari rata"
    return output.length;
    }
    else if (number == arr2) {
        arr2.forEach((item) => {
            sum += item
        });
        averageNumber = (sum/count).toFixed(0)
        averageNumber = Number(averageNumber)
        for (let i = 0; i < number.length; i++){
            if (number[i] > averageNumber) {
                output.push(arr2[i])
            };
        };
    return output.length
    };
};
console.log(getAverage(arr1))
console.log(getAverage(arr2))

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

