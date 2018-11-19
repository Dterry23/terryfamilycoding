import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from './Character';
import { CHARACTERS } from './mock-characters';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

getCharacters(): Observable<Character[]>{
  this.messageService.add('Loaded Characters');
  return of(CHARACTERS);
}

getCharacter(id: number): Observable<Character>{
  this.messageService.add(`CharacterService: fetched character id=${id}`);
  return of(CHARACTERS.find(character => character.id === id));
}
  constructor(public messageService: MessageService) { }
}
