import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegop1-screen',
  templateUrl: './juegop1-screen.component.html',
  styleUrls: ['./juegop1-screen.component.scss']
})
export class Juegop1ScreenComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public goJuego(){
    this.router.navigate(["juegop2"]);
  }
}
