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

