const express = require('express')
const helmet = require('helmet')
const axios = require('axios');
const Telebot = require('telebot');

const bot = new Telebot(process.env.TOKEN);
const app = express()

// define bot commands
bot.on('/entradas', async function(msg){

    const data = await axios.get('https://checkout.webconf.tech/api/hypes?include=y-eia');
    const entradas = data[0].attributes;
    const mensaje = `Cantidad de entradas vendidas: ${entradas.ticketsSold} !! :D `;

    msg.reply.text(mensaje);
    
});

// add some security-related headers to the response
app.use(helmet())
app.get('/', (req, res) => {res.send('webconf bot!! :D')});
app.listen(process.env.PORT || 8080,function() {
    console.log('iniciando express');
    bot.start();
});


//bot.on('/taunts', function(msg){
//  return msg.reply.text(responses.taunts);
//});