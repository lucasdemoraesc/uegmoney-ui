import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';
import { TooltipModule } from 'primeng/tooltip';

import { ShowSidebarService } from './components/templates/sidebar/event/show-sidebar.service';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/templates/topbar/topbar.component';
import { SidebarComponent } from './components/templates/sidebar/sidebar.component';
import { LaunchComponent } from './components/launch/launch.component';
import { WellcomeComponent } from './components/templates/wellcome/wellcome.component';
import { PageNotFoundComponent } from './components/templates/page-not-found/page-not-found.component';
import { LaunchSearchComponent } from './components/launch/launch-search/launch-search.component';
import { LaunchListComponent } from './components/launch/launch-list/launch-list.component';
import { PersonComponent } from './components/person/person.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { PersonSearchComponent } from './components/person/person-search/person-search.component';
import { LaunchCreateComponent } from './components/launch/launch-create/launch-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    LaunchComponent,
    WellcomeComponent,
    PageNotFoundComponent,
    LaunchSearchComponent,
    LaunchListComponent,
    PersonComponent,
    PersonListComponent,
    PersonSearchComponent,
    LaunchCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    ToolbarModule,
    SidebarModule,
    MenuModule,
    HttpClientModule,
    InputTextModule,
    InputMaskModule,
    TableModule,
    FieldsetModule,
    TooltipModule,
    FormsModule
  ],
  providers: [
    ShowSidebarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
