import * as React from 'react' // tslint:disable-line
import * as ReactDOM from 'react-dom'
import {Router, browserHistory, applyRouterMiddleware} from 'react-router'
import {useScroll} from 'react-router-scroll'
import loadAnalytics from './utils/analytics'
import routes from './routes'

import './polyfill'

loadAnalytics()

browserHistory.listen(({pathname}) => {
  analytics.page()
  analytics.track(`view documenation: ${pathname}`)
})

ReactDOM.render(
  (
    <Router
      routes={routes}
      history={browserHistory}
      render={applyRouterMiddleware(useScroll((props, { location }) => location.hash === ''))}
    />
  ),
  document.getElementById('root')
)