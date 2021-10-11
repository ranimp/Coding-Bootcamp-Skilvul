// soal - 01

// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// akan menghasilkan output :
// fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
//fun2 {}
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// tidak
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
// karena pada fun2, fungsi/method tidak dideklarasikan dengan benar, sehingga yang keluar hanyalah {}
const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
  };
  
  obj.fun1();
  obj.fun2();