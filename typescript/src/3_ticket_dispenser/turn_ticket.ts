export class TurnTicket {
  private ticketNumber: number;
  constructor(ticketNumber: number) {
    this.ticketNumber = ticketNumber;
  }
}

export class TurnNumberSequence {
  private static _turnNumber: number = -1;
  public static nextTurnNumber(): number {
    TurnNumberSequence._turnNumber += 1;
    return TurnNumberSequence._turnNumber;
  }
}

export class TicketDispenser {
  public getTurnTicket(): TurnTicket {
    let newTurnNumber: number = TurnNumberSequence.nextTurnNumber();
    let newTurnTicket: TurnTicket = new TurnTicket(newTurnNumber);
    return newTurnTicket;
  }
}
