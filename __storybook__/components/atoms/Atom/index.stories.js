import React from 'react'
import { storiesOf } from '@storybook/react'
import Atom from '~/src/components/atoms/Atom'

storiesOf('Atom', module)
  .add('default', () => (
    <Atom>Hello</Atom>
  ))
  .add('reverse', () => (
    <Atom reverse>Hello</Atom>
  ))
  .disable(enableFn => {false})
