import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cantor-card',
  templateUrl: './cantor-card.component.html',
  styleUrl: './cantor-card.component.css'
})
export class CantorCardComponent {
  // c = { id: 1, nome: "João" };
  @Input('obj') cantor: any;
}
