import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar-jogo',
  templateUrl: './editar-jogo.component.html',
  styleUrls: ['./editar-jogo.component.css']
})
export class EditarJogoComponent implements OnInit {
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

  atualizarJogo() {
    this.http.put(`http://localhost:3000/jogos/${this.jogo.id}`, this.jogo).subscribe(() => {
      this.router.navigate(['/jogos']);
    });
  }
}
