import React from 'react'
import { storiesOf, action, addDecorator } from '@storybook/react'
//import { withNotes } from '@storybook/addon-notes'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import Header from '~/src/components/organisms/Header'
import Intro from '~/src/components/intro'

storiesOf('Intro', module)
  .add('Principles', () => (
    <div>
      <Intro />
    </div>
  ));
