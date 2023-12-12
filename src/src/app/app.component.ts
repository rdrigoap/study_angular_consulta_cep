import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuscaComponent } from './form-busca/form-busca.component';
import { ResultadoComponent } from "./resultado/resultado.component";
import { BuscaCepService } from './services/busca-cep.service';
import { Cep } from './types/Cep';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, FormBuscaComponent, ResultadoComponent]
})
export class AppComponent { 

    public resultado?: Cep;

    constructor(public buscaCepService: BuscaCepService){

    }

    onSubmit(value: string)
    {
        if (value !== ""){
            this.buscaCepService.getCEPByNumber(value).subscribe({
                next: (value) => {
                    this.resultado = value;
                }, 
                error: (error) =>{
                    console.error(error); 
                }
            })
        }
    }
 }
