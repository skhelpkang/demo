import actionType from "./userActionType"

const {
  SET_USER,
  SET_USERS,
} = actionType

const initialState = {
  //
  user: null,
  users: [],
}


function reducer(state = initialState, action) {
  //
  return {
    user: userReducer(state.user, action),
    users: usersReducer(state.users, action),
  }
}


function userReducer(user, { type, payload }) {
  //
  switch (type) {
    case SET_USER:
      return payload

    default:
      return user
  }
}

function usersReducer(users, { type, payload }) {
  //
  switch (type) {
    case SET_USERS:
      return payload

    default:
      return users
  }
}


export default reducer
