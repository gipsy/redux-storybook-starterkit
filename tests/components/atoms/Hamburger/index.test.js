import React from 'react'
import { shallow } from 'enzyme'
import Hamburger from '~/src/components/atoms/Hamburger'

const wrap = (props = {}) => shallow(<Hamburger {...props} />).dive()

test('<Hamburger /> renders props', () => {
  const wrapper = wrap({ reverse: true, palette: 'primary' })
  expect(wrapper).toMatchSnapshot()
})
