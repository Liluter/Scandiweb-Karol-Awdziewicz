/* eslint-disable import/no-anonymous-default-export */
import { ADD_TODO, TOGGLE_CURRENCY, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  // allIds: [],
  // byIds: {},
  currentCurrency: '$',
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
