import { Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

import Dashboard from './components/Dashboard'
import './App.css'

const App = props => {

  let routes

  return (
    <Router>
      <Fragment>
        <Dashboard />
        {routes}
      </Fragment>
    </Router>
  )
}

const mapStateToProps = state => ({ })

const mapDispatchToProps = dispatch => ({ })

export default connect(mapStateToProps, mapDispatchToProps)(App)