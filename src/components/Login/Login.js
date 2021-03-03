import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './login.sass'
import { ActionCreators } from '../../redux/actions/index.js'

export default function Login() {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const alert = useSelector((state) => state.app.alert)
  const history = useHistory()
  const handleSubmit = (event) => event.preventDefault()

  const handleClick = () => {
    if (!username) {
      return dispatch(ActionCreators.showAlert('Invalid user name'))
    }
    history.push('/')
    dispatch(ActionCreators.loginUser(username))
    setUsername('')
  }

  const handleUserName = (event) => setUsername(event.target.value)

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {alert ? <h1 className="login-form__error">{alert}</h1> : ''}
      <label htmlFor="username" className="login-form__label">
        Please enter your username:
      </label>
      <input
        type="text"
        className="login-form__input"
        id="username"
        value={username}
        onChange={handleUserName}
      />
      <button onClick={handleClick} type="submit" className="login-form__btn">
        Start
      </button>
    </form>
  )
}
