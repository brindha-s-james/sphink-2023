import connection from './connection'
import { Kids, KidsData } from '../../models/types'

const db = connection

//GET
export function getAllKids(): Promise<Kids[]> {
  return db('kids').select('id', 'name', 'photo', 'age', 'description')
}

//POST 
export function addKid(kid:KidsData): Promise<Kids[]> {
  return db('kids')
  .insert(kid)
  .returning([
    'id', 'name', 'age', 'photo', 'description' 
  ])
}