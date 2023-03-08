import { CardService } from './../../services/card.service';
import { Card } from './../../interface/card.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
 id! : string;
 card$! : Observable<Card>;
  constructor(private route: ActivatedRoute, private cardService: CardService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.card$ = this.cardService.getCard(this.id).pipe(tap(console.log));
    console.log(this.card$);
  }
   
}
