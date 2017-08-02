import React from 'react'
import { storiesOf } from '@storybook/react'
import { SamplePage } from 'components/src'

storiesOf('SamplePage', module)
  .add('default', () => (
    <SamplePage />
  ))
  .disable(enableFn => {false})
