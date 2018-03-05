import { TicketsService } from './services/tickets.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicketInfoComponent } from './ticket-info/ticket-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    MenuComponent,
    HomeComponent,
    TicketInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'tickets/:id', component: TicketInfoComponent},
      { path: 'tickets', component: TicketComponent},
      { path: '**', component: TicketInfoComponent},
    ])
  ],
  providers: [
    TicketsService,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
