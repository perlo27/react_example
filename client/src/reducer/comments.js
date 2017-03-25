import { Record, Map, List } from 'immutable'
import { arrayToMap } from '../store/helpers'
import { LOAD_COMMENTS_FOR_PAGE, ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, START, SUCCESS } from '../constants'


const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})

const defaultState = new Map({
    entities: new Map({}),
    pagination: new Map({})
})

export default (comments = defaultState, action) => {
    const { type, payload, response } = action

    switch (type) {
    case ADD_COMMENT:
        const { comment: { user, text, id } } = payload
        return comments.setIn(['entities', id], new CommentModel({ id, user, text }))

    case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
        return comments.update('entities', entities =>
                entities.merge(arrayToMap(response, comment => new CommentModel(comment)))
            )

    case LOAD_COMMENTS_FOR_PAGE + START:
        return comments.setIn(['pagination', payload.page], new List([]))

    case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
        return comments
                .update('entities', entities =>
                    entities
                        .merge(arrayToMap(response.records, comment => new CommentModel(comment)))
                )
                .setIn(['pagination', payload.page], new List(response.records.map(record => record.id)))
                .set('total', response.total)
    default: return comments

    }
}
