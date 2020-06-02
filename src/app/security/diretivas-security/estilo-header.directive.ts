import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'header[appEstiloHeader]'
})
export class EstiloHeaderDirective {

  constructor(private er: ElementRef, private r2: Renderer2) {
    //adicionando e configurando logo

    this.r2.addClass(this.er.nativeElement, 'row');
    const logo =  this.r2.createElement('img');
    const div =  this.r2.createElement('div');

    this.r2.appendChild(this.er.nativeElement, div);
    this.r2.appendChild(this.er.nativeElement, logo);
    this.r2.setStyle(div, 'margin', '-25px');
    this.r2.setAttribute(logo, 'src', 'assets/bank-logo.png');
    this.r2.setAttribute(logo, 'height', '100px');
    this.r2.addClass(logo, 'my-auto');

    //responsividade do header

    //telas extra small
    this.r2.addClass(div, 'col-5');

    //telas small
    this.r2.addClass(div, 'col-sm-2');

    //telas medium
    this.r2.addClass(div, 'col-md-2');

    //telas large
    this.r2.addClass(div, 'col-lg-1');

    //telas extra large
    this.r2.addClass(div, 'col-xl-1');

    this.r2.setStyle(this.er.nativeElement, 'height', '150px');
    this.r2.setStyle(this.er.nativeElement, 'background-image', 'linear-gradient(to right, #0079b4, #01639d, #024e86, #023a6f, #002758)');
    //adicao de sombra
    this.r2.setStyle(this.er.nativeElement, '-webkit-box-shadow', '0px 10px 6px -4px rgba(0, 0, 0, 0.75)');
    this.r2.setStyle(this.er.nativeElement, '-moz-box-shadow', '0px 10px 6px -4px rgba(0, 0, 0, 0.75)');
    this.r2.setStyle(this.er.nativeElement, 'box-shadow', '0px 10px 6px -4px rgba(0, 0, 0, 0.75)');
  }

}
