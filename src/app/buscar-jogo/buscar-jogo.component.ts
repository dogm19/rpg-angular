import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buscar-jogo',
  templateUrl: './buscar-jogo.component.html',
  styleUrls: ['./buscar-jogo.component.css']
})
export class BuscarJogoComponent {
  searchTerm!: string;
  jogos!: any[];

  constructor(private route: Router, private http: HttpClient) { }
  
  buscarJogo() {
    this.http.get<any>('http://localhost:3000/jogos?nome_like=' + this.searchTerm).subscribe(data => {
      this.jogos = data;
    });
  }
  voltarJogo() {
    this.route.navigate(['/jogos']);
  }
}
