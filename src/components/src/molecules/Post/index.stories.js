import React from 'react'
import { storiesOf } from '@storybook/react'
import { Post } from 'components/src'

storiesOf('Post', module)
  .add('default', () => (
    <Post title="Hello" body="Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua." />
  ))
  .disable(enableFn => {false})
