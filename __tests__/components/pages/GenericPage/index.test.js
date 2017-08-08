import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import GenericPage from 'components'

it('renders a snapshot', () => {
  const tree = renderer.create(<GenericPage/>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders', () => {
  shallow(<GenericPage />)
})
