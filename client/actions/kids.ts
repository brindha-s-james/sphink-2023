import * as api from '../apis/kids'
import { Kids, Action, KidsData } from '../../models/types'
import { ThunkAction } from '../store' //make sure from store

//each time an action is added, add this to the model

export const SET_KIDS = 'SET_KIDS'
export const ADD_KID = 'ADD_KID'
export const DEL_KID = 'DEL_KID'
export const UPD_KID = 'UPD_KID'
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

export function delKid(id: number) {
  return {
    type: DEL_KID,
    payload: id,
  }
}

export function updateKidDescription(id: number, newDescription: string) {
  return {
    type: UPD_KID,
    payload: { id, newDescription },
  }
}

//thunks
export function setKidsThunk(): ThunkAction {
  return async (dispatch) => {
    try {
      const kidsArr = await api.getKids()
      dispatch(setKids(kidsArr))
    } catch (error) {
      console.error('Action Error:', error)
    }
  }
}

export function addKidThunk(kid: KidsData): ThunkAction {
  return async (dispatch) => {//check model? kids or kidsData
    try {
      const newKid = await api.postKid(kid)
      dispatch(addKid(newKid))
    } catch (error) {
      console.error('Action Error:', error)
    }
  }
}

export function delKidThunk(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      await api.removeKid(id)
      dispatch(delKid(id))
    } catch (error) {
      console.error('Action Error:', error)
    }
  }
}

export function updKidDescriptionThunk(
  id: number,
  description: string
): ThunkAction {
  return async (dispatch) => {
    try {
      await api.patchDescription(id, description)
      dispatch(updateKidDescription(id, description))
    } catch (error) {
      console.error('Action Error:', error)
    }
  }
}
