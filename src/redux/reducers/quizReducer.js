import { actionTypes } from '../types'
import { MAX_QUESTIONS } from '../../helpers/constans'

const initState = {
  score: 0,
  questions: [],
  answersTotal: 0,
  correctAnswer: '',
  currentQuestion: 0,
}

export const quizReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      }
    case actionTypes.PREVIOUS_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion - 1,
      }
    case actionTypes.NEXT_QUESTION:
      return {
        ...state,
        currentQuestion:
          state.answersTotal === MAX_QUESTIONS
            ? state.currentQuestion
            : state.currentQuestion + 1,
      }
    case actionTypes.SET_ANSWER:
      return {
        ...state,
        questions: state.questions.map((q, index) => {
          return index === state.currentQuestion
            ? { ...q, user_answer: action.payload }
            : q
        }),
      }
    case actionTypes.ADD_SCORE:
      return { ...state, score: state.score + 1 }
    case actionTypes.UPDATE_TOTAL_ANSWERS:
      return {
        ...state,
        answersTotal: state.questions.filter((q) => q.user_answer).length,
      }
    case actionTypes.CORRECT_ANSWER:
      return {
        ...state,
        correctAnswer: action.payload,
      }
    case actionTypes.NEW_GAME:
      return {
        ...state,
        ...initState,
      }
    default:
      return state
  }
}
