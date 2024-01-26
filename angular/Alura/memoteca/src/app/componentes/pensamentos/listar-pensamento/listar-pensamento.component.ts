import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-listar-pensamento',
	templateUrl: './listar-pensamento.component.html',
	styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

	listaPensamentos: Pensamento[] = [];
	haMaisPensamentos: boolean = true;
	listaFavoritos: Pensamento[] = [];
	titulo: string = 'Meu Mural';
	favoritos: boolean = false;
	filtro: string = '';
	paginaAtual = 1;

	constructor(
		private pensamentoService: PensamentoService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.pensamentoService.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(
			pensamentos => this.listaPensamentos = pensamentos
		);
	}

	carregarMaisPensamentos(): void {
		this.pensamentoService.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe(
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

		this.pensamentoService.listar(this.paginaAtual, this.filtro, this.favoritos)
			.subscribe( pensamentos => this.listaPensamentos = pensamentos );
	}

	listarFavoritos(): void {
		this.titulo = 'Meus Favoritos';
		this.favoritos = true;
		this.paginaAtual = 1;
		this.haMaisPensamentos = true;

		this.pensamentoService.listar(this.paginaAtual, this.filtro, this.favoritos)
			.subscribe( pensamentos => {
				this.listaFavoritos = pensamentos;
				this.listaPensamentos = pensamentos;
			});
	}

	recarregarComponente() {
		this.titulo = 'Meu Mural';
		this.favoritos = false;
		this.paginaAtual = 1;
		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
		this.router.onSameUrlNavigation = 'reload';
		this.router.navigate([this.router.url]);
	}
}
