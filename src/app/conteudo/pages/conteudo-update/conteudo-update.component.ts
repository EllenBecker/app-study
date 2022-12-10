import { Component, OnInit } from '@angular/core';
import { IConteudo } from '../../models/IConteudo.model';

@Component({
  selector: 'conteudo-update',
  templateUrl: './conteudo-update.component.html',
  styleUrls: ['./conteudo-update.component.css'],
})
export class UpdateConteudoComponent implements OnInit {
  conteudo = {} as IConteudo;

  constructor() {}

  ngOnInit(): void {}

  atualizarConteudo() {
    console.log('atualizarConteudo');
  }
}
