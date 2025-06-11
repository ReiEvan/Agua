import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListaDeDisciplinasComponent} from "./lista-de-disciplinas/lista-de-disciplinas.component"
import { CommonModule } from '@angular/common';
import { Disciplina } from './disciplina.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListaDeDisciplinasComponent,CommonModule],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  selecionado : null | Disciplina = null

  disciplinas = [
    
      new Disciplina ('Língua Portuguesa',"Portugues apenas"),
    
      new Disciplina ('Arte', "Artes plasticas"),

      new Disciplina ('Educação Física', "Exercicios para o corpo"),

      new Disciplina ('Matemática', "Calculos e suas finalidades"),

      new Disciplina ('Geografia', "Demografia, planicies e afins"),

      new Disciplina ('Ciências', "Natureza e Tecnologias"),

      new Disciplina ('Redação', "Instruções de textos e paragrafos"),

      new Disciplina ('Língua Estrangeira Moderna - Inglês',"Aprendizado de linguas de fora do pais"),

      new Disciplina ('Ensino Religioso', "O ser, caratér e moral"),
    
  ];

  selecionar(disciplina: Disciplina) {
    this.selecionado = disciplina;
  }
}