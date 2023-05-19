class TicketFull{
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.status = data.status,
    this.created = data.created;
    this.description = data.description;
  }
}

module.exports = TicketFull;