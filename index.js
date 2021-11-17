let express = require("express");
let fs = require("fs")
let app = express()
const PORT = 8080;

let data = fs.readFileSync("./productos.txt", "utf-8")

app.get("/productos", (req, res) => {
    res.send(data)
})

app.get("/productoRandom", (req, res) => {
    let array = JSON.parse(data)
    let numberRandom = Math.floor(Math.random() * array.length)
    res.send(array[numberRandom])
})

app.listen(PORT, () => {
    console.log(`Mi servidor escuchando desde http://localhost:${PORT}`);
})
