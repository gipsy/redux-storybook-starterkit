import React from 'react'
import { storiesOf } from '@storybook/react'
import { NotFoundPage } from 'components/src'

storiesOf('Pages', module)
  .add('NotFoundPage', () => (
    <NotFoundPage />
  ))
  .disable(enableFn => {false})
