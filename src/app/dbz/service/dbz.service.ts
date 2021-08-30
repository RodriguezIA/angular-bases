import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000.00
        },
        {
            nombre: 'Vegeta',
            poder: 7500.00
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {
    }

    agregarPersonajes( personaje: Personaje ) {
        this._personajes.push(personaje);
    }
}