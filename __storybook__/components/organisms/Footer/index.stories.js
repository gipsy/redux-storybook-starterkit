import React from 'react'
import { storiesOf } from '@storybook/react'
import { Footer } from '~/src/components/organisms/Footer'

storiesOf('Footer', module)
  .add('default', () => (
    <Footer />
  ))
  .disable(enableFn => {false})
