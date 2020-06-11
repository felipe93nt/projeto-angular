import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'header[appEstiloHeader]'
})

export class EstiloHeaderDirective implements OnInit {

  @Input() mostrarDiretiva: boolean;
  constructor(private er: ElementRef, private r2: Renderer2) {}
  ngOnInit() {
     // adicionando e configurando logo
     if (this.mostrarDiretiva) {
      this.r2.addClass(this.er.nativeElement, 'row');
      const logo =  this.r2.createElement('img');
      const div =  this.r2.createElement('div');

      this.r2.appendChild(this.er.nativeElement, div);
      this.r2.appendChild(this.er.nativeElement, logo);
      this.r2.setStyle(div, 'margin', '-25px');
      this.r2.setAttribute(logo, 'src', 'assets/bank-logo.png');
      this.r2.setAttribute(logo, 'height', '100px');
      this.r2.addClass(logo, 'my-auto');

      // responsividade do header

      // telas extra small
      this.r2.addClass(div, 'col-5');

      // telas small
      this.r2.addClass(div, 'col-sm-2');

      // telas medium
      this.r2.addClass(div, 'col-md-2');

      // telas large
      this.r2.addClass(div, 'col-lg-1');

      // telas extra large
      this.r2.addClass(div, 'col-xl-1');

      this.r2.setStyle(this.er.nativeElement, 'height', '150px');

      this.r2.setStyle(this.er.nativeElement, 'background-image',
      'linear-gradient(to right top, #005287, #005f96, #006da5, #007bb3, #0089c2)');

    } else {
      this.r2.addClass(this.er.nativeElement, 'row');
      const logo =  this.r2.createElement('img');

      this.r2.appendChild(this.er.nativeElement, logo);
      this.r2.setAttribute(logo, 'src', 'assets/bank-logo.png');
      this.r2.setAttribute(logo, 'height', '100px');
      this.r2.addClass(logo, 'my-auto');
      this.r2.addClass(logo, 'mx-auto');

      this.r2.setStyle(this.er.nativeElement, 'height', '150px');
    }
  }
}
