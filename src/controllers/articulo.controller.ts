import {inject} from '@loopback/core';
import {get, param, post, requestBody} from '@loopback/rest';
import {ArticuloRepository} from '../repositories/articulo.repository';

export class ArticuloController {
  constructor(
    @inject('repositories.ArticuloRepository')
    protected articuloRepo: ArticuloRepository,
  ) { }

  @get('/articulos')
  async find() {
    // Obtener todos los productos utilizando el repositorio
    return this.articuloRepo.find();
  }

  @get('/articulos/{id}')
  async findById(@param.path.number('id') id: number) {
    // Obtener un producto por su ID utilizando el repositorio
    return this.articuloRepo.findById(id);
  }

  @post('/articulos')
  async create(@requestBody() articulo: any) {
    // Guardar el producto en la base de datos utilizando el repositorio
    const nuevoAroducto = await this.articuloRepo.create(articulo);
    return nuevoAroducto; // Devolver los detalles del producto creado
  }
}



