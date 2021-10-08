// // Soal - 01

const person = {
    name: "person A",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function(name) {
      console.log("hello world") 
    }
  }
  
/// EDIT HERE
person.name = "Rani"  // merubah field name
person.favDrinks[1] = "tap water" // merubah field fafDrinks
// merubah fungsi greeting
person.greeting = function(name) {
    return `Hello, ${name}` 
}
/// STOP

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));
  
// Soal - 02
function getObjectValue(obj, path) {
    const paths = path.split('.')  // variabel penampung untuk mencari field yang dituju
    // melakukan pengecekan apakah field yang dituju tersedia atau tidak
    for (let i = 0; i < paths.length; i++) {
      if (obj[paths[i]] == undefined) {
        return null;
      } else {
        obj = obj[paths[i]];
      }
    }
    return obj;
}

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);

// soal-03

// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
    {
      btc: { buy: 10, sell: 9 },
      eth: { buy: 8, sell: 7.5 },
      doge: { buy: 7, sell: 6.5 },
      day: 1,
    },
    {
      btc: { buy: 9, sell: 5 },
      eth: { buy: 7, sell: 4 },
      doge: { buy: 6, sell: 3 },
      day: 2,
    },
    {
      btc: { buy: 5, sell: 10 },
      eth: { buy: 4, sell: 6 },
      doge: { buy: 3, sell: 4 },
      day: 3,
    },
  ];
  
  
  const calculateIncome = (items) => {
    /// EDIT DOWN HERE
    // deklarasi var untuk menampung hasil sell - buy tiap koin
    let sumBTC = 0
    let sumETH = 0
    let sumDOGE = 0
    // deklarasi array untuk menampung hasil output perhitungan
    let arrBTC = []
    let arrETH = []
    let arrDOGE = []
    // perulangan untuk melakukan proses perhitungan dan memasukkan ke array
    for (let i = 0; i < items.length; i++) {
      // proses perhitungan sell - buy tiap koin
      sumBTC = items[i].btc.sell - items[i].btc.buy
      sumETH = items[i].eth.sell - items[i].eth.buy
      sumDOGE = items[i].doge.sell - items[i].doge.buy
      // proses memasukkan output ke dalam array kosong
      arrBTC.push(sumBTC)
      arrETH.push(sumETH)
      arrDOGE.push(sumDOGE)
    }
    // membuat fungsi reducer
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    // melakukan method reduce() di dalam object
    items = {
      btc : arrBTC.reduce(reducer),
      doge : arrDOGE.reduce(reducer),
      eth : arrETH.reduce(reducer)
    }
    // mengembalikan nilai items
    return items
  }


console.log(calculateIncome(items))
  
