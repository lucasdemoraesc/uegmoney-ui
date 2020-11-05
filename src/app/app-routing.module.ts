import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchSearchComponent } from './components/launch/launch-search/launch-search.component';
import { LaunchCreateComponent } from './components/launch/launch-create/launch-create.component';
import { PersonSearchComponent } from './components/person/person-search/person-search.component';
import { PageNotFoundComponent } from './components/templates/page-not-found/page-not-found.component';
import { WellcomeComponent } from './components/templates/wellcome/wellcome.component';
import { PersonCreateComponent } from './components/person/person-create/person-create.component';

const routes: Routes = [
  { path: "", component: WellcomeComponent },
  { path: "launch", component: LaunchSearchComponent },
  { path: "person", component: PersonSearchComponent },
  { path: "launch/create", component: LaunchCreateComponent },
  { path: "person/create", component: PersonCreateComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
