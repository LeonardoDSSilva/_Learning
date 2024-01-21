import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
	selector: 'app-listar-pensamento',
	templateUrl: './listar-pensamento.component.html',
	styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

	listaPensamentos: Pensamento[] = [];
	haMaisPensamentos: boolean = true;
	filtro: string = '';
	paginaAtual = 1;

	constructor(private pensamentoService: PensamentoService) { }

	ngOnInit(): void {
		this.pensamentoService.listar(this.paginaAtual, this.filtro).subscribe(
			pensamentos => this.listaPensamentos = pensamentos
		);
	}

	carregarMaisPensamentos(): void {
		this.pensamentoService.listar(++this.paginaAtual, this.filtro).subscribe(
			pensamentos => {
				if (pensamentos.length) {
					this.listaPensamentos.push(...pensamentos);
				} else {
					this.haMaisPensamentos = false;
				}
			}
		);
	}

	pesquisarPensamentos() {
		this.paginaAtual = 1;
		this.haMaisPensamentos = true;

		this.pensamentoService.listar(this.paginaAtual, this.filtro)
			.subscribe( pensamentos => this.listaPensamentos = pensamentos );
	}
}
