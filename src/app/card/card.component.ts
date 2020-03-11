import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() entity: Card;
  @Output() clickEvent: EventEmitter<{ card: Card, callBack: (selected:boolean) => void }> = new EventEmitter();
  selected:boolean;

  constructor() { }

  ngOnInit(): void {

  }

  public onClicked(): void {
    this.clickEvent.emit({card:this.entity, callBack: (selected:boolean) => {this.setSelected(selected)}});
  }

  private setSelected(selected:boolean){
    console.log(this);
    this.selected = selected;
  }
}


