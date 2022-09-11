import { REMOVE_FROME_CART, 
  TOGGLE_CURRENCY ,
  REFRESH , 
  ADD_TO_CART, 
  CHANGE_CART_ITEM_PCS} from "./actionTypes";
let nextCartItem = 0

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