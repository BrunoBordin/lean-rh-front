import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidato } from '../models/Candidato';

@Injectable({
    providedIn: 'root'
})
export class CandidatoService {
    private apiUrl = 'https://localhost:7097';

    constructor(private http: HttpClient) { }

    adicionarCandidato(candidato: Candidato): Observable<Candidato> {
        return this.http.post<Candidato>(this.apiUrl + '/Candidato/cadastrar', candidato);
    }

    obterCandidatos(): Observable<Candidato[]> {
        return this.http.get<Candidato[]>(`${this.apiUrl}/Candidato/listar`);
    }

    atualizarCandidato(candidato: Candidato): Observable<void> {
        console.log("element id: " + candidato.id)
        const url = `${this.apiUrl}/Candidato/atualizar/${candidato.id}`;
        return this.http.put<void>(url, candidato);
    }

    excluirCandidato(candidato: Candidato): Observable<void> {
        console.log("idididi: " + candidato.id);
        const url = `${this.apiUrl}/Candidato/deletar/${candidato.id}`;
        console.log("url: " + url);
        return this.http.delete<void>(url);
    }

    obterCandidatosCandidato(id: number): Observable<Candidato[]> {
        const url = `${this.apiUrl}/Candidato/porCandidato/${id}`;
        return this.http.get<Candidato[]>(`${url}`);
    }

}
