// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = " DELETE_TODO";
const TOGGLE_TODO = " TOGGLE_TODO";
const GET_TODO = " GET_TODD";

// initial State
const initialState = {
  todos: [
    {
      id: 1, 
      title: "꽃 심기",
      body: "꽃을 심자",
      isDone: false
    },
    {
      id: 2, 
      title: "리액트 공부하기",
      body: "으려워",
      isDone: false
    }
  ]
};

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  console.log('지울 것', payload)
  return { type: DELETE_TODO, payload };
};

export const toggleStatusTodo = (payload) => {
  return { type: TOGGLE_TODO, payload };
};

export const getTodoById = (payload) => {
  return { type: GET_TODO, payload };
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
    };

    case DELETE_TODO: 
      return {}
     



    default:
      return state;
  }
};

export default todos;
