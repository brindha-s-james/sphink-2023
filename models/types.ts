export interface KidsData {
  name: string
  photo: string
  age: number
  description: string
}

export interface Kids extends KidsData {
  id: number
}




export type Action =
|{type: 'SET_KIDS', payload:[]}
|{type: 'ADD_KID', payload:Kids}
|{type: 'DEL_KID', payload:number}
|{type: 'UPD_KID', payload:{ id:number,newDescription:string}}
