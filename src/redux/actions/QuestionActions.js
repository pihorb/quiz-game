import { actionTypes } from '../types'
import { showAlert } from './AlertActions'

export const fetchQuestions = () => async (dispatch) => {
  try {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean'
    )

    const { results } = await await response.json()

    dispatch({
      type: actionTypes.FETCH_QUESTIONS,
      payload: results || [],
    })
  } catch (e) {
    dispatch(showAlert('Server error'))
  }
}

export const previousQuestion = () => ({
  type: actionTypes.PREVIOUS_QUESTION,
})

export const nextQuestion = () => ({
  type: actionTypes.NEXT_QUESTION,
})
