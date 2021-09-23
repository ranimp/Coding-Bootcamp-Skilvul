/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

/// Pengeluaran
/// gundam = 750000
/// makan = 2000000
/// kost = 1000000
/// subscription = 250000

/// Gaji
/// gajiPokok = 5000000
/// gajiBonus = 10% dari gajiPokok
/// gajiLembur = 5% dari gajiPokok

/// Sisa Gaji
let gundam = 750000;
let makan = 2000000;
let kost = 1000000;
let subscription = 250000;
let gajiPokok = 5000000;
let gajiBonus = gajiPokok*0.1;
let gajiLembur = gajiPokok*0.05;

const totalPengeluaran = gundam + makan + kost + subscription;
const totalGaji = gajiPokok + gajiBonus + gajiLembur;
const sisaGaji = totalGaji - totalPengeluaran;
console.log(sisaGaji);

/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;
const isSame = (oneInString == oneInNumber);
console.log(isSame);


/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;
const isHigher = (studentA >= studentB);
console.log(isHigher);

/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const final = (oneInString === oneInNumber);
console.log(final);

