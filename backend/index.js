const express = require('express')
const app = express()
const port = 3000
const mongodb = require("./db");
mongodb();
app.get('/', (req, res) => {
  res.send('Hello World! NAMASTE, OM SAI RAM')
})
app.use(express.json())
app.use('/api',require("./Routes/CreatUser"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})