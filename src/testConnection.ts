import {DbDataSource} from './datasources/db.datasource'; // Asegúrate de importar correctamente tu fuente de datos

const dataSource = new DbDataSource(); // Crear una instancia del DataSource

export async function testConnection() {
  try {
    // Conectarse a la base de datos
    await dataSource.connect();

    // Ejecutar una consulta para obtener la versión de MySQL
    const result = await dataSource.execute('SELECT VERSION() AS version');

    // Imprimir la versión de MySQL
    console.log('Versión de MySQL:', result[0].version);

    // Desconectarse de la base de datos
    await dataSource.disconnect();
  } catch (error) {
    console.error('Error al probar la conexión:', error);
  }
}

// Llamar a la función para probar la conexión
testConnection();
