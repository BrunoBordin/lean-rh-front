import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatoService } from '../../../../services/candidatoService';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edita-candidato',
  templateUrl: './edita-candidato.component.html',
  styleUrl: './edita-candidato.component.scss'
})
export class EditaCandidatoComponent {
  candidatoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private candidatoService: CandidatoService,
    public dialogRef: MatDialogRef<EditaCandidatoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.candidatoForm = this.fb.group({
      id: [data.id, Validators.required],
      nome: [data.nome, Validators.required]
    });
  }

  onSubmit() {
    console.log('onSubmit = ' + this.candidatoForm.valid);
    if (this.candidatoForm.valid) {
      console.log(this.candidatoForm.value);
      this.candidatoService.atualizarCandidato(this.candidatoForm.value).subscribe(
        response => {
          console.log('Nome candidato atualizado com sucesso', response);
          this.dialogRef.close(true);
        },
        error => {
          console.error('Erro ao atualizar candidato', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
