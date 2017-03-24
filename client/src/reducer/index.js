import { combineReducers } from 'redux'
import articles from './articles'
import comments from './comments'
import filters from './filters'
import user from './user'

export default combineReducers({
    articles, comments, filters, user
})
