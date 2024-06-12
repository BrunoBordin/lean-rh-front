import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CadastraVagaComponent } from '../cadastra-vaga/cadastra-vaga.component';
import { EditaVagaComponent } from '../edita-vaga/edita-vaga.component';
import { VagaService } from '../../../../services/vagaService';

@Component({
  selector: 'app-lista-vaga',
  templateUrl: './lista-vaga.component.html',
  styleUrl: './lista-vaga.component.scss'
})
export class ListaVagaComponent implements OnInit, AfterViewInit {
  displayedColumns = ['titulo', 'descricao', 'aberta', 'id', 'actions'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: VagaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CadastraVagaComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.recarregar();
    });
  }
  openDialogEdit(element: any): void {
    const dialogRef = this.dialog.open(EditaVagaComponent, {
      width: '400px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.recarregar();
    });
  }

  public loadData(): void {
    this.service.obterVagas().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

  editElement(element: any): void {
    this.service.atualizarVaga(element).subscribe(() => {
      this.recarregar();
    });
  }

  deleteElement(element: any): void {
    console.log(element);
    this.service.excluirVaga(element).subscribe(() => {
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
