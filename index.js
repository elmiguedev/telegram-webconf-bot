const express = require('express')
const helmet = require('helmet')
const axios = require('axios');
const Telebot = require('telebot');

const bot = new Telebot("881166923:AAHT01GpcfeipSh-0yNxB9PH2d8wh7v4rq8");
const app = express()

// define bot commands
// bot.on('/entradas', (msg) => {


//     axios.get('https://checkout.webconf.tech/api/hypes?include=y-eia').then(
//         res => {
//             const entradas = res.data.data[0].attributes;
//             // const mensaje = `Cantidad de entradas vendidas: ${entradas.ticketsSold} !! :D `;
//             return msg.reply.text('test');
            
//         }
//     );

//     // msg.reply.text(mensaje);

// });

// add some security-related headers to the response
app.use(helmet())
app.get('/', (req, res) => {res.send('webconf bot!! :D')});
app.listen(process.env.PORT || 8080, function() {
 //   bot.start();
});

module.exports = app;