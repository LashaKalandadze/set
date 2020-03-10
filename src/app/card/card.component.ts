import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() entity: Card;
  constructor() { }

  ngOnInit(): void {

  }
}


