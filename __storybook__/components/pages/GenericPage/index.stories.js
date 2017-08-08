import React from 'react'
import { storiesOf } from '@storybook/react'
import { GenericPage } from '~/src/components/pages/GenericPage'

storiesOf('Pages', module)
  .add('GenericPage', () => (
    <GenericPage />
  ))
  .disable(enableFn => {false})
