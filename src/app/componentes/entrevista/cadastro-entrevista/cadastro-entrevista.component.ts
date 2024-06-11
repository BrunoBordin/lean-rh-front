import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VagaService } from '../../../../services/vagaService';
import { MatDialogRef } from '@angular/material/dialog';
import { TecnologiaService } from '../../../../services/tecnologiaService';
import { ServiceRh } from '../../../../services/serviceRh';

@Component({
  selector: 'app-cadastro-entrevista',
  templateUrl: './cadastro-entrevista.component.html',
  styleUrl: './cadastro-entrevista.component.scss'
})
export class CadastroEntrevistaComponent implements OnInit {
  tecnologiaForm: boolean;
  selectedVaga: string | undefined;
  selectedCandidato: string | undefined;
  selectedTecnologia: string | undefined;
  vagas: any[] = [];
  candidato: any[] = [];
  tecnologia: any[] = [];

  constructor(private serviceRh: ServiceRh, private vagaService: VagaService, private tecnologiaService: TecnologiaService, private fb: FormBuilder, public dialogRef: MatDialogRef<CadastroEntrevistaComponent>) {
    this.tecnologiaForm = false;
  }

  onVagaSelected(id: string) {
    this.selectedVaga = id;
  }

  onCandidatoSelected(id: string) {
    console.log(id);
    this.selectedCandidato = id;
  }

  onTecnologiaSelected(id: string) {
    console.log(id);
    this.selectedTecnologia = id;
  }

  ngOnInit() {

    this.vagaService.obterVagas().subscribe(data => {
      this.vagas = data;
    });

    this.serviceRh.obterCandidato().subscribe(data => {
      this.candidato = data;
    });

    this.tecnologiaService.obterTecnologiasEmpresa(1).subscribe(data => {
      this.tecnologia = data;
    });

  }

  onSubmit() {

  }
  onCancel(): void {
    this.dialogRef.close();
  }

}
