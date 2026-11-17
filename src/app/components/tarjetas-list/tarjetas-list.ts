import { Component, input, output } from '@angular/core';
import { Users } from '../../interfaces/users';
import { TarjetaUsuario } from '../tarjetas-usuario/tarjetas-usuario';

@Component({
  selector: 'app-tarjetas-list',
  imports : [TarjetaUsuario],
  templateUrl: './tarjetas-list.html',
})
export class TarjetasList {
  users = input.required<Users[]>();
  listName = input.required<string>();

  favToggled = output<number>();
}