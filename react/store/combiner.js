import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import item  from './item'
import itemlist  from './itemlist'
import user  from './user'
import userlist  from './userlist'

export default combineReducers({
    itemlist,
    item,
    userlist,
    user,
    routing: routerReducer
})
