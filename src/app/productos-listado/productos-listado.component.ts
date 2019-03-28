import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Producto } from '../producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-listado',
  templateUrl: './productos-listado.component.html',
  styleUrls: ['./productos-listado.component.css']
})
export class ProductosListadoComponent implements OnInit {

  productos: Producto[];
  
  constructor(
    private productosService: ProductosService,
    private router: Router) { }

  ngOnInit() {
    //this.productos = this.productosService.getProductos();
    console.log('ngOnInit Listado', this.productos);
    this.obtenerProductos();
  }

  borrarProducto(id: number) {
    this.productosService.deleteProducto(id).subscribe(
      () => this.obtenerProductos()
    );
  }

  obtenerProductos() {
    this.productosService.getProductos().subscribe(
      (productos: Producto[]) => {
        this.productos = productos;
        console.log('subscribe Listado', this.productos);
      }
    );
  }
}
