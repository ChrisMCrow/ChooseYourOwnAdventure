import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from '../app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { Chapter1Component } from './chapter1/chapter1.component';
import { IntroComponent } from './intro/intro.component';
import { Chapter2aComponent } from './chapter2a/chapter2a.component';
import { Chapter2bComponent } from './chapter2b/chapter2b.component';
import { Chapter3aComponent } from './chapter3a/chapter3a.component';
import { Chapter3bComponent } from './chapter3b/chapter3b.component';
import { Chapter3cComponent } from './chapter3c/chapter3c.component';
import { Chapter4aComponent } from './chapter4a/chapter4a.component';
import { Chapter4bComponent } from './chapter4b/chapter4b.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    Chapter1Component,
    IntroComponent,
    Chapter2aComponent,
    Chapter2bComponent,
    Chapter3aComponent,
    Chapter3bComponent,
    Chapter3cComponent,
    Chapter4aComponent,
    Chapter4bComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
