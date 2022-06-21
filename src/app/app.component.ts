import { Component } from '@angular/core';
import { FilmsInterface } from './models/films.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public comedyFilms : FilmsInterface = {
    section: "Comedia",
    films : [{
      title:"Los Cazafantasmas",
      src:"assets/images/Comedia/cazafantasmas.webp"
    },{
      title:"casi300",
      src:"assets/images/Comedia/casi300.webp"
    },{
      title:"dictador",
      src:"assets/images/Comedia/dictador.webp"
    },{
      title:"erase hollywood",
      src:"assets/images/Comedia/erasehollywood.webp"
    },{
      title:"family guy",
      src:"assets/images/Comedia/family guy.webp"
    },]
  }
  public terrorFilms : FilmsInterface = {
    section: "Terror",
    films : [{
      title:"Apostol",
      src:"assets/images/Terror/apostol.jpg"
    },{
      title:"Calle Terror",
      src:"assets/images/Terror/calleterror.jpg"
    },{
      title:"Infierno Agua",
      src:"assets/images/Terror/infiernoagua.webp"
    },{
      title:"Insidious",
      src:"assets/images/Terror/insidious2.webp"
    },{
      title:"Life",
      src:"assets/images/Terror/life.webp"
    },]
  }
}
