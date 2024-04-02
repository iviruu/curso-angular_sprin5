
import { Component, Input } from '@angular/core';
import { iStep } from '../interface/istep.interface';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})
export class EscenaComponent {
  @Input() frases: iStep[] = [];

  currentStep = 0;
  estadoAnimacion = '';

  siguienteFrase(): void {
    if (this.currentStep< this.frases.length - 1){
      this.currentStep ++;
      this.estadoAnimacion = 'animacion2';
      setTimeout(()=> this.estadoAnimacion = '',800);
    }
  }
  anteriorFrase(): void {
    if (this.currentStep> 0){
      this.currentStep --;
      this.estadoAnimacion = 'animacion1';
      setTimeout(()=> this.estadoAnimacion = '',800);
    }
  }
mover(index:number){
  this.currentStep = index
}


}
