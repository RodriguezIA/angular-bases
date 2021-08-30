// Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Components
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

//Servicios
import { DbzService } from './service/dbz.service';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    MainPageComponent,
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
