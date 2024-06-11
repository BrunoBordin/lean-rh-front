import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VagaService } from '../../../../services/vagaService';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-vaga-peso',
  templateUrl: './edit-vaga-peso.component.html',
  styleUrl: './edit-vaga-peso.component.scss'
})
export class EditVagaPesoComponent {
  vagaPesoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private vagaService: VagaService,
    public dialogRef: MatDialogRef<EditVagaPesoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.vagaPesoForm = this.fb.group({
      idVagaTecnologiaRequisito: [data.idVagaTecnologiaRequisito, Validators.required],
      peso: [data.peso, Validators.required]
    });
  }

  onSubmit() {
    console.log('onSubmit = ' + this.vagaPesoForm.valid);
    if (this.vagaPesoForm.valid) {
      console.log(this.vagaPesoForm.value);
      this.vagaService.atualizarVaga(this.vagaPesoForm.value).subscribe(
        response => {
          console.log('Tecnologia atualizada com sucesso', response);
          this.dialogRef.close(true);
        },
        error => {
          console.error('Erro ao atualizar a tecnologia', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
