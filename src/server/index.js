var path = require('path')
const express = require('express')
//var bodyParser = require('body-parser')
var cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: false
 }))


 app.get('/',((req, res) => {
    res.json({
        message: 'Catch You!',
    })
 }))

 app.listen(8081, () => {
    console.log('Example app listening on port 8081!')
})
