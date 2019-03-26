import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-productos-listado',
  templateUrl: './productos-listado.component.html',
  styleUrls: ['./productos-listado.component.css']
})
export class ProductosListadoComponent implements OnInit {

  productos: Producto[];
  
  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.productos = this.productosService.getProductos();
  }

}
