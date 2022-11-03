const TicketsSummary = require("./TicketsSummary");
const TicketState = require("./TicketState");

class WebConfApi {
  static async getTickets() {
    const request = await fetch(process.env.TICKETS_URL);
    const tickets = await request.json();
    return tickets.map(t => new TicketState(t));
  }

  static async getTicketsSummary() {
    const tickets = await this.getTickets();
    return new TicketsSummary(tickets);
  }

  static getTicketsSummaryDonnut(summary) {
    const totalVendidas = summary.reserved;
    const baseUrl = "https://quickchart.io/chart?c=";
    const url = baseUrl + `{type:'doughnut',data:{labels:['Vendidas', 'Booked', 'Bloqueadas', 'Disponibles'],datasets:[{data:[${summary.reserved}, ${summary.paymentPending}, ${summary.pending}, ${summary.open}]}]},options:{plugins:{doughnutlabel:{labels:[{text:'${totalVendidas}',font:{size:20}},{text:'Total vendidas'}]}}}}`;
    return url;
  }
}

module.exports = WebConfApi;