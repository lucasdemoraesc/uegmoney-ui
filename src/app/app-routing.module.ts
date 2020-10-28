import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchCreateComponent } from './components/launch/launch-create/launch-create.component';
import { LaunchComponent } from './components/launch/launch.component';
import { PersonComponent } from './components/person/person.component';
import { PageNotFoundComponent } from './components/templates/page-not-found/page-not-found.component';
import { WellcomeComponent } from './components/templates/wellcome/wellcome.component';

const routes: Routes = [
  { path: "", component: WellcomeComponent },
  { path: "launch", component: LaunchComponent },
  { path: "person", component: PersonComponent },
  { path: "launch/create", component: LaunchCreateComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
