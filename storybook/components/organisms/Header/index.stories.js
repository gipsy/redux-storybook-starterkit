import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from '~/src/components/organisms/Header'

storiesOf('Components/Organisms', module)
  .add('Header', () => (
    <Header />
  ))
