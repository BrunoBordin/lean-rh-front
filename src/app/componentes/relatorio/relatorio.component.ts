import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RelatorioService } from '../../../services/relatorioService';
import { VagaService } from '../../../services/vagaService';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrl: './relatorio.component.scss'
})
export class RelatorioComponent implements OnInit, AfterViewInit {
  displayedColumns = ['candidato', 'pontuacao'];
  selectedVaga: string | undefined;
  dataSource = new MatTableDataSource<any>([]);
  vagas: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private vagaService: VagaService, private service: RelatorioService) { }

  ngOnInit(): void {

    this.vagaService.obterVagas().subscribe(data => {
      this.vagas = data;
    });
  }

  onVagaSelected(id: string) {
    this.selectedVaga = id;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public loadData(): void {

    this.service.gerarRelatorio(this.selectedVaga).subscribe((data: any) => {
      console.log(data)
      this.dataSource.data = data;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onPesquisar(): void {
    this.loadData();
  }

}
