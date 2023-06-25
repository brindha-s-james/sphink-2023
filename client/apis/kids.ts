import request from 'superagent'
import { Kids, KidsData } from '../../models/types'

const kidsUrl = '/api/v1/kids'

export async function getKids() {
  const res = await request.get(kidsUrl)
  return res.body
}

export async function postKid(kid: KidsData) {
  const res = await request.post(kidsUrl).send(kid)
  return res.body
}
