import { Connection, createConnection, getConnectionOptions, getConnection } from 'typeorm';
import { User } from '../models/User';

const {
  TYPEORM_MODE = 'dev',
} = process.env

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
    migrationsRun: TYPEORM_MODE === 'live',
    migrations: [__dirname + '/../migrations/*'],
  };

  const connection = await createConnection(options);

  return connection;
};

export default initializeDatabase();