import { ADD_COMMENT, LOAD_COMMENTS_FOR_PAGE, LOAD_COMMENTS_FOR_ARTICLE } from '../constants'

export function addComment(comment, article) {
    const { text, user } = comment
    const body = {
        text,
        user,
        article
    }

    return (dispatch) => {
        fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            if (!res.ok) throw new Error(res.statusText)
            return res.json()
        })
        .then((comment) => {
            dispatch({
                type: ADD_COMMENT,
                payload: {
                    comment
                }
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function loadCommentsForArticle(articleId) {
    return {
        type: LOAD_COMMENTS_FOR_ARTICLE,
        payload: { articleId },
        callAPI: `/api/comment?article=${articleId}`
    }
}

export function loadCommentsForPage(page) {
    return {
        type: LOAD_COMMENTS_FOR_PAGE,
        payload: { page },
        callAPI: `/api/comment?limit=5&offset=${(page - 1) * 5}`
    }
}
