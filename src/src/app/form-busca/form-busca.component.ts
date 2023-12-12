import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'form-busca',
  standalone: true,
  imports: [],
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss'
})
export class FormBuscaComponent {
  @Output()
  onSubmit: EventEmitter<string> = new EventEmitter();
  onInternalSubmit(event: Event){
    event.preventDefault();
    const elemento = document.getElementById("cep") as HTMLInputElement;
    if(elemento)
    {
      const value = elemento.value;
      this.onSubmit.emit(value);
    }
  }
}
