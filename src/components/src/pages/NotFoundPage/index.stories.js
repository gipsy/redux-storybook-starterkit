import React from 'react'
import { storiesOf } from '@storybook/react'
import { NotFoundPage } from 'components/src'

storiesOf('NotFoundPage', module)
  .add('default', () => (
    <NotFoundPage />
  ))
  .disable(enableFn => {false})
