/// Soal - 01
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/*
- yang tampil dalam console.log adalah "Mariah"
- alasannya, karena yang di console.log adalah fungsi printFirstName, dan variabel name = "John Watson" 
berada di luar lingkup function printFirstName meskipun pada function printFirstName memiliki parameter name.
penggunaan function yaitu dengan memanggil nama function tersebut, beserta argumen sesuai dengan parameter nya, hal ini 
menyebabkan name yang sudah di deklarasikan sebelum function, menjadi tidak ada artinya.
*/

const name = "John Watson";
function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan terjadi apabila kita mencoba menjalankan baris kode dibawah?
/// - apa alasan kenapa hal tersebut bisa terjadi?
///   - dari segi salaryWithVar
///   - dari segi salaryWithConst

/// WRITE YOUR ANALYSIS HERE
/* 
- yang terjadi adalah kode tidak bisa dijalankan baik itu undefined ataupun error
- hal tersebut bisa terjadi dikarenakan variabel yang dideklarasikan di akhir, sehingga pendeklarasian belum terdeteksi saat melakukan pengecekan dengan console.log 
    - dari segi salaryWithVar -> akan menghasilkan output undefined, hal ini dikarenakan
    pendeklarasian variabel dengan menggunakan var, yang dimana jika menggunakan var, maka variabel apapun jika mengalami ketidak-sesuaian
     akan menghasilkan output "undefined"
    - dari segi salaryWithConst -> akan menghasilkan output error, hal ini dikarenakan
    pendeklarasian variabel dengan menggunakan const, yang dimana jika variabel tidak atau belum terdeklarasi sebelum pemanggilan, maka
    akan muncul pesan error bahwa variabel tersebut belum terinisialisasi. 
*/
// console.log(salaryWithVar)
// console.log(salaryWithConst)

// var salaryWithVar = 15000000;
// const salaryWithConst = 15000000;


/// PERTANYAAN BARU -UPDATE
/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/*
- ada 2, yaitu global variable dan local variable
- Global variables adalah variabel yang dideklarasikan di luar blok. Local variables adalah variabel yang dideklarasikan di dalam suatu blok bisa berupa function-scoped atau block-scoped.
*/
let globalLuar = "Variabel Global";

function fungsi(){
    let lokal = "Variabel Lokal";
    console.log(globalLuar + " bisa diakses di dalam fungsi");
    console.log(lokal + " hanya bisa diakses di dalam fungsi");
}

fungsi();
console.log(globalLuar + " juga bisa diakses di luar fungsi");
console.log(lokal); // tidak bisa diakses di luar fungsi