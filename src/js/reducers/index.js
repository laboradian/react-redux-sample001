import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import addition from './addition'
import additionStatus from './additionStatus'
import multiplication from './multiplication'
import multiplicationStatus from './multiplicationStatus'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  addition,
  additionStatus,
  multiplication,
  multiplicationStatus
})

export default todoApp
