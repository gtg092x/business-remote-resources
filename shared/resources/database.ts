import { Connection, createConnection, getConnectionOptions, getConnection } from 'typeorm';
import { User } from '../models/User';
import {AddUser1584848626307} from '../migrations/1584848626307-AddUser';

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
    migrations: [
      AddUser1584848626307,
    ],
  };

  const connection = await createConnection(options);

  return connection;
};

export default initializeDatabase();