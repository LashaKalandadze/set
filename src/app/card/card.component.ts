import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() entity: Card;
  @Input() clickEvent : (card: Card) => boolean;
  selected: boolean;
  
  constructor() { }

  ngOnInit(): void {

  }

  public onClicked(): void {
    this.selected = this.clickEvent(this.entity);
  }
}


