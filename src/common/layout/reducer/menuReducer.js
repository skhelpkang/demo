import actionType from "./menuActionType"

const {
  SET_ACTIVE_ITEM,
  SET_ITEMS,
} = actionType

const initialState = {
  //
  activeItem: null,

  items: process.env.NODE_ENV === 'production' ? [] : [
    { name: 'AdminMenu1', text: 'AdminMenu1',  role: 'Admin',  link: '/workingSample/menus/AdminMenu1', },
    { name: 'AdminMenu2', text: 'AdminMenu2', role: 'Admin',  link: '/workingSample/menus/AdminMenu2', },

    { name: 'UserMenu1',  text: 'UserMenu1',    role: 'User',  link: '/workingSample/menus/UserMenu1', },
    { name: 'UserMenu2',  text: 'UserMenu2',    role: 'User',  link: '/workingSample/menus/UserMenu2', },

    { name: 'sampleList',   text: 'sampleList',     role: 'User',  link: '/workingSample/sampleList', },
  ]
};


function reducer(state = initialState, action) {
  //
  return {
    activeItem: selectMenuReducer(state.activeItem, action),
    items: menuReducer(state.items, action),
  }
}


function selectMenuReducer(activeItem, { type, payload }) {
  //
  switch (type) {
    case actionType.SET_ACTIVE_ITEM:
      return payload
    default:
      return activeItem
  }
}

function menuReducer(items, { type, payload }) {
  //
  switch (type) {
    case actionType.SET_ITEMS:
      return payload

    default:
      return items
  }
}


export default reducer;
