import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-jogo',
  templateUrl: './adicionar-jogo.component.html',
  styleUrls: ['./adicionar-jogo.component.css']
})
export class AdicionarJogoComponent {
  jogo: any = {};

  constructor(private http: HttpClient, private router: Router) { }

  adicionarJogo() {
    this.http.post('http://localhost:3000/jogos', this.jogo).subscribe(() => {
      this.router.navigate(['/jogos']);
    });
  }
}
