import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { TecnologiaComponent } from './componentes/tecnologia/listaTecnologia/tecnologia.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ModalCadastroTecnologiaComponent } from './componentes/tecnologia/cadastraTecnologia/cadastro-tecnologia';
import { ReactiveFormsModule } from '@angular/forms';
import{ModalEditarTecnologiaComponent} from './componentes/tecnologia/editar/editar.component'

@NgModule({
    declarations: [AppComponent
        , TecnologiaComponent
        , ModalCadastroTecnologiaComponent
        ,ModalEditarTecnologiaComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        MatButtonModule,
        MatTableModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatCardModule,
        MatFormFieldModule
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
