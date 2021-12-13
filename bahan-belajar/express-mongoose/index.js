// import dependensi
const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const router = require("./routes/index")
const openDBConnection = require("./helpers/db")

const port = process.env.PORT || 3000
const uri = process.env.MONGO_URI
const options = {
    user : process.env.MONGO_USER,
    pass : process.env.MONGO_PASS
}

async function main() {
    try {
        await openDBConnection(uri, options)
        const app = express()
    
        // middleware
        app.use(cors())
        app.use(express.urlencoded({extended : false}))
        app.use(express.json())
        app.use(router)
        
        // server
        app.listen(port, () => {
            console.log(`server is listening on port ${port}`)
        })
    } catch (err) {
        console.log("main:", err);
    }
}

main()
