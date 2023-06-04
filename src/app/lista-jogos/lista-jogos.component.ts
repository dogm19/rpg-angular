import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-jogos',
  templateUrl: './lista-jogos.component.html',
  styleUrls: ['./lista-jogos.component.css']
})
export class ListaJogosComponent implements OnInit {
  jogos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.carregarJogos();
  }

  carregarJogos() {
    this.http.get<any>('http://localhost:3000/jogos').subscribe(data => {
      this.jogos = data;
    });
  }

  deletarJogo(id: number) {
    this.http.delete(`http://localhost:3000/jogos/${id}`).subscribe(() => {
      this.carregarJogos();
    });
  }
}
