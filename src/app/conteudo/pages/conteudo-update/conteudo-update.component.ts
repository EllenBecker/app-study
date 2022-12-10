import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IConteudo } from '../../models/IConteudo.model';
import { ConteudoService } from '../../services/conteudo.service';

@Component({
  selector: 'conteudo-update',
  templateUrl: './conteudo-update.component.html',
  styleUrls: ['./conteudo-update.component.css'],
})
export class UpdateConteudoComponent implements OnInit {
  conteudo = {} as IConteudo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private conteudoService: ConteudoService,
    private routeNavigate: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.carregarConteudo(id);
  }

  carregarConteudo(id: number) {
    this.conteudoService.buscarUm(id).then((result) => {
      console.log(result);
      this.conteudo = !!result ? result : ({} as IConteudo);
    });
  }

  atualizarConteudo() {
    this.conteudo = {
      ...this.conteudo,
      descricao: 'Conteudo atualizado',
    } as IConteudo; // ToDo: Utilizado ate a criação dos campos em tela
    this.conteudoService.atualizar(this.conteudo).then(() => {
      this.routeNavigate.navigate(['conteudo/list']);
    });
  }
}
