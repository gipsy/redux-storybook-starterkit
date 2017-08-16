import React from 'react'
import { shallow } from 'enzyme'
import RadioButtonGroup from '~/src/components/organisms/RadioButtonGroup'

const wrap = (props = {}) => shallow(<RadioButtonGroup {...props} listOfItems={radioList.list} />)

const radioList = {
  list: [
    {value:'under 250',text:'under £250'},
    {value:'250 - 500',text:'£250 - £500'}
  ]
}

//#TODO test it but not on id as there are multiple radios
// it('renders props when passed in', () => {
//   const wrapper = wrap({ id: 'foo'})
//   expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
// })

test('<RadioButtonGroup /> renders with list of buttons array', () => {
  const wrapper = wrap({
    id: 'test',
    palette: 'primary',
    listOfItems: radioList.list
  })
  expect(wrapper).toMatchSnapshot()
})
