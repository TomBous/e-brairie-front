import { combineReducers } from "redux";
import { appReducer, userReducer } from './reducers'

//L'export du reducer que nous assignons à la clef `app`
const rootReducer = combineReducers({ app: appReducer, user: userReducer })

export default rootReducer