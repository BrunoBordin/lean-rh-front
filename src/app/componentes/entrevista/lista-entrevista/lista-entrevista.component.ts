import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TecnologiaService } from '../../../../services/tecnologiaService';
import { Router } from '@angular/router';
import { CadastroEntrevistaComponent } from '../cadastro-entrevista/cadastro-entrevista.component';


@Component({
  selector: 'app-lista-entrevista',
  templateUrl: './lista-entrevista.component.html',
  styleUrl: './lista-entrevista.component.scss'
})

export class ListaEntrevistaComponent implements OnInit, AfterViewInit {
  displayedColumns = ['nome', 'idTecnologia', 'actions'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: TecnologiaService, private dialog: MatDialog, private router: Router) { }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CadastroEntrevistaComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.recarregar();
    });
  }
  openDialogEdit(element: any): void {
    const dialogRef = this.dialog.open(CadastroEntrevistaComponent, {
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
