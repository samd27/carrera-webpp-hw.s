import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
//Angular Material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegistroScreenComponent
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
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }