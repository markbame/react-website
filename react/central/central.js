import { composeWithDevTools } from 'redux-devtools-extension'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Reducers from '../store/combiner'
import { itemsmiddleware } from '../middleware/itemsmiddleware'
import { authmiddleware } from '../middleware/authmiddleware'

export const store  = createStore( Reducers, composeWithDevTools(applyMiddleware( thunk, itemsmiddleware, authmiddleware)))
