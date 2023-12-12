import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cep } from '../types/Cep';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {

  constructor(public httpClient: HttpClient) { }

  getCEPByNumber(value: string){
    return this.httpClient.get<Cep>(`https://viacep.com.br/ws/${value}/json/`)
  }
}
