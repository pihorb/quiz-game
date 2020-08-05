import {
  FETCH_QUESTIONS,
  SET_ANSWER,
  ADD_SCORE,
  PREVIOUS_QUESTION,
  NEXT_QUESTION,
  UPDATE_TOTAL_ANSWERS,
  NEW_GAME,
  CORRECT_ANSWER
} from './types'

const initState = {
  questions: [],
  currentQuestion: 0,
  score: 0,
  answersTotal: 0,
  correctAnswer: '',
}

export const quizReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      const res = [action.payload][0]
      return {
        ...state,
        questions: state.questions.concat(res),
      }
    case PREVIOUS_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion - 1,
      }
    case NEXT_QUESTION:
      return {
        ...state,
        currentQuestion:
          state.answersTotal === 10
            ? state.currentQuestion
            : state.currentQuestion + 1,
      }
    case SET_ANSWER:
      return {
        ...state,
        questions: state.questions.map((q, i) => {
          if (i === state.currentQuestion) {
            return { ...q, user_answer: action.payload }
          }
          return q
        }),
      }
    case ADD_SCORE:
      return { ...state, score: state.score + 1 }
    case UPDATE_TOTAL_ANSWERS:
      return {
        ...state,
        answersTotal: state.questions.filter((q) => q.user_answer).length,
      }
    case CORRECT_ANSWER:
      return {
        ...state,
        correctAnswer: action.payload,
      }
    case NEW_GAME:
      return {
        ...state,
        ...initState,
      }
    default:
      return state
  }
}
