import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources/db.datasource'; // Asegúrate de importar el DataSource correctamente
import {Producto} from '../models/producto.model';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource, // Usa el tipo correcto del DataSource
  ) {
    super(Producto, dataSource);
  }
}
