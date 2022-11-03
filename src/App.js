const TelegramBot = require('node-telegram-bot-api');
const GetTicketsHandler = require('./handlers/GetTicketsHandler');
const SuscribeTicketsHandler = require('./handlers/SuscribeTicketsHandler');
const UnsuscribeTicketsHandler = require('./handlers/UnsuscribeTicketsHandler');
const WebConfApi = require('./services/WebConfApi/WebConfApi');

const TOKEN = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/entradas/, (message) => {
  GetTicketsHandler(bot, message);
});

bot.onText(/\/subscribe/, (message) => {
  SuscribeTicketsHandler(bot, message);
});

bot.onText(/\/unsubscribe/, (message) => {
  UnsuscribeTicketsHandler(bot, message);
});

WebConfApi.checkSubscriptions((chatId) => {
  GetTicketsHandler(bot, { chat: { id: chatId } });
})

console.log("Server listening 🤖")

