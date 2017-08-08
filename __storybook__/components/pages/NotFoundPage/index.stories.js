import React from 'react'
import { storiesOf } from '@storybook/react'
import { NotFoundPage } from '~/src/components/pages/NotFoundPage'

storiesOf('Pages', module)
  .add('NotFoundPage', () => (
    <NotFoundPage />
  ))
  .disable(enableFn => {false})
