import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import {FieldsetModule} from 'primeng/fieldset';
import {TooltipModule} from 'primeng/tooltip';


import { EventEmitterService } from './services/event-emitter.service';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/templates/topbar/topbar.component';
import { SidebarComponent } from './components/templates/sidebar/sidebar.component';
import { LaunchComponent } from './components/view/launch/launch.component';
import { WellcomeComponent } from './components/view/wellcome/wellcome.component';
import { PageNotFoundComponent } from './components/view/page-not-found/page-not-found.component';
import { LaunchSearchComponent } from './components/view/launch/launch-search/launch-search.component';
import { LaunchListComponent } from './components/view/launch/launch-list/launch-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    LaunchComponent,
    WellcomeComponent,
    PageNotFoundComponent,
    LaunchSearchComponent,
    LaunchListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    ToolbarModule,
    SidebarModule,
    MenuModule,
    ToastModule,
    HttpClientModule,
    InputTextModule,
    InputMaskModule,
    CardModule,
    TableModule,
    FieldsetModule,
    TooltipModule
  ],
  providers: [
    EventEmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
