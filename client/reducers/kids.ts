import { Kids, Action } from '../../models/types'
import { SET_KIDS, ADD_KID } from '../actions/kids'

const initialState = [] as Kids[]

function kidsReducer(state = initialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case SET_KIDS:
      return payload

    case ADD_KID:
      return [payload, ...state]

    default:
      return state
  }
}

export default kidsReducer

//this holds all the stores
