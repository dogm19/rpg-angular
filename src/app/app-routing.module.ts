import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaJogosComponent } from './lista-jogos/lista-jogos.component';
import { AdicionarJogoComponent } from './adicionar-jogo/adicionar-jogo.component';
import { EditarJogoComponent } from './editar-jogo/editar-jogo.component';
import { DeletarJogoComponent } from './deletar-jogo/deletar-jogo.component';
import { BuscarJogoComponent } from './buscar-jogo/buscar-jogo.component';

const routes: Routes = [
  { path: '', redirectTo: '/jogos', pathMatch: 'full' },
  { path: 'jogos', component: ListaJogosComponent },
  { path: 'adicionar', component: AdicionarJogoComponent },
  { path: 'editar/:id', component: EditarJogoComponent },
  { path: 'deletar/:id', component: DeletarJogoComponent },
  { path: 'buscar', component: BuscarJogoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
