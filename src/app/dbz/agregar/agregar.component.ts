import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  constructor(private dbzService: DbzService) {}

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  }

 // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }

    this.dbzService.agregarPersonajes(this.nuevo);
   // this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
