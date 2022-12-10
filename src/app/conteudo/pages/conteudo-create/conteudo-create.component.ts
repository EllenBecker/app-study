import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IConteudo } from '../../models/IConteudo.model';
import { ConteudoService } from '../../services/conteudo.service';

@Component({
  selector: 'conteudo-create',
  templateUrl: './conteudo-create.component.html',
  styleUrls: ['./conteudo-create.component.css'],
})
export class CreateConteudoComponent implements OnInit {
  conteudo = {} as IConteudo;

  constructor(
    private conteudoService: ConteudoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  salvarConteudo() {
    this.conteudo = {
      tipoTecnologia: 'NODEJS',
      descricao: 'Descrição teste de cadastro',
    } as IConteudo; // ToDo: utilizado ate a criação dos campos em tela
    this.conteudoService.cadastrar(this.conteudo).then((result) => {
      console.log(`Conteudo cadastrado com sucesso. ID: ${result?.id}`);
      this.conteudo = {} as IConteudo;

      this.router.navigate(['conteudo/list']);
    });
  }
}
