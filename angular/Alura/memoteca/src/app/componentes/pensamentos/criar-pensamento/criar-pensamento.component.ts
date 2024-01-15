import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms'; // <-- Importe o FormGroup e o FormBuilder

import { PensamentoService } from '../pensamento.service';

@Component({
	selector: 'app-criar-pensamento',
	templateUrl: './criar-pensamento.component.html',
	styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

	formulario!: FormGroup;

	constructor(
		private pensamentoService: PensamentoService,
		private router: Router,
		private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.formulario = this.formBuilder.group({
			conteudo: [null],
			autoria: [null],
			modelo: ['modelo1']
		});
	}

	criarPensamento(): void {
		this.pensamentoService.criar(this.formulario.value).subscribe(
			() => {
				this.router.navigate(['/listarPensamento']);
			}
		);
	}

	cancelar(): void {
		this.router.navigate(['/listarPensamento']);
	}

}
