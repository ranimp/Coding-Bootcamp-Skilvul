const arr1 = [1, 3, 4, 1, 2, 8];
// const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(number) {
  let output = [] // definisikan output paling atas jangan di tengah
    
  // proses mencari nilai rata rata
  let total = 0;

  // let count = 0; count ga di butuhkan perhitungan di sini pakai length aja ya lebih baik 
  let count = arr1.length
  console.log(count, "<< ini count")

  // buat helper yang nanti akan di gunakan untuk menampung average
  let averageNumber = 0

    // proses ini sudah tepat ya
    if (number == arr1) {
        arr1.forEach((item) => {
            total += item
        })
    }

    // proses pencarian average dan set average
    averageNumber = (total/count).toFixed(0)
    
    // hasil toFixed itu menghasilkan tipe data string, jadi di ubah dlu jadi number lagi
    averageNumber = Number(averageNumber)

        for (let i = 0; i < number.length; i++){
            // ini yang di bandingkan nilai yang sedang di looping dengan 
            if (number[i] > averageNumber) {
                output.push(arr1[i])
            }
        }

  // return itu harus di terakhir ya sebelum menutup sebuah function jangan di tengah2 proses, karena return sifatnya langsung mengakhiri semua proses
  return output
}
console.log(getAverage(arr1)) 

// function getAverage(number) {
//     if (number == arr1) {
//         let total = 0;
//         let count = number.length;
//         arr1.forEach((item) => {
//             total += item
//             count++
//         })
//         let hasil = (total / count).toFixed(0)
//         let lebihAvg = []
//         for (let i = 0; i < number.length; i++){
//             if (number[i] > hasil) {
//                 return lebihAvg.push(number.length[i])
//             }
//         }
//     }}

// soal 3
// let convArr = []
// for(let i = 0; i < arr.length; i++) {
//     convArr = convArr.concat(arr[i])
// }
// console.log(convArr)