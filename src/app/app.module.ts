import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { DealerService } from './services/dealer.service';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DealerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
