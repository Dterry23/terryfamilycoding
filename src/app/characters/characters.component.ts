import { Component, OnInit } from '@angular/core';
import { Character } from '../Character';
import { CharacterService } from '../character.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  Characters: Character[];

  constructor(public characterService: CharacterService, public messageService: MessageService ) { }

  ngOnInit() {
    this.getCharacter();
  }

  public getCharacter(): void{
    this.characterService.getCharacters()
      .subscribe(characters => this.Characters = characters );
  }

}
