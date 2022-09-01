import { ADD_TODO, TOGGLE_TODO, TOGGLE_CURRENCY , SET_FILTER} from "./actionTypes";

let nextTodoId = 0
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


export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
