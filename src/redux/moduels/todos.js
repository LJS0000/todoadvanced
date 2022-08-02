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
      isDone: true,
    }
  ]
};

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (id) => {

  return { type: DELETE_TODO, id };
};

export const toggleStatusTodo = (isDone) => {
  
  return { type: TOGGLE_TODO, isDone };
};

export const getTodoById = (id) => {
  
  return { type: GET_TODO, id };
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
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id)
      };
    
    case TOGGLE_TODO: 
      // console.log(action.isDone.isDone)
      const newtodo = action.isDone.isDone === false ? action.isDone.isDone = true : action.isDone.isDone = false;
      return { 
        todos: [...state.todos]
      };

    case GET_TODO: 
      return {
        ...state,
        todos: [...state.todos, action.id]
      };
        
    
      

      
    



    default:
      return state;
  }
};

export default todos;
