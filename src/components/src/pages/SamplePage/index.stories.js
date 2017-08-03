import React from 'react'
import { storiesOf } from '@storybook/react'
import { SamplePage } from 'components/src'

storiesOf('Pages', module)
  .add('SamplePage', () => (
    <SamplePage />
  ))
  .disable(enableFn => {false})
