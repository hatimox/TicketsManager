import { Injectable , Output , EventEmitter} from '@angular/core';

@Injectable()
export class TicketsService {
  
  tickets = [
    {
    id: 1,
    subject: 'ticket num #1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
    created_at: '26/01/2018',
    priority: 1
  },
  {
    id: 2,
    subject: 'ticket num #2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
    created_at: '26/01/2018',
    priority: 2
  },
  {
    id: 3,
    subject: 'ticket num #3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
    created_at: '26/01/2018',
    priority: 1
  },
  {
    id: 4,
    subject: 'ticket num #4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
    created_at: '26/01/2018',
    priority: 3
  },
];
  @Output() added:EventEmitter<number> = new EventEmitter ;
  constructor() { }

  getTicket() {
    return this.tickets;
  }

  addTicket(ticket){
    this.tickets.push(ticket);
    this.added.emit(this.tickets.length);
  }

}
