import {juggler} from '@loopback/repository';

const dbConfig = {
  name: 'db',
  connector: 'mysql',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'ejemplo_loopback',
  connectionLimit: 10,  // Límite de conexiones en el pool
  waitForConnections: true,
  queueLimit: 0,
};

export class DbDataSource extends juggler.DataSource {
  static dataSourceName = 'db';

  constructor() {
    super(dbConfig);
  }
}

export default DbDataSource;
