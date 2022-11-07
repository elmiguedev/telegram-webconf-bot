class TicketsSummary {
  constructor(tickets) {
    this.reserved = tickets.find(t => t.state === "reserved")?.count || 0;
    this.paymentPending = tickets.find(t => t.state === "payment_pending")?.count || 0;
    this.open = tickets.find(t => t.state === "open")?.count || 0;
    this.pending = tickets.find(t => t.state === "pending")?.count || 0;
  }
}

module.exports = TicketsSummary;