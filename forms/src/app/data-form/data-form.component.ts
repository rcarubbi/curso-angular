import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DropdownService } from '../shared/services/dropdown.service';
import { IEstado } from '../shared/models/IEstado';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  
  formulario: FormGroup
  estados: IEstado[] = [];

  constructor(private formBuilder: FormBuilder,
    private http: Http,
    private dropdownService: DropdownService) { }

  ngOnInit() {
    // this.formulario = new FormGroup({
    //     nome: new FormControl('Raphael'),
    //     email: new FormControl()
    // endereco: new FormGroup({
    //     cep: new FormControl()
    // });
    // });

    this.dropdownService.getEstadosBr().subscribe(dados => this.estados = dados);

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        rua: [null, Validators.required],
        estado: [null, Validators.required],
        complemento: [null],
        numero: [null, Validators.required],
        cidade: [null, Validators.required],
        bairro: [null, Validators.required]
      })
    });
  }

  resetar() {
    this.formulario.reset();

  }
  onSubmit() {
    console.log(this.formulario);

    if (this.formulario.valid) {

      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .map(res => res)
        .subscribe(dados => {
          console.log(dados);
          this.resetar();
        },
        (error: any) => {
          alert('erro');
        });
    } else {
      this.verificaValidacoesFormulario(this.formulario);
    }
  }


  verificaValidacoesFormulario(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      let controle = formGroup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup) {
          this.verificaValidacoesFormulario(controle);
      }  
    });
  }

  verificaValidTouched(campo: string) {

    let formControl = this.formulario.get(campo);

    return formControl.errors && formControl.errors.required && formControl.touched;
  }

  verificaEmailInvalido(campo: string) {

    let formControl = this.formulario.get(campo);

    return formControl.errors
      && formControl.errors.email
      && !formControl.errors.required
      && formControl.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value.replace(/\D/g, '');
    if (cep != "") {
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {

        this.resetaDadosForm();
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .map(dados => dados.json())
          .subscribe(json => {
            this.populaDadosForm(json);
          });
      }
    }
  }


  populaDadosForm(dados) {
    this.formulario.patchValue({
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

  resetaDadosForm() {
    this.formulario.patchValue({
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

}
