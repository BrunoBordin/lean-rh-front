import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tecnologia } from '../models/Tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  private apiUrl = 'https://localhost:7097';

  constructor(private http: HttpClient) { }

  adicionarTecnologia(tecnologia: Tecnologia): Observable<Tecnologia> {
    return this.http.post<Tecnologia>(this.apiUrl + '/Tecnologia/cadastrar', tecnologia);
  }

  obterTecnologias(): Observable<Tecnologia[]> {
    return this.http.get<Tecnologia[]>(`${this.apiUrl}/Tecnologia/listar`);
  }

  atualizarTecnologia(tecnologia: Tecnologia): Observable<void> {
    console.log("element id: " + tecnologia.idTecnologia)
    const url = `${this.apiUrl}/Tecnologia/atualizar/${tecnologia.idTecnologia}`;
    return this.http.put<void>(url, tecnologia);
  }

  excluirTecnologia(tecnologia: Tecnologia): Observable<void> {
    console.log("idididi: " + tecnologia.idTecnologia);
    const url = `${this.apiUrl}/Tecnologia/deletar/${tecnologia.idTecnologia}`;
    console.log("url: " + url);
    return this.http.delete<void>(url);
  }
}
