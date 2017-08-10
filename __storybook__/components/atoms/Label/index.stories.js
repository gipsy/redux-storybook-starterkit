import React from 'react'
import { storiesOf } from '@storybook/react'
import Label from '~/src/components/atoms/Label'

storiesOf('Label', module)
  .add('default', () => (
    <Label>Hello</Label>
  ))
  .add('reverse', () => (
    <Label reverse>Hello</Label>
  ))
  .disable(enableFn => {false})
