
const express = require("express")
const app = express()

const products = [{
    id: 1,
    name: "product 1",
}]

const port = process.env.PORT || 3000

app.use(express.json())

app.get("/ping", (req, res) => {
    const ready = {
        ready: true,
        timestamp: Date.now().toString()
    }

    res.status(200).send(ready)
})

app.post("/product", (req, res) => {
    
    const productName =  req.body.name;

    const newProduct = {id: products.length + 1, name: productName}

    products.push(newProduct)
    res.status(201).send(newProduct)
})

app.get("/product", (req, res) => {
    res.status(200).send(products)
})



app.get("/product/:id", (req, res) => {
    const { id } = req.params
    const product = products.find(p => p.id == id)
    if(!product) {
        res.status(404).send({message: 'product not found'})
        return
    }

    res.status(200).send(product)
})



app.listen(port, () => {
    console.log("server is listening on port", port)
})