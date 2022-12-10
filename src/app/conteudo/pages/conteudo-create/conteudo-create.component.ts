import { Component, OnInit } from '@angular/core';
import { IConteudo } from '../../models/IConteudo.model';

@Component({
  selector: 'conteudo-create',
  templateUrl: './conteudo-create.component.html',
  styleUrls: ['./conteudo-create.component.css'],
})
export class CreateConteudoComponent implements OnInit {
  conteudo = {} as IConteudo;

  constructor() {}

  ngOnInit(): void {}

  salvarConteudo() {
    console.log('salvarConteudo');
  }
}
