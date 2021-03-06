import React from 'react'
import { storiesOf } from '@storybook/react'
import Heading from '~/src/components/atoms/Heading'

storiesOf('Components/Atoms', module)
  .add('Heading', () => (
    <Heading>Id tempor duis non esse commodo fugiat excepteur nostrud.</Heading>
  ))
  // .add('palette', () => (
  //   <Heading palette="primary">Id tempor duis non esse commodo fugiat excepteur nostrud.</Heading>
  // ))
  // .add('palette reverse', () => (
  //   <Heading palette="primary" reverse>
  //     Id tempor duis non esse commodo fugiat excepteur nostrud.
  //   </Heading>
  // ))
  // .add('level 2', () => (
  //   <Heading level={2}>Id tempor duis non esse commodo fugiat excepteur nostrud.</Heading>
  // ))
  // .add('level 3', () => (
  //   <Heading level={3}>Id tempor duis non esse commodo fugiat excepteur nostrud.</Heading>
  // ))
