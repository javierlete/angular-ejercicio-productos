import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosListadoComponent } from './productos-listado/productos-listado.component';
import { ProductosEditarComponent } from './productos-editar/productos-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosListadoComponent,
    ProductosEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
