import {
  Interceptor,
  InvocationContext,
  InvocationResult,
  Next,
} from '@loopback/context';
import {
  Provider,
  inject
} from '@loopback/core';
import {juggler} from '@loopback/repository';

export class CloseConnectionInterceptor implements Provider<Interceptor> {
  constructor(
    @inject('datasources.db') private dataSource: juggler.DataSource,
  ) { }

  value(): Interceptor {
    return this.intercept.bind(this);
  }

  async intercept(
    invocationCtx: InvocationContext,
    next: Next,
  ): Promise<InvocationResult> {
    let result;
    try {
      result = await next();
    } finally {
      // Intentar cerrar la conexión
      await this.closeConnection();
    }
    return result;
  }

  async closeConnection() {
    if (this.dataSource && typeof this.dataSource.disconnect === 'function') {
      try {
        await this.dataSource.disconnect();
      } catch (err) {
        console.error('Error closing database connection:', err);
      }
    }
  }
}
