const WebConfApi = require("../services/WebConfApi/WebConfApi");
const GetTicketsHandler = require("./GetTicketsHandler");

const UnsuscribeTicketsHandler = async (bot, message) => {
  WebConfApi.unsubscribeTicketsSummary(message.chat.id);
}

module.exports = UnsuscribeTicketsHandler