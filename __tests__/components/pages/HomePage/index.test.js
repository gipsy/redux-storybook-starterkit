// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import HomePage from 'components'

it('renders a snapshot', () => {
  const tree = renderer.create(<HomePage/>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders', () => {
  shallow(<HomePage />)
})
