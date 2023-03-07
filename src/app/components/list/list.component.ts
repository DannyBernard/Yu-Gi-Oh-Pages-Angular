import { Card } from './../../interface/card.interface';
import { CardService } from './../../services/card.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
   cards : Card[] = [];
   offset = 0;

   cardTextFc = new FormControl('');
  constructor(private CardService: CardService) { }

  ngOnInit(): void {
    this.cardTextFc.valueChanges.pipe(
     debounceTime(1000) //esto es para un tiempo de espera para no eviar una peticion cada vez que escribimos 
    )
    .subscribe((res)=>{
      console.log(res);
      this.cards = [];
      this.searchCards(res);
    })
  this.searchCards();
  }
  onScroll() {
    console.log("scrolled!!");
    this.offset +=100;
    this.searchCards();
  }

  searchCards(cardName: string | null = null){
    this.CardService.getCards(cardName,this.offset).subscribe((res) => {
      console.log(res);
      this.cards = [...this.cards,...res];
    }  );
  }

}
