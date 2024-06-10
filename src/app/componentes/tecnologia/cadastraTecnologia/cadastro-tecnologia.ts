import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TecnologiaService } from '../../../../services/tecnologiaService';

@Component({
  selector: 'app-modal-cadastro-tecnologia',
  templateUrl: './cadastro-tecnologia.html',
  styleUrls: ['./cadastro-tecnologia.scss']
})
export class ModalCadastroTecnologiaComponent {
  tecnologiaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tecnologiaService: TecnologiaService,
    public dialogRef: MatDialogRef<ModalCadastroTecnologiaComponent>
  ) {
    this.tecnologiaForm = this.fb.group({
      nome: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.tecnologiaForm.valid) {
      this.tecnologiaService.adicionarTecnologia(this.tecnologiaForm.value).subscribe(
        response => {
          console.log('Tecnologia cadastrada com sucesso!', response);
          this.dialogRef.close();
        },
        error => {
          console.error('Erro ao cadastrar tecnologia', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
