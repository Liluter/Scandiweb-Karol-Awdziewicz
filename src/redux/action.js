import { TOGGLE_TODO, TOGGLE_CURRENCY , SET_FILTER, ADD_TO_CART, CHANGE_CART_ITEM_PCS} from "./actionTypes";
// import { nanoid } from '@reduxjs/toolkit'
// let nextTodoId = 0
let nextCartItem = 0
// let nextCartId = 0
// export const addTodo = (content) => ({
//   type: ADD_TODO,
//   payload: {
//     id: ++nextTodoId,
//     content,
//   },
// })

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

// change actual currency sign
export const toggleCurrency = currency => ({
  type: TOGGLE_CURRENCY,
  payload: {currency}
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: {
    id: ++nextCartItem,
    // idKey: nanoid(),
    product,
  }
})
//good
// export const addToCartItem = (count) => ({
//   type: ADD_TO_CART_ITEM,
//   payload: {
//     count
//   }
// })

//test
export const addToCartItem = (id, amount) => ({
  type: CHANGE_CART_ITEM_PCS,
  payload: { id , amount}
})



export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
