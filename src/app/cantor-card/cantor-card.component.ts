import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cantor-card',
  templateUrl: './cantor-card.component.html',
  styles: [`
  .card-block {
    text-transform: uppercase;
    color: blue;
  }
`]
})
export class CantorCardComponent {
  // c = { id: 1, nome: "João" };
  @Input('obj') cantor: any;

  getEstilosCard() {
    return {
      'border-width': this.cantor.id + 'px',
      backgroundColor: this.cantor.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    }
  }

  getListaClasses() {
    return ['badge', 'badge-primary'];
  }

  isAdmin() {
    return this.cantor.nome.startsWith('H');
  }
}
