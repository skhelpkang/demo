import actionType from '../reducer/menuActionType';

const {
  SET_ACTIVE_ITEM,
  SET_ITEMS,
} = actionType


//
function selectMenu(menuItemName) {
  return {
    type: SET_ACTIVE_ITEM,
    payload: menuItemName,
  }
}

function setMenu(menus) {
  return {
    type: SET_ITEMS,
    payload: menus,
  }
}

export default {
  selectMenu, setMenu
}
