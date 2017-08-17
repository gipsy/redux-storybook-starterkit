import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import SamplePage from '~/src/components/pages/SamplePage'

it('renders a snapshot', () => {
  const tree = renderer.create(<SamplePage header="header" footer="footer"/>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders', () => {
  shallow(<SamplePage header="header" footer="footer" />)
})
