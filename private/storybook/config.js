// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { configure, addDecorator, setAddon } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { setDefaults, addWithInfo } from '@storybook/addon-info'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import '@storybook/addon-chapters'
//import centered from '@storybook/react-storybook-decorator-centered'
import chaptersAddon from 'react-storybook-addon-chapters'
import staticMarkup from 'react-storybook-addon-static-markup'
import { ThemeProvider } from 'styled-components'
import configureStore from 'store/configure'
import api from 'services/api'
import theme from 'components/src/themes/default'

setAddon(chaptersAddon)
setAddon(staticMarkup)

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
  sortStoriesByKind: false,
  hierachySeparator: '\\.',
});

// addon-info 
setDefaults({
  inline: true,
  maxPropsIntoLine: 1,
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100,
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
