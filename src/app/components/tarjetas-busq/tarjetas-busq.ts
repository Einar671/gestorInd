import { Component, inject } from '@angular/core';
import { TarjetasService } from '../../services/tarjetas.service';

@Component({
  selector: 'app-tarjetas-busq',
  imports: [],
  templateUrl: './tarjetas-busq.html',
})
export class TarjetasBusq {
  service = inject(TarjetasService);
}
