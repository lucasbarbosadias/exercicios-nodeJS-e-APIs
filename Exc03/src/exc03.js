const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.post('/salario/liquido', (req, res) => {
    const salarioBruto = req.body.salarioBruto

    const liquido = (bruto) => bruto -= bruto * 0.15

    res.send({
        "salarioLiquido": liquido(salarioBruto)
    })
})

app.listen(3000)