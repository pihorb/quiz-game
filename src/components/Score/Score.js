import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { startNewGame } from '../../redux/actions'
import './Score.sass'

const Score = ({ user, score, startNewGame, total, isLoggedIn }) => {
  const handleClick = () => startNewGame()
  if (!isLoggedIn) {
    return <Redirect to="login" />
  }
  return (
    <div className="score-wrapper">
      <div className='score-wrapper__name'>{user.username}</div>
      <div className='score-wrapper__points'>
        Score: <span>{score}</span>
      </div>
      {total === 10 && (
        <button className="score-wrapper__btn" onClick={handleClick}>
          Play again
        </button>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  score: state.quiz.score,
  total: state.quiz.answersTotal,
  isLoggedIn: state.user.isLoggedIn,
})

const mapDispatchToProps = {
  startNewGame,
}

export default connect(mapStateToProps, mapDispatchToProps)(Score)
