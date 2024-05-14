import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Maetterceros} from '../models';
import {MaettercerosRepository} from '../repositories';

export class MaettercerosController {
  constructor(
    @repository(MaettercerosRepository)
    public maettercerosRepository: MaettercerosRepository,
  ) { }

  @post('/maetterceros')
  @response(200, {
    description: 'Maetterceros model instance',
    content: {'application/json': {schema: getModelSchemaRef(Maetterceros)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Maetterceros, {
            title: 'NewMaetterceros',
            exclude: ['id'],
          }),
        },
      },
    })
    maetterceros: Omit<Maetterceros, 'id'>,
  ): Promise<Maetterceros> {
    console.log('DATA : ', maetterceros)
    return this.maettercerosRepository.create(maetterceros);
  }

  @get('/maetterceros/count')
  @response(200, {
    description: 'Maetterceros model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Maetterceros) where?: Where<Maetterceros>,
  ): Promise<Count> {
    return this.maettercerosRepository.count(where);
  }

  @get('/maetterceros')
  @response(200, {
    description: 'Array of Maetterceros model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Maetterceros, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Maetterceros) filter?: Filter<Maetterceros>,
  ): Promise<Maetterceros[]> {
    return this.maettercerosRepository.find(filter);
  }

  @patch('/maetterceros')
  @response(200, {
    description: 'Maetterceros PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Maetterceros, {partial: true}),
        },
      },
    })
    maetterceros: Maetterceros,
    @param.where(Maetterceros) where?: Where<Maetterceros>,
  ): Promise<Count> {
    console.log('DATA : ', maetterceros)

    return this.maettercerosRepository.updateAll(maetterceros, where);
  }

  @get('/maetterceros/{id}')
  @response(200, {
    description: 'Maetterceros model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Maetterceros, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Maetterceros, {exclude: 'where'}) filter?: FilterExcludingWhere<Maetterceros>
  ): Promise<Maetterceros> {
    return this.maettercerosRepository.findById(id, filter);
  }

  @patch('/maetterceros/{id}')
  @response(204, {
    description: 'Maetterceros PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Maetterceros, {partial: true}),
        },
      },
    })
    maetterceros: Maetterceros,
  ): Promise<void> {
    console.log('DATA : ', maetterceros)

    await this.maettercerosRepository.updateById(id, maetterceros);
  }

  @put('/maetterceros/{id}')
  @response(204, {
    description: 'Maetterceros PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() maetterceros: Maetterceros,
  ): Promise<void> {
    console.log('DATA : ', maetterceros)

    await this.maettercerosRepository.replaceById(id, maetterceros);
  }

  @del('/maetterceros/{id}')
  @response(204, {
    description: 'Maetterceros DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.maettercerosRepository.deleteById(id);
  }
}
