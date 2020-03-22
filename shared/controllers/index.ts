import { getRepository } from 'typeorm';
import database from '../resources/database'
import {User} from '../models/User';

async function index (){
  await database
  const userRepo = await getRepository(User)
  const users = await userRepo.find()
  return { user: 'New User', users }
}

export default index
