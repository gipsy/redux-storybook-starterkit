import React from 'react'
import { storiesOf } from '@storybook/react'
import { GenericPage } from 'components/src'

storiesOf('GenericPage', module)
  .add('default', () => (
    <GenericPage />
  ))
  .disable(enableFn => {false})
