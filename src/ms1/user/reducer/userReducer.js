

const actionType = {
  //
  SET_USER: 'user.setUser',
  SET_USERS: 'user.setUsers',
};

const initialState = {
  //
  user: null,
  users: [],
};


function reducer(state = initialState, action) {
  //
  return {
    user: userReducer(state.user, action),
    users: usersReducer(state.users, action),
  };
}


function userReducer(user, { type, payload }) {
  //
  switch (type) {
    case actionType.SET_USER:
      return payload;

    default:
      return user;
  }
}

function usersReducer(users, { type, payload }) {
  //
  switch (type) {
    case actionType.SET_USERS:
      return payload;

    default:
      return users;
  }
}


export default reducer;
export { actionType, reducer };
