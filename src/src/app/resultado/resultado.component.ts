import { Component, Input } from '@angular/core';
import { Cep } from '../types/Cep';

@Component({
  selector: 'resultado',
  standalone: true,
  imports: [],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.scss'
})
export class ResultadoComponent {
  @Input()
  public value?:Cep;
}
