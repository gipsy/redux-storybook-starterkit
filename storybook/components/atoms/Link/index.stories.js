import React from 'react'
import { storiesOf } from '@storybook/react'
import Link from '~/src/components/atoms/Link'

storiesOf('Components/Atoms', module)
  .add('Link', () => (
    <Link href="https://github.com/diegohaz/arc">ARc repository</Link>
  ))
