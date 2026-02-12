import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule } from '@ionic/angular'; // ✅ Needed for Ionic components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
    // If you have HomePage component, add it here
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // ✅ This registers all Ionic components
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // ✅ This suppresses unknown element errors
})
export class AppModule {}



