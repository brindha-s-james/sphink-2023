import request from 'superagent'
import { Kids, KidsData } from '../../models/types'

const kidsUrl = '/api/v1/kids'

//GET
export async function getKids() {
  const res = await request.get(kidsUrl)
  return res.body
}
//POST
export async function postKid(kid: KidsData) {
  const res = await request.post(kidsUrl).send(kid)
  return res.body
}

//DELTE
export async function removeKid(id:number) {
  await request.delete(`${kidsUrl}/${id}`)
}


//UPDATE DESCRIPTION
export async function patchDescription(id:number, newDescription:string){
await request
.patch(`${kidsUrl}/${id}`)
.send({description:newDescription})

}