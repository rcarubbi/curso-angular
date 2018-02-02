import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: 'rcarubbi@gmail.com'
  };

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form) {
    // console.log(form);
    // console.log(this.usuario);
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
             .map(res => res)
             .subscribe(dados => console.log(dados));
  }

  verificaValidTouched(campo) {
    return campo.invalid && campo.touched;
  }

  consultaCEP(cep, ngform) {
    cep = cep.replace(/\D/g, '');
    if (cep != "") {
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {

        this.resetaDadosForm(ngform);
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .map(dados => dados.json())
          .subscribe(json => 
            {
              this.populaDadosForm(json, ngform);
              ngform.form.reset();
            });
      }
    }
  }

  resetaDadosForm(ngform) {
    ngform.form.patchValue({
      endereco: {
        rua: null,
        cep: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  populaDadosForm(dados, ngform) {
    // ngform.setValue({
    //   nome: ngform.value.nome,
    //   email: ngform.value.email,
    //   endereco: {
    //     rua: dados.logradouro,
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // });

    ngform.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }


}
