class Kue {
    constructor(rasa, topping) {
        this.rasa = rasa
        this.topping = topping
        this._harga = 100000
    }
    get getHarga(){
        return this._harga
    }
    set setHarga(newHarga){
        this._harga = newHarga
    }
}

const tart = new Kue("red velvet", "stroberi")
tart.setHarga = 200000
console.log(tart)