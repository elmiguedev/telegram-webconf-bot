/**
 * This example demonstrates using polling.
 * It also demonstrates how you would process and send messages.
 */


const TOKEN = process.env.TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';
const TelegramBot = require('node-telegram-bot-api');
const options = {
  polling: true
};
const bot = new TelegramBot(TOKEN, options);


// Matches /love
bot.onText(/\/entradas/, function (msg) {
    bot.sendMessage(msg.chat.id, "prueba entradas y eia?");
});


module.exports = bot;