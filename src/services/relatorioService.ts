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

    obterVagasVagasRequisitos(): Observable<Vaga[]> {
        const url = `${this.apiUrl}/${'Vaga/listarTecnologia/requisito'}`;
        return this.http.get<Vaga[]>(url);
    }

    adicionarVaga(Vaga: Vaga): Observable<Vaga> {
        return this.http.post<Vaga>(this.apiUrl + '/Vaga/tecnologia/requisito', Vaga);
    }

    atualizarVaga(vagaTecnologiaRequisito: VagaTecnologiaRequisito): Observable<VagaTecnologiaRequisito> {
        const url = `${this.apiUrl}/${'Vaga/tecnologia/requisito/peso'}/${vagaTecnologiaRequisito.idVagaTecnologiaRequisito}`;
        return this.http.put<VagaTecnologiaRequisito>(url, vagaTecnologiaRequisito);
    }
}