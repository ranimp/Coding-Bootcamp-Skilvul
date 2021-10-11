// Soal - 01

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