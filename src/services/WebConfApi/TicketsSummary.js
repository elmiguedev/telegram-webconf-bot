class TicketsSummary {
  constructor(tickets) {
    this.reserved = tickets.find(t => t.state === "reserved").count;
    this.paymentPending = tickets.find(t => t.state === "payment_pending").count;
    this.open = tickets.find(t => t.state === "open").count;
    this.pending = tickets.find(t => t.state === "pending").count;
  }
}

module.exports = TicketsSummary;