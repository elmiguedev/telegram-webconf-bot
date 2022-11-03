const TelegramBot = require('node-telegram-bot-api');
const GetTicketsHandler = require('./handlers/GetTicketsHandler');

const TOKEN = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/entradas/, (message) => {
  GetTicketsHandler(bot, message);
});

console.log("Server listening 🤖")

