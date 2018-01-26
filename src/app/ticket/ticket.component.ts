import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  tickets: any[];

  constructor(ticketservice: TicketsService) {
    this.tickets = ticketservice.getTicket();
  }

  ngOnInit() {
  }

}
