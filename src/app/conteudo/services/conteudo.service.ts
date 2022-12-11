import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IConteudo } from '../models/IConteudo.model';

@Injectable({
  providedIn: 'root',
})
export class ConteudoService {
  constructor(private httpClient: HttpClient) {}

  cadastrar(conteudo: IConteudo): Promise<IConteudo | undefined> {
    return this.httpClient
      .post<IConteudo>('http://localhost:3000/conteudo/', conteudo)
      .toPromise();
  }

  buscarUm(id: number): Promise<IConteudo | undefined> {
    return this.httpClient
      .get<IConteudo>(`http://localhost:3000/conteudo/${id}`)
      .toPromise();
  }

  atualizar(conteudo: IConteudo): Promise<IConteudo | undefined> {
    return this.httpClient
      .patch<IConteudo>(
        `http://localhost:3000/conteudo/${conteudo.id}`,
        conteudo
      )
      .toPromise();
  }

  buscarTodos(): Promise<Array<IConteudo> | undefined> {
    return this.httpClient
      .get<Array<IConteudo>>('http://localhost:3000/conteudo/')
      .toPromise();
  }
}
