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
  foundSetCount: number;
  animateSetCountLabel: boolean;

  constructor(private service: DealerService) {

  }

  ngOnInit(): void {
    this.service.openCards();
    this.cards = this.service.openedCards;
    this.foundSetCount = 0;
  }

  hasExtraCards(): boolean {
    return this.cards.indexOf(undefined) < 0;
  }

  public cardClicked(data: { card: Card, callBack: (selected: boolean) => void }) {
    this.animateSetCountLabel = false;

    let selected = false;
    let c = this.selectedCards.find(x => x == data.card);

    if (c != undefined) {
      this.selectedCards.splice(this.selectedCards.indexOf(c), 1);
    }
    else if (this.selectedCards.length < 3) {
      this.selectedCards.push(data.card)
      selected = true;
    }

    data.callBack(selected);

    if (this.selectedCards.length == 3) {
      if(this.service.checkCards(this.selectedCards)){
        this.foundSetCount += 1;
        this.animateSetCountLabel = true;
        this.selectedCards = [];
      }
    }
  }

  
  dealCards() {
    
  }
}
