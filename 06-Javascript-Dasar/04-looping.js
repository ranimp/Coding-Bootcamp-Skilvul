/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
// EDIT HERE


for (let i = 2; i <= 100; i++) {
    let pembagi = 0
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            pembagi += 1
       }
    }
    if (pembagi === 2) {
        console.log(i)
    }
}



// /// Soal - 02
// /// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop

// let primeCounter = 0;
// const fiftiethPrime;

// /// EDIT HERE
// while (....) {}


// /// Soal - 03
// /// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop

// let oddCounter = 0;
// const fiftiethOdd;
// do { .... } while (....)