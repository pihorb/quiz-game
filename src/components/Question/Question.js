import React from 'react'
import { useDispatch } from 'react-redux'
import _ from 'underscore'

import './Question.sass'
import { ActionCreators } from '../../redux/actions'
import Score from '../Score/Score'

const Question = ({ question: q }) => {
  const dispatch = useDispatch()

  const handleAnswer = (event) => {
    const answer = event.target.value

    dispatch(ActionCreators.setAnswer(answer))

    if (q.correct_answer === answer) {
      dispatch(ActionCreators.addScore())
    }
  }

  return (
    <div className="question-wrap">
      <Score />
      <div className="question-wrap__category">{_.unescape(q.category)}</div>
      <div className="question-wrap__title">{_.unescape(q.question)}</div>
      <div className="question-wrap__btns">
        <button
          onClick={handleAnswer}
          value="True"
          data-choosen={q.user_answer === 'True'}
          data-disabled={q.user_answer ? true : false}
          data-correct={
            q.user_answer && q.correct_answer === 'True' ? true : false
          }
          className="question-wrap__btn question-wrap__btn--true"
        >
          True
        </button>
        <button
          onClick={handleAnswer}
          value="False"
          data-choosen={q.user_answer === 'False'}
          data-disabled={q.user_answer ? true : false}
          data-correct={
            q.user_answer && q.correct_answer === 'False' ? true : false
          }
          className={`question-wrap__btn question-wrap__btn--false`}
        >
          False
        </button>
      </div>
    </div>
  )
}

export default Question
