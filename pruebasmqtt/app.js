var express = require('express');
let mqtt = require('mqtt');

var app = express();

const host = "18.117.196.152"

const user = "rabbit345"

const password = "rabbitseguro345"

const port = "1883"

const client = mqtt.connect(`mqtt://${host}:${port}`, {
    username: user,
    password: password
});

app.get('/pene', async (req, res) => {
    client.publish('pene', 'el pene siempre le ha gustado muhco a juanito');
    res.send('Mensaje enviado');
})



client.on('connect', () => {
    console.log('Conectado al broker MQTT');
    client.subscribe('pene', (err) => {
        if (err) {
            console.log('Error al suscribirse al tema:', err);
        } else {
            console.log('Suscrito al tema "pene"');
        }
    });
});

client.on('message', (topic, message) => {
    if (topic === 'pene') {
        console.log(`Mensaje recibido: ${message.toString()}`);
    }
});

app.listen(777, () => {
    console.log(`Server running on port 777`);
});





module.exports = app;
