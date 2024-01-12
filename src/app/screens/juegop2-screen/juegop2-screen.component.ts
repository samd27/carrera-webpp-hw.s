import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegop2-screen',
  templateUrl: './juegop2-screen.component.html',
  styleUrls: ['./juegop2-screen.component.scss']
})
export class Juegop2ScreenComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public juegoTerminado(){
    this.router.navigate(["juego-terminado"]); 
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
