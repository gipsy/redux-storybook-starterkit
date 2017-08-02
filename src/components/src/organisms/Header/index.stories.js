import React from 'react'
import { storiesOf } from '@storybook/react'
import { Header } from 'components/src'

storiesOf('Header', module)
  .add('default', () => (
    <Header />
  ))
  .disable(enableFn => {false})
