import { Record, Map } from 'immutable'
import { LOAD_COMMENTS_FOR_ARTICLE, DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE,
    START, SUCCESS } from '../constants'
import { arrayToMap } from '../store/helpers'

const ArticleModel = Record({
    id: null,
    date: null,
    title: '',
    text: '',
    teaser: '',
    imageLink: '',
    relatedStories: [],
    loading: false,
    commentsLoading: false,
    commentsLoaded: false,
    comments: []
})

const defaultState = new Map({
    entities: new Map({}),
    loading: false,
    loaded: false
})

export default (articles = defaultState, action) => {
    const { type, payload, generatedId, response } = action

    switch (type) {
    case DELETE_ARTICLE:
        return articles.deleteIn(['entities', payload.id])

    case ADD_COMMENT:
        return articles.updateIn(['entities', payload.articleId, 'comments'], comments => comments.concat(generatedId))

    case LOAD_ALL_ARTICLES + START:
        return articles.set('loading', true)

    case LOAD_ALL_ARTICLES + SUCCESS:
        return articles
                .update('entities', entities =>
                    arrayToMap(response, article => new ArticleModel(article)).mergeDeep(entities))
                .set('loading', false)
                .set('loaded', true)

    case LOAD_ARTICLE + START:
        return articles
                    .setIn(['entities', payload.id], new ArticleModel({}))
                    .setIn(['entities', payload.id, 'loading'], true)

    case LOAD_ARTICLE + SUCCESS:
        return articles
                .setIn(['entities', payload.id], new ArticleModel(response))
                .setIn(['entities', payload.id, 'loading'], false)

    case LOAD_COMMENTS_FOR_ARTICLE + START:
        return articles.setIn(['entities', payload.articleId, 'commentsLoading'], true)

    case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
        return articles
                .setIn(['entities', payload.articleId, 'commentsLoading'], false)
                .setIn(['entities', payload.articleId, 'commentsLoaded'], true)
    }

    return articles
}
