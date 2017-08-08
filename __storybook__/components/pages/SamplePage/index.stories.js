import React from 'react'
import { storiesOf } from '@storybook/react'
import { SamplePage } from '~/src/components/pages/SamplePage'

storiesOf('Pages', module)
  .add('SamplePage', () => (
    <SamplePage />
  ))
  .disable(enableFn => {false})
