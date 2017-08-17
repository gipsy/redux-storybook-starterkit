import React from 'react'
import { storiesOf } from '@storybook/react'
import SamplePage from '~/src/components/pages/SamplePage'

storiesOf('Components/Pages', module)
  .add('SamplePage', () => (
    <SamplePage />
  ))
