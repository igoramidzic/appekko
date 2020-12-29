import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppLoaderComponent } from './core/components/app-loader/app-loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';


const firebaseConfig = {
  apiKey: 'AIzaSyCVLlz9stECjZxwnKFxftLP3CEcJnMJSpc',
  authDomain: 'appekko-ea1fe.firebaseapp.com',
  databaseURL: 'https://appekko-ea1fe.firebaseio.com',
  projectId: 'appekko-ea1fe',
  storageBucket: 'appekko-ea1fe.appspot.com',
  messagingSenderId: '573749660933'
};

@NgModule({
  declarations: [
    AppComponent,
    AppLoaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
