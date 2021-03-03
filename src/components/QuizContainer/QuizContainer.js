import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Quiz from '../Quiz/Quiz'
import Score from '../Score/Score'
import './QuizContainer.sass'
import { MAX_QUESTIONS } from '../../helpers/constans'

const QuizContainer = ({ total, isLoggedIn }) => {
  const result = total === MAX_QUESTIONS ? <Score /> : <Quiz />

  if (!isLoggedIn) {
    return <Redirect to="login" />
  }
  return <div className="quiz-container">{result}</div>
}

const mapStateToProps = (state) => ({
  total: state.quiz.answersTotal,
  isLoggedIn: state.user.isLoggedIn,
})

export default connect(mapStateToProps)(QuizContainer)
