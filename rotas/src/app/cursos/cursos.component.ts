import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  pagina: number;
  cursos: any[];
  inscricao: Subscription
  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.inscricao = this.route.queryParams.subscribe(
      (params: any) => {
        this.pagina = params["pagina"];
      });

    this.cursos = this.cursosService.getCursos();
  }

  ngOnDestroy() {
    if (this.inscricao != null) {
      this.inscricao.unsubscribe();
    }
  }

  proximaPagina() {
    this.router.navigate(['/cursos'], { queryParams: {'pagina': ++this.pagina}})
  }

}
