const WebConfApi = require("../services/WebConfApi/WebConfApi");

const GetTicketsHandler = async (bot, message) => {
  const chatId = message.chat.id;
  const tickets = await WebConfApi.getTicketsSummary();
  if (tickets) {
    const img = WebConfApi.getTicketsSummaryDonnut(tickets);
    console.log("la imagen, ", img)

    const ticketsMessage = `🎟 ENTRADAS WEBCONF 🎟 \n
    Vendidas: ${tickets.reserved}
    Booked: ${tickets.paymentPending} 
    Bloqueadas: ${tickets.pending} 
    Disponibles: ${tickets.open} 
    `;

    bot.sendMessage(chatId, ticketsMessage);
    bot.sendPhoto(chatId, img);
  }
}

module.exports = GetTicketsHandler