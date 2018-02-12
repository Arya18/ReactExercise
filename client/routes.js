import React from 'react'
import {Router, hashHistory} from 'react-router'
import { Route, Switch } from 'react-router-dom'
import App from './containers/App.js';
import LogoutPage from './containers/LogoutPage.js';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const ProjectRouter = () => (
  <Router history={history}>
  	<Switch>
      <Route
        exact path='/'
        component={App}
      />
      <LogoutPage />
    </Switch>  
  </Router>
)

export default ProjectRouter
