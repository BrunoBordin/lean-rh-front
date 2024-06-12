import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VagaService } from '../../../../services/vagaService';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastra-vaga-peso',
  templateUrl: './cadastra-vaga-peso.component.html',
  styleUrl: './cadastra-vaga-peso.component.scss'
})
export class CadastraVagaPesoComponent {
  tecnologiaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private vagaService: VagaService,
    public dialogRef: MatDialogRef<CadastraVagaPesoComponent>
  ) {
    this.tecnologiaForm = this.fb.group({
      nome: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.tecnologiaForm.valid) {
      this.vagaService.adicionarVagaRequisito(this.tecnologiaForm.value).subscribe(
        response => {
          console.log('Vaga Tecnologia Peso cadastrada com sucesso!', response);
          this.dialogRef.close();
        },
        error => {
          console.error('Erro ao cadastrar vaga tecnologia', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
