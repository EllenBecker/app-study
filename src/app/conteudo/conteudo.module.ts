import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ConteudoRoutingModule,
  GenericRouterComponent,
} from './conteudo-routing.module';
import { CreateConteudoComponent } from './pages/conteudo-create/conteudo-create.component';
import { UpdateConteudoComponent } from './pages/conteudo-update/conteudo-update.component';

@NgModule({
  declarations: [
    GenericRouterComponent,
    CreateConteudoComponent,
    UpdateConteudoComponent,
  ],
  imports: [CommonModule, FormsModule, ConteudoRoutingModule],
})
export class ConteudoModule {}
