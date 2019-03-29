const express = require('express')
const helmet = require('helmet')
const axios = require('axios');
const Telebot = require('telebot');

//const bot = new Telebot(process.env.TOKEN);
const app = express()

// add some security-related headers to the response
//bot.start();
app.use(helmet())

app.get('/', (req, res) => {
    res.send('webconf bot!! :D')
})

module.exports = app


//bot.on('/taunts', function(msg){
//  return msg.reply.text(responses.taunts);
//});