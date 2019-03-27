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

  getProducto(id: number) {
    return { id: id, nombre: 'Nombre' + id, descripcion: 'Descripción' + id, precio: id*1.1 };
  }

  postProducto(producto: Producto) {
    console.log('postProducto', producto);
  }

  putProducto(producto: Producto) {
    console.log('putProducto', producto);
  }
}
