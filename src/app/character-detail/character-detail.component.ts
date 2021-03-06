import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../Character';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  @Input() character: Character;
 
  constructor(
    private route: ActivatedRoute,
    private heroService: CharacterService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getCharacter(id)
      .subscribe(character => this.character = character)
  }

  goBack(): void{
    this.location.back();
  }

}
