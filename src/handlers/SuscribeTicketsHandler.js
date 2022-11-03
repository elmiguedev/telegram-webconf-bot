const WebConfApi = require("../services/WebConfApi/WebConfApi");
const GetTicketsHandler = require("./GetTicketsHandler");

const SuscribeTicketsHandler = async (bot, message) => {
  WebConfApi.subscribeTicketsSummary(message.chat.id);
}

module.exports = SuscribeTicketsHandler