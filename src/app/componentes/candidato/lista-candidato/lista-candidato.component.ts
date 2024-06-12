import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EditaCandidatoComponent } from '../edita-candidato/edita-candidato.component';
import { CadastraCandidatoComponent } from '../cadastra-candidato/cadastra-candidato.component';
import { CandidatoService } from '../../../../services/candidatoService';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-lista-candidato',
  templateUrl: './lista-candidato.component.html',
  styleUrl: './lista-candidato.component.scss'
})
export class ListaCandidatoComponent implements OnInit, AfterViewInit {
  displayedColumns = ['nome', 'id', 'actions'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: CandidatoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CadastraCandidatoComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.recarregar();
    });
  }
  openDialogEdit(element: any): void {
    const dialogRef = this.dialog.open(EditaCandidatoComponent, {
      width: '400px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.recarregar();
    });
  }

  public loadData(): void {
    this.service.obterCandidatos().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

  editElement(element: any): void {
    this.service.atualizarCandidato(element).subscribe(() => {
      this.recarregar();
    });
  }

  deleteElement(element: any): void {
    console.log(element);
    this.service.excluirCandidato(element).subscribe(() => {
      this.recarregar();
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public recarregar(): void {
    this.loadData();
  }
}
