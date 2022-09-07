/* eslint-disable import/no-anonymous-default-export */
import { ADD_TODO, TOGGLE_CURRENCY, TOGGLE_TODO ,ADD_TO_CART, ADD_TO_CART_ITEM} from "../actionTypes";

const initialState = {
  // allIds: [],
  // byIds: {},
  currentCurrency: '$',
  cart: [],
  counter: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    // case ADD_TODO: {
    //   const { id, content } = action.payload;
    //   return {
    //     ...state,
    //     allIds: [...state.allIds, id],
    //     byIds: {
    //       ...state.byIds,
    //       [id]: {
    //         content,
    //         completed: false
    //       }
    //     }
    //   };
    // }
      case ADD_TO_CART: {
        const {  content } = action.payload;
        return {
          ...state,
          cart : [...state.cart, content ],
        }
      }

      case ADD_TO_CART_ITEM: {
        const  {count } = action.payload;
        return {
          ...state,
          counter: count
        }
      }
    // case TOGGLE_TODO: {
    //   const { id } = action.payload;
    //   return {
    //     ...state,
    //     byIds: {
    //       ...state.byIds,
    //       [id]: {
    //         ...state.byIds[id],
    //         completed: !state.byIds[id].completed
    //       }
    //     }
    //   };
    // }
    case TOGGLE_CURRENCY: {
      const { currency } = action.payload;
      return {
        ...state,
        currentCurrency: currency
        
      };
    }
    default:
      return state;
    
  }
}
