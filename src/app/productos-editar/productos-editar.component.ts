import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-productos-editar',
  templateUrl: './productos-editar.component.html',
  styleUrls: ['./productos-editar.component.css']
})
export class ProductosEditarComponent implements OnInit {

  producto: Producto = {
    id: -1, nombre: '', descripcion: '', precio: 0.0
  };

  constructor() { }

  ngOnInit() {
  }

  guardarProducto(): void {
    console.log(this.producto);
  }
}
