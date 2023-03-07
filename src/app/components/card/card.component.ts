import { Router } from '@angular/router';
import { Card } from './../../interface/card.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCard() {
    this.router.navigate([`./card/${this.card.id}`]);
  }
}
