import { actionTypes } from '../types'

const initialState = {
  showAlert: false,
  alert: null,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_ALERT:
      return {
        ...state,
        showAlert: true,
        alert: action.payload,
      }
    case actionTypes.HIDE_ALERT:
      return {
        ...state,
        showAlert: false,
        alert: null,
      }
    default:
      return state
  }
}
