import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosListadoComponent } from './productos-listado/productos-listado.component';
import { ProductosEditarComponent } from './productos-editar/productos-editar.component';

const routes: Routes = [
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  { path: 'listado', component: ProductosListadoComponent },
  { path: 'editar/:id', component: ProductosEditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
