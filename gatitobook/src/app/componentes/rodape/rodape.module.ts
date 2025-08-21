import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './rodape.component';
import { AnimaisRoutingModule } from "src/app/animais/animais-routing.module";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RodapeComponent
  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    RouterModule
  ],
  exports: [
    RodapeComponent
  ]
})
export class RodapeModule { }
