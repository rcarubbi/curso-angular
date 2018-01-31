import { CursosService } from '../cursos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  private id: number
  private inscricao: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute, 
    private cursosService: CursosService,
    private router: Router
  ) {
  }

  ngOnInit() {


    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = this.route.snapshot.params['id'];
        this.curso = this.cursosService.getCurso(this.id);

         if (this.curso== null){
           this.router.navigate(['/cursos/nao-encontrado']);
         }
      }
    );
  }

  ngOnDestroy() {
    if (this.inscricao != null) {
      this.inscricao.unsubscribe();
    }
  }



}
