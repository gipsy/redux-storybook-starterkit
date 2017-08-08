import React from 'react'
import { storiesOf } from '@storybook/react'
import { FeatureList } from '~/src/components/organisms/FeatureList'

storiesOf('FeatureList', module)
  .add('default', () => (
    <FeatureList />
  ))
  .disable(enableFn => {false})
