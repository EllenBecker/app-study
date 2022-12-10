import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateConteudoComponent } from './pages/conteudo-create/conteudo-create.component';
import { ListConteudoComponent } from './pages/conteudo-list/conteudo-list.component';
import { UpdateConteudoComponent } from './pages/conteudo-update/conteudo-update.component';

@Component({
  template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent {}

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'conteudo', redirectTo: 'conteudo/create', pathMatch: 'full' },
      { path: 'conteudo/create', component: CreateConteudoComponent },
      { path: 'conteudo/list', component: ListConteudoComponent },
      { path: 'conteudo/update/:id', component: UpdateConteudoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConteudoRoutingModule {}
