import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartaComponent } from './Projecte/Components/carta/carta.component';
import { BarallaSetIMigComponent } from './Projecte/Components/baralla-set-imig/baralla-set-imig.component';
import { JugadorComponent } from './Projecte/Components/jugador/jugador.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaComponent,
    BarallaSetIMigComponent,
    JugadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
