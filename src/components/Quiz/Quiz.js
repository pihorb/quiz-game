import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionCreators } from '../../redux/actions'
import Question from '../Question/Question'
import { size } from 'lodash'
import './Quiz.sass'

const Quiz = () => {
  const dispatch = useDispatch()
  const quiz = useSelector((state) => state.quiz.questions)
  const question = useSelector((state) => state.quiz.currentQuestion)

  useEffect(() => {
    dispatch(ActionCreators.fetchQuestions())
  }, [dispatch])

  const switchQuestion = (event) =>
    event.target.getAttribute('data-attr') === 'prev'
      ? dispatch(ActionCreators.previousQuestion())
      : dispatch(ActionCreators.nextQuestion())

  if (size(quiz) < 1) {
    return <h1>Spinner</h1>
  }

  return (
    <div className="quiz-wrap">
      <div
        data-attr="prev"
        className={`quiz-wrap__btn quiz-wrap__btn--previous ${
          question === 0 ? 'disabled' : ''
        }`}
        onClick={switchQuestion}
      >
        &#60;
      </div>
      <Question question={quiz[question]} key={Date.now().toString()} />
      <div
        data-attr="next"
        onClick={switchQuestion}
        className={`quiz-wrap__btn quiz-wrap__btn question-wrap__btn--next ${
          question === 9 ? 'disabled' : ''
        }`}
      >
        &#62;
      </div>
    </div>
  )
}

export default Quiz
