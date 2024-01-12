import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-terminos-condiciones-screen',
  templateUrl: './terminos-condiciones-screen.component.html',
  styleUrls: ['./terminos-condiciones-screen.component.scss']
})
export class TerminosCondicionesScreenComponent implements OnInit {

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
