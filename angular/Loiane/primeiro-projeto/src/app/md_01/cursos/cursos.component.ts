import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  nome : string;
  cursos : string[];

  constructor(private cursosService: CursosService) {
    this.nome = 'Angular';
    this.cursos = this.cursosService.getCursos();
  }
}
