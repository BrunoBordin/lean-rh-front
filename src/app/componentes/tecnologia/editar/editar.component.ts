import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TecnologiaService } from '../../../../services/tecnologiaService';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class ModalEditarTecnologiaComponent {
  tecnologiaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tecnologiaService: TecnologiaService,
    public dialogRef: MatDialogRef<ModalEditarTecnologiaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.tecnologiaForm = this.fb.group({
      idTecnologia: [data.idTecnologia, Validators.required],
      nome: [data.nome, Validators.required]
    });
  }

  onSubmit() {
    console.log('onSubmit = ' + this.tecnologiaForm.valid);
    if (this.tecnologiaForm.valid) {
      console.log(this.tecnologiaForm.value);
      this.tecnologiaService.atualizarTecnologia(this.tecnologiaForm.value).subscribe(
        response => {
          console.log('Peso tecnologia atualizad com sucesso', response);
          this.dialogRef.close(true);
        },
        error => {
          console.error('Erro ao atualizar a vaga tecnologia', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
