import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    // acesso direto no DOM - fica vulnerável contra XSS - deve-se evitar este tipo de modificação via elementRef 
    // this._elementRef.nativeElement.style.backgroundColor = "yellow";
    
    // mandeira recomendada de alterar o DOM (via renderer)
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow');

  }

}
