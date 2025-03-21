var express = require('express');
let mqtt = require('mqtt');
let cors = require('cors');

var app = express();

app.use(express.json());

const host = "18.224.171.50"

const user = "rabbit345"

const password = "rabbitseguro345"

const port = "1883"

let lastValue = '';

const client = mqtt.connect(`mqtt://${host}:${port}`, {
    username: user,
    password: password
});

app.use(express.json());
app.use(cors())

app.listen(777, () => {
    console.log(`Server running on port 777`);
})

app.get('/topic/:topic', async(req, res) => {
    const {topic} = req.params
    console.log('http://3.139.69.116:18083/api/v5/mqtt/retainer/message/' + topic)
    const response = await fetch('http://3.139.69.116:18083/api/v5/mqtt/retainer/message/' + topic,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic MGU5Mjc1MTE0MzQyMTEyNjprZ3llcEhqT1J3c0RQdFE1TXBkNFZRZVVaWHRRMWlCbDVPaG5DdHRHaHpI'
            },
        }
    )
    const data = await response.json()
    // traduce el data.payload en base 64 a utf-8
    let buff = new Buffer(data.payload, 'base64');
    let text = buff.toString('utf-8');
    console.log(text)
    res.send({data: text})


})





module.exports = app;
