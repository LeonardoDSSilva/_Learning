import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';

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
    this.pensamentoService.buscarPorId(id).subscribe(
      pensamento => this.pensamento = pensamento
    );
  }

  excluirPensamento(): void {
    if (this.pensamento.id) {
      this.pensamentoService.excluir(this.pensamento.id).subscribe(
        () => this.router.navigate(['/listarPensamentos']));
    }
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamentos']);
  }
}
