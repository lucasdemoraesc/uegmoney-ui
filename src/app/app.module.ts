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
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { ShowSidebarService } from './components/templates/sidebar/event/show-sidebar.service';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/templates/topbar/topbar.component';
import { SidebarComponent } from './components/templates/sidebar/sidebar.component';
import { WellcomeComponent } from './components/templates/wellcome/wellcome.component';
import { PageNotFoundComponent } from './components/templates/page-not-found/page-not-found.component';
import { LaunchSearchComponent } from './components/launch/launch-search/launch-search.component';
import { LaunchListComponent } from './components/launch/launch-list/launch-list.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { PersonSearchComponent } from './components/person/person-search/person-search.component';
import { LaunchCreateComponent } from './components/launch/launch-create/launch-create.component';
import { FormsModule } from '@angular/forms';
import { PersonCreateComponent } from './components/person/person-create/person-create.component';
import { MessagesComponent } from './components/templates/messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    WellcomeComponent,
    PageNotFoundComponent,
    LaunchSearchComponent,
    LaunchListComponent,
    PersonListComponent,
    PersonSearchComponent,
    LaunchCreateComponent,
    PersonCreateComponent,
    MessagesComponent
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
    FormsModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputNumberModule,
    MessagesModule,
    MessageModule
  ],
  providers: [
    ShowSidebarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
