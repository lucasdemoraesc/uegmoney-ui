import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';

import { EventEmitterService } from './services/event-emitter.service';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/templates/topbar/topbar.component';
import { SidebarComponent } from './components/templates/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    ToolbarModule,
    SidebarModule
  ],
  providers: [
    EventEmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
