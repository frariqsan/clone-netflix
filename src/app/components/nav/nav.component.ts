import { Component, OnInit } from '@angular/core';
import { NavbarInterface } from 'src/app/models/films.interfaces';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    public navbarInfo : NavbarInterface;
    public themeText: string = "☀️"
  constructor() { 
    this.navbarInfo = {
      logo: {
        src: "assets/images/logo/memeflix.png",
        title: "FakeFlix logo",
      },
      links: [{
        text: "Inicio",
        link:"#home"
      },{
        text: "Series",
        link:"#series"
      },{
        text: "Peliculas",
        link:"#peliculas"
      },]
    }
  }

  ngOnInit(): void {
  }

  public changeTheme = () => {
    document.body.classList.toggle("dark");
    if(this.themeText === "☀️"){
      this.themeText = "🌙"
    }else{
      this.themeText = "☀️"
    }
  }

}
