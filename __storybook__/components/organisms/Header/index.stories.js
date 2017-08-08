import React from 'react'
import { storiesOf } from '@storybook/react'
import { Header } from '~/src/components/organisms/Header'

storiesOf('Header', module)
  .add('default', () => (
    <Header />
  ))
  .disable(enableFn => {false})
