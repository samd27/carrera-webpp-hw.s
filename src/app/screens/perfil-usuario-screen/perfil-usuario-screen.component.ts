import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario-screen',
  templateUrl: './perfil-usuario-screen.component.html',
  styleUrls: ['./perfil-usuario-screen.component.scss']
})
export class PerfilUsuarioScreenComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public home(){
    this.router.navigate(["home"]);
  }
}
