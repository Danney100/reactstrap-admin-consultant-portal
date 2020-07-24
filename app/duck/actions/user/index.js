import {SET_LOGIN_INFO} from 'duck/constants/user'
import {SET_SIGNUP_INFO} from 'duck/constants/user'

export function setLoginInfo(payload) {
  return {
    type: SET_LOGIN_INFO,
    payload,
  }
}

export function setSignupInfo(payload) {
  return {
    type: SET_SIGNUP_INFO,
    payload,
  }
}
