/* eslint-disable import/no-anonymous-default-export */
import {  TOGGLE_CURRENCY,
  ADD_TO_CART, 
  REMOVE_FROME_CART,
  REFRESH, 
  CHANGE_CART_ITEM_PCS} from "../actionTypes";

const initialState = {
  ItemsByIds: {},
  currentCurrency: '$',
  currentCurrencyLabel: 'USD',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const {  id, product } = action.payload;
      return {
        ...state,
        ItemsByIds: {
          ...state.ItemsByIds,
          [id]: {
            product,
            count: 1
          }
        }
      }
    }

    case  REMOVE_FROME_CART: {
      const {shop} = action.payload;
      return {
        ...shop
      }
    }

    case  REFRESH: {
      const {shop} = action.payload;
      return {
        ...shop
      }
    }

    case CHANGE_CART_ITEM_PCS: {
      const { id , amount} = action.payload;
      return {
        ...state,
        ItemsByIds: {
          ...state.ItemsByIds,
          [id]: {
            ...state.ItemsByIds[id],
            count: ( (amount === true) ? (state.ItemsByIds[id].count + 1) : (state.ItemsByIds[id].count - 1))
          }
        }
      };
    }
    
    case TOGGLE_CURRENCY: {
      const { currency , label} = action.payload;
      return {
        ...state,
      currentCurrency: currency,
      currentCurrencyLabel: label,
      
    };
  }
  default:
    return state;
  }
}