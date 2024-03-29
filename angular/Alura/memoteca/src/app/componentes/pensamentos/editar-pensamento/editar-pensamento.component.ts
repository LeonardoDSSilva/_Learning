import { Component, OnInit } from '@angular/core';


import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    modelo: '',
    favorito: false
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

  editar(): void {
    if (this.pensamento.id) {
      this.pensamentoService.editar(this.pensamento).subscribe(
        () => this.router.navigate(['/listarPensamento']));
    }
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamento']);
  }

}
