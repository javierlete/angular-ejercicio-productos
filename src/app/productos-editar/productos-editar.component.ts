import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos-editar',
  templateUrl: './productos-editar.component.html',
  styleUrls: ['./productos-editar.component.css']
})
export class ProductosEditarComponent implements OnInit {

  producto: Producto = {
    id: -1, nombre: '', descripcion: '', precio: 0.0
  };

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.producto = this.productosService.getProducto(id);
  }

  guardarProducto(): void {
    this.productosService.postProducto(this.producto);
  }
}
