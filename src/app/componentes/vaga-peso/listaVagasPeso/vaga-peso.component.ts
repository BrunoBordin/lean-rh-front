import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { VagaService } from '../../../../services/vagaService';
import { MatPaginator } from '@angular/material/paginator';
import { EditVagaPesoComponent } from '../edit-vaga-peso/edit-vaga-peso.component';

@Component({
  selector: 'app-vaga-peso',
  templateUrl: './vaga-peso.component.html',
  styleUrls: ['./vaga-peso.component.scss']
})
export class VagaPesoComponent implements OnInit, AfterViewInit {
  displayedColumns = ['idVagaTecnologiaRequisito', 'nomeVaga', 'nomeTecnologia', 'peso','actions'];

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
    const dialogRef = this.dialog.open(EditVagaPesoComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.recarregar();
    });
  }
  openDialogEdit(element: any): void {
    const dialogRef = this.dialog.open(EditVagaPesoComponent, {
      width: '400px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.recarregar();
    });
  }

  public loadData(): void {
    this.service.obterVagasVagasRequisitos().subscribe((data: any) => {
      debugger;
      this.dataSource.data = data;
    });
  }

  editElement(element: any): void {
    this.service.atualizarVaga(element).subscribe(() => {
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
