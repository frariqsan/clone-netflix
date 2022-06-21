import { Component, OnInit } from '@angular/core';
import { HeroInterface } from 'src/app/models/films.interfaces';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
public heroInfo: HeroInterface;
  constructor() { 
    this.heroInfo = {
      title: "Top 5",
      gallery:[{
        title:"Lost In Space",
        src:"assets/images/Top10/4-lostinspace.webp",
      },{
        title:"BlackList",
        src:"assets/images/Top10/7-blacklist.webp",
      },{
        title:"Titanes",
        src:"assets/images/Top10/3-titanes.webp",
      },{
        title:"The Good Doctor",
        src:"assets/images/Top10/10-gooddoctor.webp",
      },{
        title:"Ricos",
        src:"assets/images/Top10/8-ricos.webp",
      }]

    }
  }

  ngOnInit(): void {
  }

}
