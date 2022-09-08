// import { VISIBILITY_FILTERS } from "../constants";
import { currencyNumber } from "../utils/currencyNumber";

export const getTodosState = store => store.shop;

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

// export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
//   const allTodos = getTodos(store);
//   switch (visibilityFilter) {
//     case VISIBILITY_FILTERS.COMPLETED:
//       return allTodos.filter(todo => todo.completed);
//     case VISIBILITY_FILTERS.INCOMPLETE:
//       return allTodos.filter(todo => !todo.completed);
//     case VISIBILITY_FILTERS.ALL:
//     default:
//       return allTodos;
//   }
// };
export const getCart = store => store.shop.ItemsByIds ;

export const getCartItemNumber = store => ( Object.keys(getCart(store)).length > 0 ? Object.entries(store.shop.ItemsByIds).map((e,i)=> e[1].count  ).reduce((p,c)=> (p + c) ) : 0 )
// export const getCartItemNumber = store => Object.keys(store.shop.ItemsByIds).length;

export const getCurrentCurrency = store => store.shop.currentCurrency;

export const getCurrentPrices = store => Object.entries(store.shop.ItemsByIds).map((e,i)=> e[1].product.prices[getCurrNumber(store)].amount * e[1].count  ) ;
export const getCurrNumber = store => currencyNumber(store.shop.currentCurrency) ;
export const getTotalAmount = store =>  ( Object.keys(getCart(store)).length > 0 ? getCurrentPrices(store).reduce((p,c)=> (p + c) ).toFixed(2) : 0 );
export const getTaxAmount = store => (( Object.keys(getCart(store)).length > 0 ?  getCurrentPrices(store).reduce((p,c)=> (p + c)) : 0 )*0.21).toFixed(2);
// export const getCartItemNumber = store => store.shop.cart.length;

// export const getCart = store => store.shop.cart;
