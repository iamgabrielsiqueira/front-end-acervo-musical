import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cantor-form',
  templateUrl: './cantor-form.component.html',
  styleUrl: './cantor-form.component.css'
})
export class CantorFormComponent {
  nome = "";
  adicionado = false;
  ultimoId = 0;
  @Output() cantorAdicionado = new EventEmitter();

  adicionar() {
    this.adicionado = true;

    const cantor = {
      id: ++this.ultimoId,
      nome: this.nome
    };

    this.cantorAdicionado.emit(cantor)
  }
}

interface Cantor {
  id: number;
  nome: string;
}
