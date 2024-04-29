import {Entity, model, property} from '@loopback/repository';

@model()
export class Articulo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  articulo: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  constructor(data?: Partial<Articulo>) {
    super(data);
  }
}
