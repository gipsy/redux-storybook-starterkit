import React from 'react'
import { shallow } from 'enzyme'
import Category from '~/src/components/molecules/Category'

const wrap = (props = {}) => shallow(<Category {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

test('<Category /> renders with all allowed props', () => {
  const wrapper = wrap({
    id: 'test',
    children: 'test',
    palette: 'primary',
    reverse: true,
    responsive: true,
    width: 46,
    height: 26,
    icon: 'path/to/icon'
  })
  expect(wrapper).toMatchSnapshot()
})
