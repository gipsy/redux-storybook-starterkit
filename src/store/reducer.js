// https://github.com/diegohaz/arc/wiki/Reducers
import camelCase from 'lodash/camelCase'
import { combineReducers } from 'redux'
import {leanReducer} from 'lean-redux'
import { reducer as form } from 'redux-form'
import { reducer as thunk } from 'redux-saga-thunk'
import { responsiveStateReducer } from 'redux-responsive'

leanReducer.setGlobalScope('lean')

const reducers = {
  form,
  thunk,
  browser: responsiveStateReducer,
}

const req = require.context('.', true, /\.\/.+\/reducer\.js$/)

req.keys().forEach((key) => {
  const storeName = camelCase(key.replace(/\.\/(.+)\/.+$/, '$1'))
  reducers[storeName] = req(key).default
})

export default combineReducers(reducers)
