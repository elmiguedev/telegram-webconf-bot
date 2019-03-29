const express = require('express');
const app = express(); 
const axios = require('axios');

const Telebot = require('telebot');
const bot = new Telebot(process.env.TOKEN);


bot.on('/entradas', function(msg){
  return msg.reply.text('probando bot de entradas');
});

app.listen(process.env.PORT);    
bot.start();

setInterval(function() {
  axios.get(process.env.PING).then(
    res => console.log(res.data)
  );
},1000 * 60);
