/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/*
- Type error -> TypeError muncul jika kita menggunakan nilai yang berada di luar kisaran tipe yang diharapkan
    contoh : ketika ingin mengubah data dengan tipe number menjadi uppercase, akan memunculkan TypeError
- Reference error -> ReferenceError muncul jika kita menggunakan (referensi) variabel yang belum dideklarasikan.
    contoh : ketika kita memanggil suatu variabel ke dalam suatu variabel, tetapi variabel yang dipanggil itu belum dideklarasikan sebelumnya
- Range error -> RangeError muncul jika kita menggunakan angka yang berada di luar rentang nilai legal.
    contoh : ketika kita ingin mengatur jumlah dikit pada suatu angka menjadi 500 digit, maka akan muncul RangeError karena 500 digit itu angka yang
    terlalu besar dan hampir tidak ada yang menggunakan nya.
- Syntax error -> SyntaxError menunjukkan kesalahan saat mencoba menafsirkan kode yang tidak valid secara sintaksis
*/


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/* 
- mengalami undefined dan error
- termasuk ke dalam Reference error
- hal tersebut bisa terjadi dikarenakan variabel yang dideklarasikan di akhir, sehingga pendeklarasian belum terdeteksi saat melakukan pengecekan dengan console.log.
*/
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
