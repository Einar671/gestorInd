import { filtrarPorNombre } from './tarjetas.service';
import { Users } from '../interfaces/users';

const usuarios: Users[] = [
  { id: 1, name: 'Leanne Graham', correo: 'a@a.com', ciudad: 'Gwenborough', isFav: false },
  { id: 2, name: 'Ervin Howell', correo: 'b@b.com', ciudad: 'Wisokyburgh', isFav: false },
  { id: 3, name: 'Clementine Bauch', correo: 'c@c.com', ciudad: 'McKenziehaven', isFav: false },
];

describe('filtrarPorNombre', () => {
  it('filtra por nombre sin distinguir mayúsculas', () => {
    const resultado = filtrarPorNombre(usuarios, 'LE');
    expect(resultado.map((u) => u.id)).toEqual([1, 3]);
  });

  it('devuelve todos si el texto está vacío', () => {
    expect(filtrarPorNombre(usuarios, '  ')).toHaveLength(3);
  });
});