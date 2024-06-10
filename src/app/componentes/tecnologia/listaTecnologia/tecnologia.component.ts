import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TecnologiaService } from '../../../../services/tecnologiaService';
import { ModalCadastroTecnologiaComponent } from '../cadastraTecnologia/cadastro-tecnologia';
import { ModalEditarTecnologiaComponent } from '../editar/editar.component';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.scss']
})
export class TecnologiaComponent implements OnInit, AfterViewInit {
  displayedColumns = ['nome', 'idTecnologia', 'actions'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: TecnologiaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalCadastroTecnologiaComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.recarregar();
    });
  }
  openDialogEdit(element: any): void {
    const dialogRef = this.dialog.open(ModalEditarTecnologiaComponent, {
      width: '400px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.recarregar();
    });
  }

  public loadData(): void {
    this.service.obterTecnologias().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

  editElement(element: any): void {
    this.service.atualizarTecnologia(element).subscribe(() => {
      this.recarregar();
    });
  }

  deleteElement(element: any): void {
    console.log(element);
    this.service.excluirTecnologia(element).subscribe(() => {
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
