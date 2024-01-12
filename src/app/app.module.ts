import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

//Componentes
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { HeaderAppComponent } from './partials/header-app/header-app.component';
import { LeftSidebarComponent } from './partials/left-sidebar/left-sidebar.component';
import { JuegoTerminadoScreenComponent } from './screens/juego-terminado-screen/juego-terminado-screen.component';
import { FooterAppComponent } from './partials/footer-app/footer-app.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';
import { TerminosCondicionesScreenComponent } from './screens/terminos-condiciones-screen/terminos-condiciones-screen.component';
import { PoliticaScreenComponent } from './screens/politica-screen/politica-screen.component';
import { InstruccionesScreenComponent } from './screens/instrucciones-screen/instrucciones-screen.component';
import { Juegop1ScreenComponent } from './screens/juegop1-screen/juegop1-screen.component';
import { Juegop2ScreenComponent } from './screens/juegop2-screen/juegop2-screen.component';
import { PerfilUsuarioScreenComponent } from './screens/perfil-usuario-screen/perfil-usuario-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegistroScreenComponent,
    HomeScreenComponent,
    HeaderAppComponent,
    LeftSidebarComponent,
    JuegoTerminadoScreenComponent,
    FooterAppComponent,
    BasesPromocionScreenComponent,
    TerminosCondicionesScreenComponent,
    PoliticaScreenComponent,
    InstruccionesScreenComponent,
    Juegop1ScreenComponent,
    Juegop2ScreenComponent,
    PerfilUsuarioScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule, 
    MatSelectModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
