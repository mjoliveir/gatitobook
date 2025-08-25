import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
//import { LoginGuard } from './autenticacao/login.guard';
import { DetalheAnimalComponent } from './animais/detalhe-animal/detalhe-animal.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

  {
    path: 'home',
    loadChildren:() => import('./home/home.module').then((m) => m.HomeModule),
    //  canLoad: [LoginGuard]
  },

  {
    path: 'animais',
    loadChildren: () => import('./animais/animais.module').then((m) => m.AnimaisModule),
    canLoad:[AutenticacaoGuard]
  },
  {
    path: 'animais/:animalId', //os dois pontos servem para criar um path nao estático, um path dinâmico
    component: DetalheAnimalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
