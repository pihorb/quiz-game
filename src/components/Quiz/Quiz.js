import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuestions, nextQuestion, previousQuestion } from '../../redux/actions'
import Question from '../Question/Question'
import './Quiz.sass'

const Quiz = () => {
  const dispatch = useDispatch()
  const quiz = useSelector((state) => state.quiz.questions)
  let question = useSelector((state) => state.quiz.currentQuestion)
  
  useEffect(() => {
    dispatch(fetchQuestions())
  }, [dispatch])

  if (!quiz.length) {
    return <h1>Spinner</h1>
  }

  const switchQuestion = (event) => {
    let choice = event.target.getAttribute('data-attr')

    if (choice === 'prev') {
      dispatch(previousQuestion())
    } else {
      dispatch(nextQuestion())
    }
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
      <Question
        question={quiz[question]}
        key={Date.now().toString()}
      />
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
