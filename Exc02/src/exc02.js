const express = require("express")
const axios = require("axios")
const app = express()

const convFahrenheit = (celsius) => celsius * 1.8 + 32

app.get("/infoday", function (req, res) {
  let date = new Date().toLocaleString("pt-BR")

  axios
    .get("https://api.hgbrasil.com/weather?woeid=455931")
    .then((response) => {
      const { temp } = response.data.results;

      const infoDay = [
        {
          "date": date,
          "fahrenheit": convFahrenheit(temp),
        },
      ]

      res.send(infoDay)
    })
    .catch((error) => {
      res.send(error)
    })
})

app.listen(3000)
