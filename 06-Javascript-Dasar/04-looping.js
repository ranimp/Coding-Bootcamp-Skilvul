/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
// EDIT HERE
let hasil = ""
for (let angka = 2; angka <= 100; angka++) {
    let pembagi = 0    
    for (let ulang = 1; ulang <= angka; ulang++) {
        if (angka % ulang === 0) {
            pembagi += 1
       }
    }
    if (pembagi === 2) {
        hasil += angka + ", "
    } 
}
console.log(hasil)

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop

let primeCounter = 0;
let fiftiethPrime = 2;

/// EDIT HERE - 229
let max_num = 1000

while(fiftiethPrime <= max_num){
    let pembagi = 0
    let ulang = 1
    while(ulang <= fiftiethPrime){
        if (fiftiethPrime % ulang === 0) {
            pembagi += 1
        }
        ulang++
    }
    if (pembagi === 2) {
        primeCounter++
        if(primeCounter == 50){
            console.log(fiftiethPrime)
            break
        }
    } 
    fiftiethPrime++
}


// / Soal - 03
// / Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop

let oddCounter = 0;
let fiftiethOdd = 1;
let max = 1000;

do {
    if (fiftiethOdd % 2 === 1) {
        oddCounter++
        if(oddCounter === 50){
            console.log(fiftiethOdd)
            break
        }
    }
    fiftiethOdd++
} while (fiftiethOdd <= max)