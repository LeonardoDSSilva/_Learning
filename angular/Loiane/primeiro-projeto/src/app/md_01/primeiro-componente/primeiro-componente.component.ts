import { Component } from "@angular/core";

@Component({
  selector: 'meu-primeiro-componente',
  template: `
    <p>Meu primeiro componente com Angular </p>
	  `
})
export class MeuPrimeiroComponent {
  nome = 'Angular';
}