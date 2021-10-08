let arrObjCars = [
    {
      producent: "honda",
      name: "CRV",
      type: "SUV",
      color: "red"
    },
    {
      producent: "toyota",
      name: "Rush",
      type: "SUV",
      color: "white"
    }
  ]
  
  arrObjCars[0].color = 'green'
  
  for (let i = 0; i < arrObjCars.length; i++) {
    if (arrObjCars[i].producent === 'honda') {
      arrObjCars[i].type = 'family car'
    }
  }
  
  // console.log(arrObjCars)
  
  // console.log(arrObjCars[0].producent)
  
  // { producent: 'honda', 
  //   name: 'CRV', 
  //   type: 'SUV', 
  //   color: 'red' 
  // }
  
  class Car {
    constructor({ producent, nama, type, color }) {
      this.producent = producent || 'honda'
      this.nama = nama || 'CRV'
      this.type = type || 'SUV'
      this.color = color || 'red'
      this.price = 300000000
    }
  
    upPrice() {
      this.price += 10000000
      return this
    }
  
    downPrice() {
      this.price -= 20000000
      return this
    }
  }
  
  // return price => honda.price
  // return this => honda
  
  const honda = new Car({
    producent : 'subaru',
    color : 'white'
  })
  
  // chaining method
  honda.upPrice().upPrice().downPrice().upPrice()
  
  // honda.upPrice()
  // honda.upPrice()
  // honda.downPrice()
  // honda.upPrice()
  
  console.log(honda, "ini instance honda <<<<")
  console.log(honda.price, "ini price honda <<<<<<")