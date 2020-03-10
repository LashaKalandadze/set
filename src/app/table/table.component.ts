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

  constructor(private data: DealerService) { 
  }

  ngOnInit(): void {
    this.data.openCards();
    this.cards = this.data.openedCards;
  }
}
