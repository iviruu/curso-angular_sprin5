import { Component, OnInit } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { StepService } from '../step.service';
import { iStep } from '../istep.interface';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit  {
  frases:iStep[] =[];
  constructor(private stepService: StepService) {}
  
  ngOnInit(): void {
    this.frases= this.stepService.getFrases();
  }
}
