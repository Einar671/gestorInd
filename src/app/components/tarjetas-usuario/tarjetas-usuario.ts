import { Component, input, output } from '@angular/core';
import { Users } from '../../interfaces/users';

@Component({
  selector: 'app-tarjeta-usuario',
  templateUrl: './tarjetas-usuario.html',
})
export class TarjetaUsuario {
  user = input.required<Users>();
  favToggled = output<number>();
}