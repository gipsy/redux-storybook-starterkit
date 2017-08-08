import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import SamplePage from 'components'

it('renders a snapshot', () => {
  const tree = renderer.create(<SamplePage/>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders', () => {
  shallow(<SamplePage />)
})
