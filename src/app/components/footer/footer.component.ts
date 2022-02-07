import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  title = 'Rick and Morty';
  fecha = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
