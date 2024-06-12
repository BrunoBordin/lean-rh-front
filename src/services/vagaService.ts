import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/Vaga';
import { VagaTecnologiaRequisito } from '../models/VagaTecnologiaRequisito';

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  private apiUrl = 'https://localhost:7097';

  constructor(private http: HttpClient) { }

  obterVagasVagasRequisitos(): Observable<Vaga[]> {
    const url = `${this.apiUrl}/${'Vaga/listarTecnologia/requisito'}`;
    return this.http.get<Vaga[]>(url);
  }

  adicionarVagaRequisito(vaga: VagaTecnologiaRequisito): Observable<Vaga> {
    return this.http.post<Vaga>(this.apiUrl + '/Vaga/tecnologia/requisito', vaga);
  }

  atualizarVaga(vagaTecnologiaRequisito: VagaTecnologiaRequisito): Observable<VagaTecnologiaRequisito> {
    const url = `${this.apiUrl}/${'Vaga/tecnologia/requisito/peso'}/${vagaTecnologiaRequisito.idVagaTecnologiaRequisito}`;
    return this.http.put<VagaTecnologiaRequisito>(url, vagaTecnologiaRequisito);
  }
  excluirVaga(vaga: Vaga): Observable<void> {
    console.log("idididi: " + vaga.id);
    const url = `${this.apiUrl}/Vaga/deletar/${vaga.id}`;
    console.log("url: " + url);
    return this.http.delete<void>(url);
  }

  obterVagas(): Observable<Vaga[]> {
    const url = `${this.apiUrl}/${'Vaga/listar'}`;
    return this.http.get<Vaga[]>(url);
  }
}