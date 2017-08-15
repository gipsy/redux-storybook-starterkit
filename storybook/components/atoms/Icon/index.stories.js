// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '~/src/components/atoms/Icon'

storiesOf('Components.Atoms', module)
  .add('Icon', () => (
    <Icon icon="close" />
  ))
  .add('palette', () => (
    <Icon icon="close" palette="primary" />
  ))
  .add('palette reverse', () => (
    <Icon icon="close" palette="primary" reverse />
  ))
  .add('height', () => (
    <Icon icon="close" height={100} />
  ))
  .disable(enableFn => {false})
