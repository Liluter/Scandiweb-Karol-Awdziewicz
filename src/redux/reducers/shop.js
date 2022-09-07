/* eslint-disable import/no-anonymous-default-export */
import { ADD_TODO, TOGGLE_CURRENCY, TOGGLE_TODO ,ADD_TO_CART, CHANGE_CART_ITEM_PCS} from "../actionTypes";

const initialState = {
  // allIds: [],
  ItemsByIds: {},
  currentCurrency: '$',
  // cart: [],
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
      //test good ok
      case ADD_TO_CART: {
        const {  id, idKey, product } = action.payload;
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
      //good old
      // case ADD_TO_CART: {
      //   const {  idKey, content } = action.payload;
      //   return {
      //     ...state,
      //     cart : [...state.cart, {...content, idKey}],
      //   }
      // }

      // good
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
      
      // // good
      // case CHANGE_CART_ITEM_PCS: {
      //   const { id } = action.payload;
      //   return {
      //     ...state,
      //     ItemsByIds: {
      //       ...state.ItemsByIds,
      //       [id]: {
      //         ...state.ItemsByIds[id],
      //         count: state.ItemsByIds[id].count + 1
      //       }
      //     }
      //   };
      // }
      


      // //good
      // case ADD_TO_CART_ITEM: {
      //   const  {count } = action.payload;
      //   return {
      //     ...state,
      //     counter: count
      //   }
      // }

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
