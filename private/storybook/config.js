// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { configure, addDecorator, setAddon } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { infoAddon, addWidthInfo } from '@storybook/addon-info'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import '@storybook/addon-chapters'
//import centered from '@storybook/react-storybook-decorator-centered'
import chaptersAddon from 'react-storybook-addon-chapters'
import { ThemeProvider } from 'styled-components'
import configureStore from 'store/configure'
import api from 'services/api'
import theme from 'components/src/themes/default'

setAddon(chaptersAddon)

const store = configureStore({}, { api: api.create() })
const req = require.context('components/src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

setOptions({
  name: 'Dinghy Design System',
  url: 'https://github.com/getdinghy',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: true,
  hierachySeparator: /\./,
});

//addDecorator(centered)

addDecorator(story => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    </BrowserRouter>
  </Provider>
))

configure(loadStories, module)
