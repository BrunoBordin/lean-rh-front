import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaEmpresaComponent } from '../lista-empresa/lista-empresa.component';
import { EmpresaService } from '../../../../services/empresa.Service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-cadastra-empresa',
  templateUrl: './cadastra-empresa.component.html',
  styleUrl: './cadastra-empresa.component.scss'
})
export class CadastraEmpresaComponent {
  empresaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empresaService: EmpresaService,
    public dialogRef: MatDialogRef<ListaEmpresaComponent>
  ) {
    this.empresaForm = this.fb.group({
      nome: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.empresaForm.valid) {
      this.empresaService.adicionarEmpresa(this.empresaForm.value).subscribe(
        response => {
          console.log('Empresa cadastrada com sucesso!', response);
          this.dialogRef.close();
        },
        error => {
          console.error('Erro ao cadastrar empresa', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
