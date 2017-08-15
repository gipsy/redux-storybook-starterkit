import React from 'react'
import { storiesOf } from '@storybook/react'
import { IconLink } from '~/src/components/molecules/IconLink'

storiesOf('Components.Molecules', module)
  .add('IconLink', () => (
    <IconLink icon="close" href="#">Hello</IconLink>
  ))
