import React from 'react'
import { storiesOf } from '@storybook/react'
import { Organism } from '~/src/components/organisms/Organism'

storiesOf('Organism', module)
  .add('default', () => (
    <Organism />
  ))
  .add('reverse', () => (
    <Organism reverse />
  ))
  .disable(enableFn => {false})
