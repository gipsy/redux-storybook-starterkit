import React from 'react'
import { shallow } from 'enzyme'
import Label from '~/src/components/atoms/Label'

const wrap = (props = {}) => shallow(<Label {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ htmlFor: 'foo' })
  expect(wrapper.find({ htmlFor: 'foo' })).toHaveLength(1)
})

it('should render a label', () => {
  const wrapper = wrap({ children: 'Hello Jest!' })
  expect(wrapper).toMatchSnapshot()
})
