import React from 'react'
import { storiesOf, action, addDecorator } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { linkTo } from '@storybook/addon-links'

storiesOf('1 Intro', module)
  .addWithChapters(
    'Rules',
    {
      subtitle: 'Subtitle',
      info: `
        Some info
      `
    },
  )
