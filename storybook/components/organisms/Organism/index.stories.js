import React from 'react'
import { storiesOf } from '@storybook/react'
import Organism from '~/src/components/organisms/Organism'

storiesOf('Components/Organisms', module)
  .add('Organism', () => (
    <Organism />
  ))
  .add('reverse', () => (
    <Organism reverse />
  ))
  .disable(enableFn => {false})
