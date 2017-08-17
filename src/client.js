/* eslint-disable no-underscore-dangle */
// https://github.com/diegohaz/arc/wiki/Example-app
import 'react-hot-loader/patch'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ServerStateProvider } from 'react-router-server'
import { calculateResponsiveState } from 'redux-responsive'
import WebfontLoader from '@dr-kobros/react-webfont-loader'

import { basename } from '~/src/config'
import { webfontLoaderConfig } from '~/src/components/themes/default'
import configureStore from '~/src/store/configure'
import api from '~/src/services/api'
import App from '~/src/components/App'

const store = configureStore(initialState, { api: api.create() })
const serverState = window.__SERVER_STATE__
const initialState = window.__INITIAL_STATE__

const renderApp = () => (
  <ServerStateProvider state={serverState}>
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <WebfontLoader config={webfontLoaderConfig}>
          <App />
        </WebfontLoader>
      </BrowserRouter>
    </Provider>
  </ServerStateProvider>
)

const root = document.getElementById('app')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
}

// calculate the initial state
store.dispatch(calculateResponsiveState(window))

