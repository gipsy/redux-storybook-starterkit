import React from 'react'
import { storiesOf, action, addDecorator } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { linkTo } from '@storybook/addon-links'
import Intro from '../Intro'

storiesOf('1 Intro', module)
  .add('Welcome', () => (
    <Intro />
  ))
