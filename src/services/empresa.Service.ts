import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../models/Empresa';

@Injectable({
    providedIn: 'root'
})
export class EmpresaService {
    private apiUrl = 'https://localhost:7097';

    constructor(private http: HttpClient) { }

    adicionarEmpresa(empresa: Empresa): Observable<Empresa> {
        return this.http.post<Empresa>(this.apiUrl + '/Empresa/cadastrar', empresa);
    }

    obterEmpresas(): Observable<Empresa[]> {
        return this.http.get<Empresa[]>(`${this.apiUrl}/Empresa/listar`);
    }

    atualizarEmpresa(empresa: Empresa): Observable<void> {
        console.log("element id: " + empresa.id)
        const url = `${this.apiUrl}/Empresa/atualizar/${empresa.id}`;
        return this.http.put<void>(url, empresa);
    }

    excluirEmpresa(empresa: Empresa): Observable<void> {
        console.log("idididi: " + empresa.id);
        const url = `${this.apiUrl}/Empresa/deletar/${empresa.id}`;
        console.log("url: " + url);
        return this.http.delete<void>(url);
    }

    obterEmpresasEmpresa(id: number): Observable<Empresa[]> {
        const url = `${this.apiUrl}/Empresa/porEmpresa/${id}`;
        return this.http.get<Empresa[]>(`${url}`);
    }

}
