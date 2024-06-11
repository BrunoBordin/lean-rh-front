import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Relatorio } from '../models/Relatorio';

@Injectable({
    providedIn: 'root'
})
export class RelatorioService {

    private apiUrl = 'https://localhost:7097';

    constructor(private http: HttpClient) { }

    gerarRelatorio(id: any): Observable<Relatorio[]> {
        const url = `${this.apiUrl}/${'RelatorioRh/'}${id}`;
        return this.http.get<Relatorio[]>(url);
    }

}