import { Routes } from '@angular/router';
import { TarjetasList } from './components/tarjetas-list/tarjetas-list';
import { TarjetasPage } from './pages/tarjetas-page/tarjetas-page';

export const routes: Routes = [
    {
        path : '',
        component: TarjetasPage
    }
];
