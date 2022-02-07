import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RickAndMorty } from '../interfaces/Rick';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(
    private http: HttpClient
  ) { }

  getData( url: string ): Observable<RickAndMorty>{
    return this.http.get<RickAndMorty>( url );
  }
}
