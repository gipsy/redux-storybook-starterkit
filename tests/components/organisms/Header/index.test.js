import React from 'react'
import { shallow } from 'enzyme'
import Header from '~/src/components/organisms/Header'

const wrap = (props = {}) => shallow(<Header {...props} />).dive()

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

test('<Header /> renders with all allowed props', () => {
  const wrapper = wrap({
    id: 'test',
    palette: 'primary',
    reverse: true,
  })
  expect(wrapper).toMatchSnapshot()
})