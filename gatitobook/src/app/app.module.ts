import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { RodapeModule } from './componentes/rodape/rodape.module';
import { CartaoModule } from './componentes/cartao/cartao.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { AnimaisModule } from './animais/animais.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CabecalhoModule,
    RodapeModule,
    CartaoModule,
    AutenticacaoModule,
    AnimaisModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
