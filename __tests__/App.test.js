import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import App from 'components'

it('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})
