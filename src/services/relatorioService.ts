import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/Vaga';
import { VagaTecnologiaRequisito } from '../models/VagaTecnologiaRequisito';

@Injectable({
    providedIn: 'root'
})
export class RelatorioService {
    private apiUrl = 'https://localhost:7097';

    constructor(private http: HttpClient) { }

    gerarRelatorio(): Observable<Vaga[]> {
        const url = `${this.apiUrl}/${'Vaga/listarTecnologia/requisito'}`;
        return this.http.get<Vaga[]>(url);
    }

}