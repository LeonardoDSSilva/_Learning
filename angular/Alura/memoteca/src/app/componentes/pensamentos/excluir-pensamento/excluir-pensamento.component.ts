import { Component, OnInit } from '@angular/core';

import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pensamentoService.buscarPorId(parseInt(id!)).subscribe(
      pensamento => this.pensamento = pensamento
    );
  }

  excluir(): void {
    if (this.pensamento.id) {
      this.pensamentoService.excluir(this.pensamento.id).subscribe(
        () => this.router.navigate(['/listarPensamento']));
    }
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamento']);
  }
}
