import { ADD_TODO, TOGGLE_TODO, TOGGLE_CURRENCY , SET_FILTER, ADD_TO_CART, ADD_TO_CART_ITEM} from "./actionTypes";

let nextTodoId = 0
// let nextCartId = 0
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

// change actual currency sign
export const toggleCurrency = currency => ({
  type: TOGGLE_CURRENCY,
  payload: {currency}
});

export const addToCart = (content) => ({
  type: ADD_TO_CART,
  payload: {
    content,
  }
})
export const addToCartItem = count => ({
  type: ADD_TO_CART_ITEM,
  payload: {
    count,
  }
})


export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
