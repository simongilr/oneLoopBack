import {Entity, model, property} from '@loopback/repository';

@model()
export class Producto extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  constructor(data?: Partial<Producto>) {
    super(data);
  }
}
