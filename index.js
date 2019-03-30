/**
 * This example demonstrates using polling.
 * It also demonstrates how you would process and send messages.
 */


const TOKEN = process.env.TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const options = {
  polling: true
};
const bot = new TelegramBot(TOKEN, options);


bot.onText(/\/entradas/, (msg) => {
    axios.get('https://checkout.webconf.tech/api/hypes?include=y-eia').then(
        res => {
//            const data = res;
            bot.sendMessage(msg.chat.id, 'dsa');

        }
    ); 
});


// Matches /echo [whatever]
bot.onText(/\/echo (.+)/, function onEchoText(msg, match) {
  const resp = match[1];
  bot.sendMessage(msg.chat.id, resp);
});


// Matches /editable
bot.onText(/\/editable/, function onEditableText(msg) {
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Edit Text',
            // we shall check for this value when we listen
            // for "callback_query"
            callback_data: 'edit'
          }
        ]
      ]
    }
  };
  bot.sendMessage(msg.from.id, 'Original Text', opts);
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