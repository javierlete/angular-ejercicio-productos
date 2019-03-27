import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url = 'http://localhost:3000/productos/';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  getProducto(id: number) : Observable<Producto> {
    return this.http.get<Producto>(this.url + id);
  }

  postProducto(producto: Producto) {
    console.log('postProducto', producto);
  }

  putProducto(producto: Producto) {
    console.log('putProducto', producto);
  }

  deleteProducto(id: number) {
    console.log('deleteProducto', id);
  }
}
