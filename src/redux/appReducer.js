import { SHOW_ALERT, HIDE_ALERT } from './types'

const initialState = {
  showAlert: false,
  alert: null
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        showAlert: true,
        alert: action.payload
      }
    case HIDE_ALERT:
      return {
        ...state,
        showAlert: false,
        alert: null
      }
    default:
      return state
  }
}
