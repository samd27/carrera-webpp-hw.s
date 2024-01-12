import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { JuegoTerminadoScreenComponent } from './screens/juego-terminado-screen/juego-terminado-screen.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';
import { TerminosCondicionesScreenComponent } from './screens/terminos-condiciones-screen/terminos-condiciones-screen.component';
import { InstruccionesScreenComponent } from './screens/instrucciones-screen/instrucciones-screen.component';
import { PoliticaScreenComponent } from './screens/politica-screen/politica-screen.component';
import { PerfilUsuarioScreenComponent } from './screens/perfil-usuario-screen/perfil-usuario-screen.component';
import { Juegop1ScreenComponent } from './screens/juegop1-screen/juegop1-screen.component';
import { Juegop2ScreenComponent } from './screens/juegop2-screen/juegop2-screen.component';

const routes: Routes = [
  //rutas del proyecto
  { path: '', component: LoginScreenComponent, pathMatch: 'full'},
  { path: 'registro', component: RegistroScreenComponent, pathMatch: 'full'},
  { path: 'home', component: HomeScreenComponent, pathMatch: 'full'},
  { path: 'juego-terminado', component: JuegoTerminadoScreenComponent, pathMatch: 'full'},
  { path: 'bases-promocion', component: BasesPromocionScreenComponent, pathMatch: 'full'},
  { path: 'terminos-condiciones', component: TerminosCondicionesScreenComponent, pathMatch: 'full'},
  { path: 'instrucciones', component: InstruccionesScreenComponent, pathMatch: 'full'},
  { path: 'politica-privacidad', component: PoliticaScreenComponent, pathMatch: 'full'},
  { path: 'perfil', component: PerfilUsuarioScreenComponent, pathMatch: 'full'},
  { path: 'juegop1', component: Juegop1ScreenComponent, pathMatch: 'full'},
  { path: 'juegop2', component: Juegop2ScreenComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
