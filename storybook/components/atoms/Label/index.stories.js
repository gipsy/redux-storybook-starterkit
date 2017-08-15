import React from 'react'
import { storiesOf } from '@storybook/react'
import Label from '~/src/components/atoms/Label'

storiesOf('Components.Atoms', module)
  .add('Label', () => (
    <Label>Hello</Label>
  ))
  .add('reverse', () => (
    <Label reverse>Hello</Label>
  ))
  .disable(enableFn => {false})
