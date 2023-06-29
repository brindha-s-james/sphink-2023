import { Kids, Action } from '../../models/types'
import { SET_KIDS, ADD_KID, DEL_KID, UPD_KID } from '../actions/kids'

const initialState = [] as Kids[]

function kidsReducer(state = initialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case SET_KIDS:
      return payload

    case ADD_KID:
      return [payload, ...state]

      case DEL_KID:
        return state.filter((kid)=>kid.id !== payload)

      case UPD_KID:
        return state.map((kid)=>{
         if (kid.id === payload.id){
          return {...kid, description:payload.newDescription}
         }
        })


    default:
      return state
  }
}

export default kidsReducer

//this holds all the stores
