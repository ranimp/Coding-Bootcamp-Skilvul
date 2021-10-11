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