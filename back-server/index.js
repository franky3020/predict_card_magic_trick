const express = require('express')
const cors = require('cors')

const versionList = require("./version.json");

const app = express()
app.use(cors())
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/appVersion', (req, res) => {
  res.send(versionList)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})