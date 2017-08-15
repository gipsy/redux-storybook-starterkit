import React from 'react'
import { storiesOf } from '@storybook/react'
import Footer from '~/src/components/organisms/Footer'

storiesOf('Components/Organisms', module)
  .add('Footer', () => (
    <Footer />
  ))
  .disable(enableFn => {false})
