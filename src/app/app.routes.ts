import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnologiaComponent } from './componentes/tecnologia/listaTecnologia/tecnologia.component';
import { ModalCadastroTecnologiaComponent } from './componentes/tecnologia/cadastraTecnologia/cadastro-tecnologia';

const routes: Routes = [
    { path: '', redirectTo: '/rh', pathMatch: 'full' },
    { path: 'rh', component: TecnologiaComponent },
    { path: 'cadastro-tecnologia', component: ModalCadastroTecnologiaComponent }  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }