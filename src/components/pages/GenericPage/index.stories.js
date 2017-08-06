import React from 'react'
import { storiesOf } from '@storybook/react'
import { GenericPage } from 'components'

storiesOf('Pages', module)
  .add('GenericPage', () => (
    <GenericPage />
  ))
  .disable(enableFn => {false})
