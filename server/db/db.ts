import connection from './connection'
import { Kids, KidsData } from '../../models/types'

const db = connection

//GET
export function getAllKids(): Promise<Kids[]> {
  return db('kids').select('id', 'name', 'photo', 'age', 'description')
}
