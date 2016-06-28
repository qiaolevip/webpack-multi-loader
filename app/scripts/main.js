import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import SliderMonitor from 'redux-slider-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import * as reducers from './reducers'
import { App, Home, Foo, Bar } from './components'

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q' changeMonitorKey='ctrl-m'>
    <LogMonitor />
    <SliderMonitor />
  </DockMonitor>
);

// Add the reducer to your store on the `routing` key
const reducer = combineReducers({
  reducers,
  routing: routerReducer
});

const store = createStore(
  reducer,
  DevTools.instrument()
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);