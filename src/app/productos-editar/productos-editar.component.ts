import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-productos-editar',
  templateUrl: './productos-editar.component.html',
  styleUrls: ['./productos-editar.component.css']
})
export class ProductosEditarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  guardarProducto(producto: Producto): void {
    console.log(producto);
  }
}
