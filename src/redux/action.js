import { REMOVE_FROME_CART, TOGGLE_CURRENCY ,REFRESH, SET_FILTER, ADD_TO_CART, CHANGE_CART_ITEM_PCS} from "./actionTypes";
// import { nanoid } from '@reduxjs/toolkit'
// let nextTodoId = 0
let nextCartItem = 0

// export const toggleTodo = id => ({
//   type: TOGGLE_TODO,
//   payload: { id }
// });

// change actual currency sign
export const toggleCurrency = (currency, label) => ({
  type: TOGGLE_CURRENCY,
  payload: {currency, label}
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: {
    id: ++nextCartItem,
    product,
  }
})

export const addToCartItem = (id, amount) => ({
  type: CHANGE_CART_ITEM_PCS,
  payload: { id , amount}
})
export const removeFromCart = (shop) => ({
  type: REMOVE_FROME_CART,
  payload: {
    shop
  }
})
export const refreshPage = (shop) => ({
  type: REFRESH,
  payload: {
    shop
  }
})


export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
