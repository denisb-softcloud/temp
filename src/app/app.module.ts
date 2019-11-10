import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatDialogModule } from '@angular/material';

// App Dialogs
import { NewDialogComponent } from './components/app-dialogs/new-dialog/new-dialog.component';
import { HomeComponent } from './components/app-pages/home/home.component';
import { HeaderComponent } from './components/app-layout/header/header.component';
import { NewComponentComponent } from './components/app-components/new-component/new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    // App Components
    // Dialogs
    NewDialogComponent,
    HomeComponent,
    HeaderComponent,
    NewComponentComponent
  ],
  imports: [
    // Basic Modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Material Modules
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NewDialogComponent,
  ]
})
export class AppModule { }
