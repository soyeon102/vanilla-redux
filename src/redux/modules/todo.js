import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

export const addTodo = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const initialState = [
  {
    todo: '',
    id: 0,
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
