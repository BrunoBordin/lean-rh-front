import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmpresaService } from '../../../../services/empresa.Service';

@Component({
  selector: 'app-edita-empresa',
  templateUrl: './edita-empresa.component.html',
  styleUrl: './edita-empresa.component.scss'
})
export class EditaEmpresaComponent {
  empresaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empresaService: EmpresaService,
    public dialogRef: MatDialogRef<EditaEmpresaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empresaForm = this.fb.group({
      id: [data.id, Validators.required],
      nome: [data.nome, Validators.required]
    });
  }

  onSubmit() {
    console.log('onSubmit = ' + this.empresaForm.valid);
    if (this.empresaForm.valid) {
      console.log(this.empresaForm.value);
      this.empresaService.atualizarEmpresa(this.empresaForm.value).subscribe(
        response => {
          console.log('Nome empresa atualizado com sucesso', response);
          this.dialogRef.close(true);
        },
        error => {
          console.error('Erro ao atualizar a empresa', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
