import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Results from './components/Results/Results'
import QuizContainer from './components/QuizContainer/QuizContainer'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={QuizContainer} />
          <Route path="/login" component={Login} />
          <Route path="/results" component={Results} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
