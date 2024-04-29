import {inject} from '@loopback/core';
import {get, param, post, requestBody} from '@loopback/rest';
import {ProductoRepository} from '../repositories/producto.repository';

export class ProductoController {
  constructor(
    @inject('repositories.ProductoRepository')
    protected productoRepo: ProductoRepository,
  ) { }

  @get('/productos')
  async find() {
    // Obtener todos los productos utilizando el repositorio
    return this.productoRepo.find();
  }

  @get('/productos/{id}')
  async findById(@param.path.number('id') id: number) {
    // Obtener un producto por su ID utilizando el repositorio
    return this.productoRepo.findById(id);
  }

  @post('/productos')
  async create(@requestBody() producto: any) {
    // Guardar el producto en la base de datos utilizando el repositorio
    const nuevoProducto = await this.productoRepo.create(producto);
    return nuevoProducto; // Devolver los detalles del producto creado
  }
}



