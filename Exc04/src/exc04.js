const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.post('/', (req, res) => {
    const last_name = req.body.last_name

    res.send({
        "last_name": last_name,
        "tamanho": last_name.length
    })
})

app.listen(3000)