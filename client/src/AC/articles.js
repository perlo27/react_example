import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS } from '../constants'
// import $ from 'jquery'
// import history from '../history'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

//Using api middleware here
export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

//Using thunk middleware here
export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })
//setTimeout here is only to simulate long server response
//jquery used for example
//         setTimeout(() => {
//             $.get(`/api/article/${id}`)
//                 .done(response => dispatch({
//                     type: LOAD_ARTICLE + SUCCESS,
//                     payload: { id },
//                     response
//                 }))
//                 .fail((error) => {
//                     history.replace(`/error?message=${error.statusText}`)
//                 })
//         }, 1000)
    }
}