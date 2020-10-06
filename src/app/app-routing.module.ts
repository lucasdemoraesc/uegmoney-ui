import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchComponent } from './components/view/launch/launch.component';
import { PageNotFoundComponent } from './components/view/page-not-found/page-not-found.component';
import { WellcomeComponent } from './components/view/wellcome/wellcome.component';

const routes: Routes = [
  { path: "", component: WellcomeComponent },
  { path: "launch", component: LaunchComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
