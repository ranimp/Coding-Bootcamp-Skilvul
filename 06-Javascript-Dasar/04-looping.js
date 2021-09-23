/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
// EDIT HERE
let samping = ""
for (let i = 2; i <= 100; i++) {
    let pembagi = 0
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            pembagi += 1
       }
    }
    if (pembagi === 2) {
        samping = samping + " " + i
    } 
}
console.log(samping)

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop

let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE - 229
let max_num = 1000
let i = 2
while(i <= max_num){
    let pembagi = 0
    let j = 1
    while(j <= i){
        if (i % j === 0) {
            pembagi += 1
        }
        j++
    }
    if (pembagi === 2) {
        primeCounter++
        if(primeCounter == 50){
            fiftiethPrime = i
            console.log(fiftiethPrime)
            break
        }
    } 
    i++
}


// /// Soal - 03
// /// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop

// let oddCounter = 0;
// const fiftiethOdd;
// do { .... } while (....)