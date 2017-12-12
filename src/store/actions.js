import * as types from './mutation-types'
import axios from 'axios'

export const register = ({commit}, userPayload) => {
  fetch(`/users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userPayload)
  })
  .then(response => response.json())
  .then(json => commit(types.REGISTER, json))
}

export const registerUser = ({commit}, userPayload) => {
  return new Promise((resolve, reject) => {
    fetch(`/users/register`, {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userPayload)
    })
    .then(res => {
      resolve(res)
    })
    .then(err => {
      reject(err)
    })
  })
}
