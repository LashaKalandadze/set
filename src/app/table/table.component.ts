import { Component, OnInit } from '@angular/core';
import { DealerService } from '../services/dealer.service';
import { Card } from '../interfaces/card';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  cards: Card[];
  selectedCards: Card[] = new Array<Card>();
  
  constructor(private data: DealerService) {
  }

  ngOnInit(): void {
    this.data.openCards();
    this.cards = this.data.openedCards;
  }

  public cardClicked(card: Card): boolean {
    var c = this.selectedCards.find(x => x == card);

    if(c){
      this.selectedCards.splice(this.selectedCards.indexOf(c), 1);
      return false;
    }
    else if(this.selectedCards.length < 3){
      this.selectedCards.push(card);
      return true;
    }
    else{
      return false;
    }
  }
}
