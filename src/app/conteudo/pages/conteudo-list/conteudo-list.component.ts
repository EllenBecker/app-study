import { Component, OnInit } from '@angular/core';
import { IListaConteudo } from '../../models/IListaConteudo';
import { ConteudoService } from '../../services/conteudo.service';

@Component({
  selector: 'conteudo-list',
  templateUrl: './conteudo-list.component.html',
  styleUrls: ['./conteudo-list.component.css'],
})
export class ListConteudoComponent implements OnInit {
  listaConteudo = {} as IListaConteudo;

  constructor(private conteudoService: ConteudoService) {}

  ngOnInit(): void {
    this.listarConteudos();
  }

  listarConteudos() {
    console.log('listarConteudos');
    this.listaConteudo = {
      conteudo: [],
    } as IListaConteudo;
    this.conteudoService.buscarTodos().then((result) => {
      this.listaConteudo.conteudo = !!result ? result : [];
    });
  }
}
