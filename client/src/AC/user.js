import { LOGIN_USER, LOGOUT_USER } from '../constants'

export function loginUser(userName) {
    return {
        type: LOGIN_USER,
        payload: { userName }
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    }
}