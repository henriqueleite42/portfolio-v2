import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import routes from './config/routes'

const loadRoute = (viewName: string) =>
  React.lazy(() => import(`./Views/${viewName}`))

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            exact
            path={route.path}
            component={loadRoute(route.component)}
          />
        ))}
      </Switch>
    </Router>
  )
}

export default App
