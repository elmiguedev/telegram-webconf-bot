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
bot.onText(/\/entradas/, function onEntradasText(msg) {
    bot.sendMessage(msg.chat.id, "prueba entradas y eia?");
});

// Handle callback queries
bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };
  let text;

  if (action === 'edit') {
    text = 'Edited Text';
  }

  bot.editMessageText(text, opts);
});

module.exports = bot;