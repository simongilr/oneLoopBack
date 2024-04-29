import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources/db.datasource';
import {Maetterceros, MaettercerosRelations} from '../models';

export class MaettercerosRepository extends DefaultCrudRepository<
  Maetterceros,
  typeof Maetterceros.prototype.id,
  MaettercerosRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Maetterceros, dataSource);
  }
}
