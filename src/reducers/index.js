import counterReducer from './counter'
import isLogged from './isLogged'
import milestonesReducer from './milestones'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
  counter: counterReducer,
  logged: isLogged,
  milestones: milestonesReducer,
})

export default allReducers
