// SOAL
// 1. Apa itu synchronous?
// 2. Apa itu asynchronous?
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
// for (var i = 1; i<=5; i++) {
//   console.log("first log: ", i); // 01 - Pertama
//   setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
// }

// JAWAB
// 1. synchronous merupakan mode default dalam proses eksekusi suatu perintah pada kode.
// 2. asynchronous merupakan kode yang tidak akan langsung dieksekusi mengikuti jadwal eksekusi yang sudah ditentukan
// 3. bisa, karena penggunaan synchronous sangat lemah digunakan jika digunakan untuk proses pengolahan yang sifatnya berat
//    yang dimana jika kita melakukan pekerjaan tersebut secara synchronous, proses runtime akan terblokade hingga pekerjaan tersebut selesai dijalankan.
// 4. first log : 1
//    first log : 2
//    first log : 3
//    first log : 4
//    first log : 5
//    second log : 6
//    second log : 6
//    second log : 6
//    second log : 6
//    second log : 6
// 5. terjadi ketidaksamaan dalam proses cetak hasil, karena pada second log kita memasang timeout sebanyak 100 milisecond, tidak terlalu terlihat
//    tetapi jika kita periksa waktu komputasinya kita bisa melihat perbedaan waktu tersebut

// NOMOR 6.
for (let i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
  }








