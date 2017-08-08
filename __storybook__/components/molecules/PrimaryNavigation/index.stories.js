import React from 'react'
import { storiesOf } from '@storybook/react'
import { PrimaryNavigation } from '~/src/components/molecules/PrimaryNavigation'

storiesOf('PrimaryNavigation', module)
  .add('default', () => (
    <PrimaryNavigation />
  ))
  .add('reverse', () => (
    <PrimaryNavigation reverse />
  ))
  .disable(enableFn => {false})
