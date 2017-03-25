import { Record } from 'immutable'
import { LOGIN_USER, LOGOUT_USER } from '../constants'

const UserModel = Record({
    name: ''
})

const DefaultState = new UserModel()

export default (user = DefaultState, action) => {
    const { type, payload } = action
    switch (type) {
    case LOGIN_USER :
        return user.set('name', payload.userName)
    case LOGOUT_USER:
        return user.delete('name')
    default: return user
    }
}
