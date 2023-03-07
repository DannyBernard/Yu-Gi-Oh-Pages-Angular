import { Card } from './../interface/card.interface';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
Api_Url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
  constructor(private Http: HttpClient) { }

  getCards( name:string| null,offset =0){
    const params: any ={
      num: 100,
      offset,
    };

    if(name) params.fname = name;
  return this.Http.get<Card[]>(this.Api_Url,{params}).pipe(
    map((res:any )=> res.data)
  );
  }
}

