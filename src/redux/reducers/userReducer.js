import { actionTypes } from '../types'

const initialState = {
  isLoggedIn: false,
  username: '',
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload,
      }
    default:
      return state
  }
}
