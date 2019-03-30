//var token = process.env.TOKEN;
var token = '881166923:AAHT01GpcfeipSh-0yNxB9PH2d8wh7v4rq8';
var TelegramBot = require('node-telegram-bot-api');
var request = require('request');
var bot = new TelegramBot(token, {polling: true});

bot.onText(/\/entradas/,function(msg,match){
  var chatId = msg.chat.id;
  var url = 'https://checkout.webconf.tech/api/hypes?include=y-eia';
  request(url,function(err,res,body){
    if (!err && res.statusCode === 200) {
      var data = JSON.parse(body);
      var entradas = data.data[0].attributes;
      var ticketsSold = entradas.ticketsSold;
      var ticketsBooked = entradas.ticketsBooked;
      var ticketsBlocked = entradas.ticketsBlocked;
      var ticketsAvailable = entradas.ticketsAvailable;

      var texto = `RESUMEN: \n
          Vendidas: ${ticketsSold}
          Booked: ${ticketsBooked} 
          Bloqueadas: ${ticketsBlocked} 
          Disponibles: ${ticketsAvailable} 
      `;

      bot.sendMessage(chatId,texto);
    }
  });
});

setInterval(() => {
  request('https://webconf-bot.mmoyano16.now.sh', function(e,r,b){

  })
}, 100000);

