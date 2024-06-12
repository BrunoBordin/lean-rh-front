import { Component } from '@angular/core';
import { CandidatoService } from '../../../../services/candidatoService';
import { MatDialogRef } from '@angular/material/dialog';
import { ListaCandidatoComponent } from '../lista-candidato/lista-candidato.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastra-candidato',
  templateUrl: './cadastra-candidato.component.html',
  styleUrl: './cadastra-candidato.component.scss'
})
export class CadastraCandidatoComponent {
  candidatoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private candidatoService: CandidatoService,
    public dialogRef: MatDialogRef<ListaCandidatoComponent>
  ) {
    this.candidatoForm = this.fb.group({
      nome: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.candidatoForm.valid) {
      this.candidatoService.adicionarCandidato(this.candidatoForm.value).subscribe(
        response => {
          console.log('Candidato cadastrada com sucesso!', response);
          this.dialogRef.close();
        },
        error => {
          console.error('Erro ao cadastrar Candidato', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
