import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RelatorioService } from '../../../services/relatorioService';

@Component({
  selector: 'app-relatorio',
  standalone: true,
  imports: [],
  templateUrl: './relatorio.component.html',
  styleUrl: './relatorio.component.scss'
})
export class RelatorioComponent implements OnInit, AfterViewInit {
  displayedColumns = ['idVagaTecnologiaRequisito', 'nomeVaga', 'nomeTecnologia', 'peso', 'actions'];

  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: RelatorioService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public loadData(): void {
    this.service.obterVagasVagasRequisitos().subscribe((data: any) => {
      this.dataSource.data = data;
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
