import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRoutes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutenticacaoInterceptor } from './autenticacao.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AutenticacaoInterceptor,
    multi: true
    }
  ]
})
export class AutenticacaoModule { }
