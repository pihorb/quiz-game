import {
  USER_LOGIN,
  SHOW_ALERT,
  HIDE_ALERT,
  FETCH_QUESTIONS,
  SET_ANSWER,
  ADD_SCORE,
  PREVIOUS_QUESTION,
  NEXT_QUESTION,
  UPDATE_TOTAL_ANSWERS,
  NEW_GAME,
  CORRECT_ANSWER,
} from './types'

export function loginUser(name) {
  return {
    type: USER_LOGIN,
    payload: name,
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  }
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    })
    setTimeout(() => dispatch(hideAlert()), 3000)
  }
}

export function fetchQuestions() {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean'
      )
      const json = await response.json()
      const result = await json.results
      dispatch({
        type: FETCH_QUESTIONS,
        payload: result,
      })
    } catch (e) {
      dispatch(showAlert('Server error'))
    }
  }
}

export function previousQuestion() {
  return {
    type: PREVIOUS_QUESTION,
  }
}

export function nextQuestion() {
  return {
    type: NEXT_QUESTION,
  }
}

export function setAnswer(answer) {
  return (dispatch) => {
    dispatch({
      type: SET_ANSWER,
      payload: answer,
    })
    setTimeout(() => dispatch(nextQuestion()), 1000)
    dispatch(updateTotalAnswers())
  }
}

export function addScore() {
  return {
    type: ADD_SCORE,
  }
}

export function updateTotalAnswers() {
  return {
    type: UPDATE_TOTAL_ANSWERS,
  }
}

export function setCorrectAnswer(answer) {
  return {
    type: CORRECT_ANSWER,
    payload: answer
  }
}

export function startNewGame() {
  return (dispatch) => {
    dispatch({ type: NEW_GAME })
    dispatch(fetchQuestions())
  }
}
