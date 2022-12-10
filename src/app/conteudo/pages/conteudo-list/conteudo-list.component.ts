import { Component, OnInit } from '@angular/core';
import { IConteudo } from '../../models/IConteudo.model';

@Component({
  selector: 'conteudo-list',
  templateUrl: './conteudo-list.component.html',
  styleUrls: ['./conteudo-list.component.css'],
})
export class ListConteudoComponent implements OnInit {
  conteudo = {} as IConteudo;

  constructor() {}

  ngOnInit(): void {}

  listarConteudos() {
    console.log('listarConteudos');
  }
}
