const actionType = {
  //
  SET_ACTIVE_ITEM: 'menu.setActiveItem',
  SET_ITEMS: 'menu.setItems',

};

const initialState = {
  //
  activeItem: null,

  items: process.env.NODE_ENV === 'production' ? [] : [
    { name: 'AdminMenu1', text: 'AdminMenu1',  role: 'Admin',  link: '/ms1/menus/AdminMenu1', },
    { name: 'AdminMenu2', text: 'AdminMenu2', role: 'Admin',  link: '/ms1/menus/AdminMenu2', },

    { name: 'UserMenu1',  text: 'UserMenu1',    role: 'User',  link: '/ms1/menus/UserMenu1', },
    { name: 'UserMenu2',   text: 'UserMenu2',     role: 'User',  link: '/ms1/menus/UserMenu2', },
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
export { actionType };
