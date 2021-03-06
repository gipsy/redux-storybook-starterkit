import React from 'react'
import { shallow } from 'enzyme'
import Paragraph from '~/src/components/atoms/Paragraph'

const wrap = (props = {}) => shallow(<Paragraph {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

test('<Paragraph /> renders with reverse: true as prop', () => {
  const wrapper = wrap({ reverse: true })
  expect(wrapper).toMatchSnapshot()
})
