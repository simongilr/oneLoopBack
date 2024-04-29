import {juggler} from '@loopback/repository';

const dbConfig = {
  name: 'db',
  connector: 'mysql',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'ejemplo_loopback',
};

export class DbDataSource extends juggler.DataSource {
  constructor() {
    super(dbConfig);
  }
}

export default DbDataSource; // Exportar la clase DbDataSource
