import * as api from '../apis/kids'
import { Kids, Action, KidsData } from '../../models/types'
import { ThunkAction } from '../store'

//each time an action is added, add this to the model

export const SET_KIDS = 'SET_KIDS'
export const ADD_KID = 'ADD_KID'

//simple actions
export function setKids(kids: Kids[]) {
  return {
    type: SET_KIDS,
    payload: kids,
  }
}
export function addKid(kid: KidsData) {
  return {
    type: ADD_KID,
    payload: kid,
  }
}

//thunks
export function getKidsThunk(): ThunkAction {
  return async (dispatch) => {
    try {
      const kidsArr = await api.getKids()
      dispatch(setKids(kidsArr))
    } catch (error) {
      console.error('Action Error:', error)
    }
  }
}

export function addKidThunk(): ThunkAction {
  return async (dispatch) => {
    try {
      const newKid = await api.postKid(kid)
      dispatch(addKid(newKid))
    } catch (error) {
      console.error('Action Error:', error)
    }
  }
}
