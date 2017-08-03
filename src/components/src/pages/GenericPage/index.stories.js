import React from 'react'
import { storiesOf } from '@storybook/react'
import { GenericPage } from 'components/src'

storiesOf('Pages', module)
  .add('GenericPage', () => (
    <GenericPage />
  ))
  .disable(enableFn => {false})
