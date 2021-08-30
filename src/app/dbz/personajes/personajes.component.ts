import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  //@Input() personajes: Personaje[] = [];

  constructor(private dbzService: DbzService){}

}
