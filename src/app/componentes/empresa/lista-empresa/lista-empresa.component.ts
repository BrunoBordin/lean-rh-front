import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmpresaService } from '../../../../services/empresa.Service';
import { MatDialog } from '@angular/material/dialog';
import { CadastraEmpresaComponent } from '../cadastra-empresa/cadastra-empresa.component';
import { EditaEmpresaComponent } from '../edita-empresa/edita-empresa.component';

@Component({
  selector: 'app-lista-empresa',
  templateUrl: './lista-empresa.component.html',
  styleUrl: './lista-empresa.component.scss'
})
export class ListaEmpresaComponent implements OnInit, AfterViewInit {
  displayedColumns = ['nome', 'id', 'actions'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: EmpresaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CadastraEmpresaComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.recarregar();
    });
  }
  openDialogEdit(element: any): void {
    const dialogRef = this.dialog.open(EditaEmpresaComponent, {
      width: '400px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.recarregar();
    });
  }

  public loadData(): void {
    this.service.obterEmpresas().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

  editElement(element: any): void {
    this.service.atualizarEmpresa(element).subscribe(() => {
      this.recarregar();
    });
  }

  deleteElement(element: any): void {
    console.log(element);
    this.service.excluirEmpresa(element).subscribe(() => {
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
