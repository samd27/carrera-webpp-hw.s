import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})
export class RegistroScreenComponent implements OnInit {

  public user: any = {};
  public errors: any = {};

  //Edades
  public selectedValue: string = "";
  public edades: any[] = [];

  //contraseña
  public hide_1: boolean = false;
  public inputType_1: string = 'password';
  //router: any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.llenarArrayEdades();
  }

  public llenarArrayEdades(){
    for(let i = 18; i <= 80; i++){
      this.edades.push({value: i})
    }  
  }

  public terminosCondiciones(){
    this.router.navigate(["terminos-condiciones"]);
  }

  public registrar(){
    this.router.navigate(["home"]);
  }

  public goLogin(){
    this.router.navigate([""]);
  }

  showPassword(){
    if(this.inputType_1 == 'password'){
      this.inputType_1 = 'text';
      this.hide_1 = true;
    }
    else{
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
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
