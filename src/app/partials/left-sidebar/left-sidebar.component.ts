import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit{
  @Output() cerrar = new EventEmitter();
  public isLogin: boolean = false;
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
      
  }

  public cerrar_drawer(){
    this.cerrar.emit();
  }

  public iniciarSesion(){
    this.router.navigate([""]);
  }

  public goInicio(){
    this.router.navigate(["home"]);
    this.cerrar.emit();
  }

  public goBasesPromocion(){
    this.router.navigate(["bases-promocion"]);
  }

  public goTiendasParticipantes(){
    var url = 'https://www.buap.mx/';
    window.location.href = url;
  }

  public goPerfil(){
    this.router.navigate(["perfil"]);
  }

  public logout(){
    this.router.navigate([""]);
  }
} 
