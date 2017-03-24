import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk, api, randomId))

const store = createStore(reducer, {}, enhancer)

window.store = store
export default store

