const TicketsSummary = require("./TicketsSummary");
const TicketState = require("./TicketState");

class WebConfApi {

  static subscribers = [];

  static async getTickets() {
    try {
      const request = await fetch(process.env.TICKETS_URL);
      const tickets = await request.json();
      return tickets.map(t => new TicketState(t));
    } catch (error) {

    }

  }

  static async getTicketsSummary() {
    const tickets = await this.getTickets();
    if (tickets)
      return new TicketsSummary(tickets);
    else
      return undefined;
  }

  static getTicketsSummaryDonnut(summary) {
    const totalVendidas = summary.reserved;
    const baseUrl = "https://quickchart.io/chart?c=";
    const url = baseUrl + `{type:'doughnut',data:{labels:['Vendidas', 'Booked', 'Bloqueadas', 'Disponibles'],datasets:[{data:[${summary.reserved}, ${summary.paymentPending}, ${summary.pending}, ${summary.open}]}]},options:{plugins:{doughnutlabel:{labels:[{text:'${totalVendidas}',font:{size:20}},{text:'Total vendidas'}]}}}}`;
    return url;
  }

  static subscribeTicketsSummary(chatId) {
    if (!this.subscribers.find(s => s === chatId)) {
      this.subscribers.push(chatId);
    }
  }

  static unsubscribeTicketsSummary(chatId) {
    if (this.subscribers.find(s => s === chatId))
      this.subscribers.splice(this.subscribers.indexOf(chatId), 1);
  }

  static async checkSubscriptions(callback) {
    let oldSummary = null;
    setInterval(async () => {
      const summary = await this.getTicketsSummary();
      if (summary) {
        if (oldSummary === null || summary.reserved !== oldSummary.reserved) {
          this.subscribers.forEach(chatId => {
            callback(chatId);
          });
          oldSummary = summary;
        }
      } else {
        console.log("fetch failed :(")
      }
    }, 5000)

  }
}

module.exports = WebConfApi;