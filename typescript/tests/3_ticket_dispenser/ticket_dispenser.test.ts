import { TicketDispenser } from "../../src/3_ticket_dispenser/turn_ticket";

describe("Ticket Dispenser", function () {
  it("dispenses tickets", function () {
    let ticketDispenser = new TicketDispenser();
    ticketDispenser.getTurnTicket();
  });
});
