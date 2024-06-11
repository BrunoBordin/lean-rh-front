import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnologiaComponent } from './componentes/tecnologia/listaTecnologia/tecnologia.component';
import { ModalCadastroTecnologiaComponent } from './componentes/tecnologia/cadastraTecnologia/cadastro-tecnologia';
import { VagaPesoComponent } from './componentes/vaga-peso/listaVagasPeso/vaga-peso.component';
import { ListaEntrevistaComponent } from './componentes/entrevista/lista-entrevista/lista-entrevista.component';
import { CadastroEntrevistaComponent } from './componentes/entrevista/cadastro-entrevista/cadastro-entrevista.component';
import { AppComponent } from './app.component';
import { RelatorioComponent } from './componentes/relatorio/relatorio.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
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