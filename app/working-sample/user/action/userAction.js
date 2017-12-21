import actionType from "../reducer/userActionType"

const {
  SET_USER,
  SET_USERS,
} = actionType

import userApi from '../api/userApi'


function findUser(userId) {

  return async (dispatch) => {

    const user = await userApi.findUser_sample(userId)

    return dispatch({
      type: SET_USER,
      payload: user,
    })

  }

}


function findAllUsers() {

  return async (dispatch) => {
    const users = await userApi.findAllUsers_sample()

    return dispatch({
      type: SET_USERS,
      payload: users,
    })

  }

}


export default {
  findUser,
  findAllUsers,
}
