import { Component, inject } from '@angular/core';
import { TarjetasList } from '../../components/tarjetas-list/tarjetas-list';
import { TarjetasService } from '../../services/tarjetas.service';
import { TarjetasBusq } from '../../components/tarjetas-busq/tarjetas-busq';

@Component({
  selector: 'app-tarjetas-page',
  templateUrl: './tarjetas-page.html',
  imports: [TarjetasList, TarjetasBusq],
})
export class TarjetasPage {
  service = inject(TarjetasService);
  constructor() { this.service.load(); }

}
