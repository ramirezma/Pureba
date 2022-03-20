const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const publicPath = path.join(__dirname, "../public")

app.use(express.static(publicPath));

app.listen(PORT, () => {
    console.log("Se inició el servidor en el puerto " + PORT)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})