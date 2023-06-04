import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deletar-jogo',
  templateUrl: './deletar-jogo.component.html',
  styleUrls: ['./deletar-jogo.component.css']
})
export class DeletarJogoComponent implements OnInit {
  jogo: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.carregarJogo(id);
    });
  }

  carregarJogo(id: number) {
    this.http.get<any>(`http://localhost:3000/jogos/${id}`).subscribe(data => {
      this.jogo = data;
    });
  }

  deletarJogo() {
    this.http.delete(`http://localhost:3000/jogos/${this.jogo.id}`).subscribe(() => {
      this.router.navigate(['/jogos']);
    });
  }
}
