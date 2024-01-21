import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // <-- Importe o FormGroup e o FormBuilder

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
			conteudo: [null, Validators.compose([
				Validators.required,
				Validators.pattern(/(.|\s)*\S(.|\s)*/),
			])],
			autoria: [null, Validators.compose([
				Validators.required,
				Validators.pattern(/(.|\s)*\S(.|\s)*/),
				Validators.minLength(3),
			])],
			modelo: ['modelo1']
		});
	}

	criarPensamento(): void {
		if(this.formulario.valid) {
			this.pensamentoService.criar(this.formulario.value).subscribe(
				() => this.router.navigate(['/listarPensamento'])
			);
		}
	}

	cancelar(): void {
		this.router.navigate(['/listarPensamento']);
	}

	habilitarBotao(): string {
		if(this.formulario.valid) {
			return 'botao';
		} else {
			return 'botao__desabilitado';
		}
	}

}
