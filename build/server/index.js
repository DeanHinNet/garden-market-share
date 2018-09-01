const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080

const app = express()

app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist/'))

app.route('/api/sell')
    .get((req, res) => {
        res.status(201).send('here is your list of orders')
    })
    .post((req, res) => {
        res.status(201).send('your orders have been posted')
    })

app.listen(port, ()=>{
    console.log(`Garden Market Share listening on ${port}`)
})




