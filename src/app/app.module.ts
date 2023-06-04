import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListaJogosComponent } from './lista-jogos/lista-jogos.component';
import { AdicionarJogoComponent } from './adicionar-jogo/adicionar-jogo.component';
import { EditarJogoComponent } from './editar-jogo/editar-jogo.component';
import { BuscarJogoComponent } from './buscar-jogo/buscar-jogo.component';
import { DeletarJogoComponent } from './deletar-jogo/deletar-jogo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaJogosComponent,
    AdicionarJogoComponent,
    EditarJogoComponent,
    BuscarJogoComponent,
    DeletarJogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
