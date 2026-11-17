import { Injectable, Service, signal } from "@angular/core";
import { Users } from "../interfaces/users";


@Injectable({ providedIn: 'root'})
export class DragonBallService {
    
    characters = signal<Users[]>([
        
    ]);  

    addCharacter(character : Users) {
        this.characters.update(
            list => [... list, character]
        );
    }
}