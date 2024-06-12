import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entrevista } from '../models/Entrevista';
import { Candidato } from '../models/Candidato';
import { TecnologiaEntrevista } from '../models/TecnologiaEntrevista';
import { EntrevistaVaga } from '../models/EntrevistaVaga';

@Injectable({
    providedIn: 'root'
})
export class ServiceRh {
    private apiUrl = 'https://localhost:7097';

    constructor(private http: HttpClient) { }

    obterEntrevistas(): Observable<Entrevista[]> {
        const url = `${this.apiUrl}/${'Tecnologia/listar'}`;
        return this.http.get<Entrevista[]>(url);
    }

    obterCandidato(): Observable<Candidato[]> {
        const url = `${this.apiUrl}/${'Candidato/listar'}`;
        return this.http.get<Candidato[]>(url);
    }

    adicionarEmtrevistaTecnologia(tecnologia: any): Observable<Entrevista> {
        return this.http.post<Entrevista>(this.apiUrl + '/Tecnologia/cadastrar', tecnologia);
    }


    adicionarConfigurarEntrevista(entrevistaVaga: EntrevistaVaga): Observable<Entrevista> {
        debugger;
        const url = `${this.apiUrl}/${'Vaga/candidato/'}${entrevistaVaga.idVaga}/${entrevistaVaga.idCandidato}`;
        return this.http.post<Entrevista>(url, entrevistaVaga.idsTecnologia);
    }


}