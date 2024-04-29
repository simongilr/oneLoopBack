import {Entity, model, property} from '@loopback/repository';

@model()
export class Maetterceros extends Entity {
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
    required: true,
  })
  nic: string;

  @property({
    type: 'number',
  })
  telefono?: number;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'string',
  })
  borrado?: string;


  constructor(data?: Partial<Maetterceros>) {
    super(data);
  }
}

export interface MaettercerosRelations {
  // describe navigational properties here
}

export type MaettercerosWithRelations = Maetterceros & MaettercerosRelations;
