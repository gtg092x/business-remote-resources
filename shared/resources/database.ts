import { Connection, createConnection, getConnectionOptions, getConnection } from 'typeorm';
import { User } from '../models/User';

export const initializeDatabase = async (): Promise<Connection> => {
  try {
    const existingConnection = await getConnection()
    if (existingConnection) {
      await existingConnection.close()
    }
  } catch (e) {

  }
  const connectionOptions = await getConnectionOptions();
  const options: any = {
    ...connectionOptions,
    entities: [
      User
    ],
    migrations: [__dirname + '/../../migrations/*.ts'],
  };

  const connection = await createConnection(options);

  return connection;
};

export default initializeDatabase();