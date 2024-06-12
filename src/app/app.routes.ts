import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnologiaComponent } from './componentes/tecnologia/listaTecnologia/tecnologia.component';
import { VagaPesoComponent } from './componentes/vaga-peso/listaVagasPeso/vaga-peso.component';
import { ListaEntrevistaComponent } from './componentes/entrevista/lista-entrevista/lista-entrevista.component';
import { CadastroEntrevistaComponent } from './componentes/entrevista/cadastro-entrevista/cadastro-entrevista.component';
import { RelatorioComponent } from './componentes/relatorio/relatorio.component';
import { ListaEmpresaComponent } from './componentes/empresa/lista-empresa/lista-empresa.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListaCandidatoComponent } from './componentes/candidato/lista-candidato/lista-candidato.component';
import { ListaVagaComponent } from './componentes/vaga/lista-vaga/lista-vaga.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'empresa', component: ListaEmpresaComponent },
    { path: 'candidato', component: ListaCandidatoComponent },
    { path: 'vaga', component: ListaVagaComponent },
    { path: 'tecnologia', component: TecnologiaComponent },
    { path: 'entrevista', component: ListaEntrevistaComponent },
    { path: 'cadastro-entrevista', component: CadastroEntrevistaComponent },
    { path: 'vaga-peso', component: VagaPesoComponent },
    { path: 'relatorio', component: RelatorioComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }