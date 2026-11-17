import { Component, output, signal } from '@angular/core';
import { Users } from '../../interfaces/users';

@Component({
  selector: 'app-targetas-add',
  templateUrl: './targetas-add.html',
})
export class TargetasAdd {
  name = signal('');
  correo =signal('');
  ciudad=signal('');
  isFav = signal(false);

  newUsuario = output<Users>();

  addUsuario(){
    if(!this.name() || !this.correo() || !this.correo()){
      return;
    }

    const newUsuario : Users ={
      name : this.name(),
      correo : this.correo(),
      ciudad : this.ciudad(),
      isFav : this.isFav()
    }
  this.newUsuario.emit(newUsuario);
        this.resetFields();
    }
resetFields (){
        this.name.set('');
        this.correo.set('');
        this.ciudad.set('');
        this.isFav.set(false);
    }
}
