import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VagaService } from '../../../../services/vagaService';
import { MatDialogRef } from '@angular/material/dialog';
import { ListaVagaComponent } from '../lista-vaga/lista-vaga.component';

@Component({
  selector: 'app-cadastra-vaga',
  templateUrl: './cadastra-vaga.component.html',
  styleUrl: './cadastra-vaga.component.scss'
})
export class CadastraVagaComponent {
  vagaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private vagaService: VagaService,
    public dialogRef: MatDialogRef<ListaVagaComponent>
  ) {
    this.vagaForm = this.fb.group({
      descricao: ['', Validators.required],
      titulo: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.vagaForm.valid) {
      this.vagaService.adicionarVaga(this.vagaForm.value).subscribe(
        response => {
          console.log('Vaga cadastrada com sucesso!', response);
          this.dialogRef.close();
        },
        error => {
          console.error('Erro ao cadastrar vaga', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
