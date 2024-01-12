import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica-screen',
  templateUrl: './politica-screen.component.html',
  styleUrls: ['./politica-screen.component.scss']
})
export class PoliticaScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      return true;
    }
    else{
      return false;
    }
  }

}
