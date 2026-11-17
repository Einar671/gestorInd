import { Component } from '@angular/core';
import { TargetasAdd } from '../../components/targetas-add/targetas-add';
import { TarjetasList } from '../../components/tarjetas-list/tarjetas-list';

@Component({
  selector: 'app-tarjetas-page',
  templateUrl: './tarjetas-page.html',
  imports: [TargetasAdd, TarjetasList],
})
export class TarjetasPage {


}
