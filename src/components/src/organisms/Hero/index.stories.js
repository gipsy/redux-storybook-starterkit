import React from 'react'
import { storiesOf } from '@storybook/react'
import { Hero } from 'components/src'

storiesOf('Hero', module)
  .add('default', () => (
    <Hero />
  ))
  .disable(enableFn => {false})
