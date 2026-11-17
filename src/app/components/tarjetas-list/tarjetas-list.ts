import { Component, input } from '@angular/core';
import { Users } from '../../interfaces/users';

@Component({
  selector: 'app-tarjetas-list',
  imports: [],
  templateUrl: './tarjetas-list.html',
})
export class TarjetasList {
  users = input.required<Users[]>();
  listName = input.required<string>();
}
