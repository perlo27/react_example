import $ from 'jquery'
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS } from '../constants'
import history from '../history'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

// Using api middleware here
export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

// Using thunk middleware here
export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })

// jquery used for example
        $.get(`/api/article/${id}`)
                .done(response => dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: { id },
                    response
                }))
                .fail((error) => {
                    history.replace(`/error?message=${error.statusText}`)
                })
    }
}
