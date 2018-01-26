import { TicketsService } from './services/tickets.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TicketsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
