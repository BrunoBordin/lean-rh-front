import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tecnologia } from '../models/Tecnologia';

@Injectable({
  providedIn: 'root'
})
export class VagaService {
    private apiUrl = 'https://localhost:7097';
    
  constructor(private http: HttpClient) { }

  obterTecnologias(): Observable<Tecnologia[]> {
    const url = `${this.apiUrl}/${'Tecnologia/listar'}`;
    return this.http.get<Tecnologia[]>(url);
  }

  adicionarTecnologia(tecnologia: Tecnologia): Observable<Tecnologia> {
    return this.http.post<Tecnologia>(this.apiUrl + '/Tecnologia/cadastrar', tecnologia);
  }

  atualizarTecnologia(tecnologia: Tecnologia): Observable<Tecnologia> {
    const url = `${this.apiUrl}/${'Tecnologia/atualizar'}/${tecnologia.id}`;
    return this.http.put<Tecnologia>(url, tecnologia);
  }

  excluirTecnologia(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}