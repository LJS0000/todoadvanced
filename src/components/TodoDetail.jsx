import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TodoDetail = () => {
  const { todos } = useSelector((state) =>(state.todos));

  console.log(todos)
  
  return (
    <div>
       {todos.map((todo) => (
        <div key={todo.id}>
          <p>id: {todo.id}</p>
          <h2>{todo.title}</h2>  
          <p>{todo.body}</p>
        </div>
      ))} 
    </div>
  );
};

export default TodoDetail;

