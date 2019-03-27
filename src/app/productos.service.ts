import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url = 'http://localhost:3000/productos/';

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  getProducto(id: number) : Observable<Producto> {
    return this.http.get<Producto>(this.url + id);
  }

  postProducto(producto: Producto): Observable<Producto> {
    console.log('postProducto', producto);

    return this.http.post<Producto>(this.url, producto, this.httpOptions);
  }

  putProducto(producto: Producto): Observable<Producto> {
    console.log('putProducto', producto);

    return this.http.put<Producto>(this.url + producto.id, producto, this.httpOptions);
  }

  deleteProducto(id: number) {
    console.log('deleteProducto', id);
  }
}
