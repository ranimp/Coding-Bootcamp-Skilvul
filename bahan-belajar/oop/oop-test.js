
// employee.positionHistory[1] = "mentor tfi"

// console.log(employee.positionHistory[1]);

// let employee = {
//   name : "haikal",
//   age : 17,
//   salary: 3000000,
//   position: "mentor",
//   positionHistory: ["staff", "mentor"]
// }

// encapsulation
// abstraction
// inherit
// poli

// harus memilik class

class Employee {
  constructor({name = 'Haikal' , age, salary, position, positionHistory}) {
    this.name = name
    this.age = age || "not inputed"
    this._salary = salary || 3000000
    this.position = position || "staff"
    this.positionHistory = positionHistory || []
  }

  // getter // accesor

  get getSalary() {
    return this._salary
  } 

  // setter untuk mengganti value dari sebuah private prop
  set setSalary(value) {
    this._salary = value
  }


  // class method
  profile() {
    return `
    name: ${this.name}, age: ${this.age}
    `
  }

  gainSalary() {
    this._salary += 1000000
    return this
  }

  minusSalary() {
    this._salary -= 2000000
    return this
  }
}

// encapsulation : private / public property

// instance dari sebuah class
// const haikal = new Employee("haikal", 17, 3000000, "mentor", ["staff", "mentor"])

// console.log(haikal) // ini untuk eksekusi getter
// haikal.setSalary = 2000000 // ini untuk eksekusi setter

// haikal.gainSalary() // harus di invoke untuk method buatan

// method chaining
// haikal.minusSalary().gainSalary()

// inherit

class Manager extends Employee {
  constructor(name , age, salary, positionHistory) {
    super(name , age, salary, "Manager", positionHistory)
  }

  //overiding

  // ini untuk menambah gaji si manajer
  gainSalary() {
    this._salary += 5000000
    return this
  }
}

const haikal = new Employee({age: 16, salary: 3000000})

// static method

// factory method 

haikal.gainSalary().minusSalary().minusSalary()

// console.log(haikal.gainSalary())
console.log((haikal));
// console.log(haikal.profile()) // ini untuk memanggil class method
