import connection from './connection'
import { Kids, KidsData } from '../../models/types'

const db = connection

//GET
export function getAllKids(): Promise<Kids[]> {
  return db('kids').select('id', 'name', 'photo', 'age', 'description')
}

//POST
export function addKid(kid: KidsData): Promise<Kids[]> {
  return db('kids')
    .insert(kid)
    .returning(['id', 'name', 'age', 'photo', 'description'])
}

//DELETE
export function deleteKid(id: number): Promise<number> {
  return db('kids').delete().where({ id })
}

//EDIT/UPDATE
export function updateKidDescription(id: number, newDescription: string) {
  return db('kids').update({ description: newDescription }).where({ id: id })
}
