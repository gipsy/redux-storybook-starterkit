import React from 'react'
import { storiesOf } from '@storybook/react'
import { Footer } from 'components/src'

storiesOf('Footer', module)
  .add('default', () => (
    <Footer />
  ))
  .disable(enableFn => {false})
