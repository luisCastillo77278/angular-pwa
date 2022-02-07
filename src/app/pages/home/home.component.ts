import { Info } from './../../interfaces/Rick';
import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';
import { Result } from '../../interfaces/Rick';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cards: Result[] = [];
  public info?: Info;

  constructor(
    private rickService: RickandmortyService
  ) { }

  ngOnInit(): void {
    this.cargarData();
  }

  next(){
    console.log(this.info?.next);
    this.cargarData( this.info?.next );
  }

  prev(){
    this.cargarData( this.info?.prev );
  }

  cargarData( url: string = 'https://rickandmortyapi.com/api/character' ){
    this.rickService.getData( url )
      .subscribe( data =>{
        this.info = data.info;
        this.cards = data.results;
      })
  }

}
