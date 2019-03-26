import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos: Producto[] = [];
  
  constructor() {
    for(let i = 1; i <= 10; i++) {
      this.productos.push({ id: i, nombre: 'Nombre' + i, descripcion: 'Descripción' + i, precio: i*1.1 });
    }    
  }

  getProductos(): Producto[] {
    return this.productos;
  }
}
