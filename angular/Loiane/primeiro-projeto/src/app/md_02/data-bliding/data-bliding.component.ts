import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bliding',
  templateUrl: './data-bliding.component.html',
  styleUrls: ['./data-bliding.component.css']
})


export class DataBlidingComponent {

  onBlur(evento: FocusEvent) {
    this.valorSalvo = (<HTMLInputElement>evento.target).value;
  }
  
  variavel: string = 'valor';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://picsum.photos/400/200/';
  valor: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nome: string = 'abc';
  nomeDoCurso: string = 'Angular';
  valorInicial: number = 15;

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valor = (<HTMLInputElement>evento.target).value;
  }

  onKeyUpEnter(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
    this.nome = (<HTMLInputElement>evento.target).value;
  }

  onValorMudou(evento: any) {
    // console.log(evento.novoValor);
  }



}
