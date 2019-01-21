import {combineReducers} from 'redux'
import ActivePageReducer from './ActivePageReducer'

const rootReducer = combineReducers({
    ActivePage: ActivePageReducer
})

export default rootReducer