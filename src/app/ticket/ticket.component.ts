import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  tickets: any[];
  order: any;
  constructor(private ticketservice: TicketsService,
    private route : ActivatedRoute, 
    public router : Router) {

    this.tickets = ticketservice.getTicket();
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params=>{
      this.order = params.get('order');
      console.log(this.order);
    });
  }

  openTicket(id){
    this.router.navigate(['tickets']);
  }

  addTicket(){
    let ticket ={
      id: 4,
      subject: 'ticket num #77',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
      created_at: '26/01/2018',
      priority: 3
    };

    this.ticketservice.addTicket(ticket);
  }

}
