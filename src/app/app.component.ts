import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'front-end-acervo-musical';
  // nome = "UTFPR";
  nome = "";
  nomeInserido = "Gabriel";
  numero = 0;
  adicionado = false;
  cantores: any[] = [];
  ultimoId = 0;

  // idade = 10;
  // getIdade() {
  //   return this.idade;
  // }
  // adicionar(nome: string) {
  //   // console.log(`Adicionando ${this.nome}`);
  //   // console.log(nome); 
  //   this.nomeInserido = nome;
  //   this.nome = "";
  // }

  adicionar() {
    // this.nomeInserido = nome;
    // this.numero++;
    // this.nome = "Siqueira " + this.numero;

    this.adicionado = true;

    this.cantores.push({
      id: ++this.ultimoId,
      nome: this.nome
    });
  }

  // alterarNome(evento: any) {
  //   //console.log(evento);
  //   this.nome = evento.target.value;
  // }
}
