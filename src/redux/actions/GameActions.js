import { actionTypes } from '../types'
import { nextQuestion, fetchQuestions } from './QuestionActions'

export const loginUser = (name) => ({
  type: actionTypes.USER_LOGIN,
  payload: name,
})

export const setAnswer = (answer) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_ANSWER,
    payload: answer,
  })
  setTimeout(() => dispatch(nextQuestion()), 1000)
  dispatch(updateTotalAnswers())
}

export const addScore = () => ({
  type: actionTypes.ADD_SCORE,
})

export const updateTotalAnswers = () => ({
  type: actionTypes.UPDATE_TOTAL_ANSWERS,
})

export const setCorrectAnswer = (answer) => ({
  type: actionTypes.CORRECT_ANSWER,
  payload: answer,
})

export const startNewGame = () => (dispatch) => {
  dispatch({ type: actionTypes.NEW_GAME })
  dispatch(fetchQuestions())
}
