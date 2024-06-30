import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OlaComponent } from './ola/ola.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { FormsModule } from '@angular/forms';
import { CantorCardComponent } from './cantor-card/cantor-card.component';
import { CantorFormComponent } from './cantor-form/cantor-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OlaComponent,
    BemVindoComponent,
    CantorCardComponent,
    CantorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
