
import { Component, Input } from '@angular/core';
import { iStep } from '../istep.interface';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})
export class EscenaComponent {
  @Input() frases: iStep[] = [];
  
}
