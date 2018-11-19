import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { BattlearenaComponent } from './battlearena/battlearena.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo:'/dashboard', pathMatch:'full'},
  { path: 'detail/:id', component:CharacterDetailComponent},
  { path: 'fight', component: BattlearenaComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
