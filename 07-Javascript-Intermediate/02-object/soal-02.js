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
  
