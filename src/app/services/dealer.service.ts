import { Injectable } from '@angular/core';
import { Card, Fill } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})

export class DealerService {
  private deck: Card[] = [];
  public openedCards: Array<Card> = new Array<Card>();
  private openedCardsQuantity = 12;
  private extraCardsQuantity = 3;

  constructor() {
    for (let i = 0; i < this.openedCardsQuantity + this.extraCardsQuantity; i++) {
      this.openedCards[i] = undefined;
    }
    this.generateDeck();
  }

  private generateDeck() {
    for (let s = 1; s <= 3; s++) {
      for (let c = 1; c <=3; c++) {
        for (let f = 1; f <= 3; f++) {
          for (let q = 1; q <= 3; q++) {
            this.deck.push({ shape: s, color: c, fill: f, quantity: q });
          }
        }
      }
    }
  }

  public orginizeCards(): { card: Card, oldIndex: number, newIndex: number }[] {
    let cardsToOrganize = new Array<{ card: Card, oldIndex: number, newIndex: number }>();
    for (let i = this.openedCardsQuantity; i < this.extraCardsQuantity; i++) {
      if (this.openedCards[i] != undefined) {
        cardsToOrganize.push(<{ card: Card, oldIndex: number, newIndex: number }>{ oldIndex: i })
      }
    }

    for (let i = 0; i < cardsToOrganize.length; i++) {
      let oldIndex = cardsToOrganize[i].oldIndex;
      let card = this.openedCards.find(x => x == undefined);
      let newIndex = this.openedCards.indexOf(card);
      cardsToOrganize[i].newIndex = newIndex;
      cardsToOrganize[i].card = card;
      this.openedCards[oldIndex] = undefined;
      this.openedCards[newIndex] = card;
    }

    return cardsToOrganize;
  }

  public openCards(): Array<Card> {
    let openExtra = this.openedCards.indexOf(undefined) == this.openedCardsQuantity;
    let newCards = new Array<Card>();

    for (let i = 0; i < this.openedCardsQuantity + (openExtra ? this.extraCardsQuantity : 0); i++) {
      if (this.openedCards[i] == undefined) {
        let card = this.popRandomCard();
        newCards.push(card);
        this.openedCards[i] = card;
      }
    }

    return newCards;
  }

  private popRandomCard(){
    return this.deck.splice(Math.floor(Math.random() * this.deck.length), 1)[0];
  }
}
