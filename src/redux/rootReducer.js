import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { appReducer } from './appReducer'
import { quizReducer } from './quizReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
  quiz: quizReducer,
})
