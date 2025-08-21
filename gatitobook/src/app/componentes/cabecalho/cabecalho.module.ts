import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho.component';
import { AnimaisRoutingModule } from "src/app/animais/animais-routing.module";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    RouterModule
  ],
  exports:[
    CabecalhoComponent
  ]
})
export class CabecalhoModule { }
