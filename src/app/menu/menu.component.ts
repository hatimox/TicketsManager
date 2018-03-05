import { TicketsService } from './../services/tickets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  count = 0;
  constructor(private ticketService : TicketsService ) { }

  ngOnInit() {
    this.ticketService.added.subscribe(count =>{
      this.count = count;
    })
  }

}
