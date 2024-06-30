import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cantores: Cantor[] = [];

  aoAdicionar(cantor: Cantor) {
    this.cantores.push(cantor);
  }
}

interface Cantor {
  id: number;
  nome: string;
}