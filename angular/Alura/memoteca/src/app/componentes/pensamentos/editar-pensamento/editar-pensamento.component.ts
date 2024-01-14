import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

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

  editarPensamento(): void {
    if (this.pensamento.id) {
      this.pensamentoService.editar(this.pensamento).subscribe(
        () => this.router.navigate(['/listarPensamentos']));
    }
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamentos']);
  }

}
