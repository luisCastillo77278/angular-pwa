import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/Rick';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card?: Result;

  constructor() { }

  ngOnInit(): void {
  }

}
