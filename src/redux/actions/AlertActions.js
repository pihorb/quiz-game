import { actionTypes } from '../types'

export const hideAlert = () => ({
  type: actionTypes.HIDE_ALERT,
})

export const showAlert = (text) => (dispatch) => {
  dispatch({
    type: actionTypes.SHOW_ALERT,
    payload: text,
  })
  setTimeout(() => dispatch(hideAlert()), 3000)
}
