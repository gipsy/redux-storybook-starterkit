import React from 'react'
import { storiesOf } from '@storybook/react'
import { FeatureList } from 'components/src'

storiesOf('FeatureList', module)
  .add('default', () => (
    <FeatureList />
  ))
  .disable(enableFn => {false})
