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
    id: null, nombre: null, descripcion: null, precio: null
  };

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    if(id){
      this.producto = this.productosService.getProducto(id);
    }
  }

  guardarProducto(): void {
    if(this.producto.id) {
      this.productosService.putProducto(this.producto);
    } else {
      this.productosService.postProducto(this.producto);
    }
  }
}
