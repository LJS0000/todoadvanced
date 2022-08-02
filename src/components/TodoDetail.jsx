import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getTodoById } from "../redux/moduels/todos";

const TodoDetail = () => {
  const { todos } = useSelector((state) =>(state.todos));
  const num = window.location.pathname.slice(1)
  // console.log(num)
  console.log(todos)
  return (
    <StDetail>
       {todos
       .filter((todo)=>todo.id==num)
       .map((todo) => (
        <div key={todo.id}>
          <StDetailHeader>
            <p>id: {todo.id}</p>
            <StDetailBtn >이전으로</StDetailBtn>
          </StDetailHeader>
          <h2>{todo.title}</h2>  
          <p>{todo.body}</p>
        </div>
      ))} 
    </StDetail>
  );
};

export default TodoDetail;

const StDetail = styled.div`
width: 400px;
height: 250px;

position:absolute;
left:50%;
top:50%;
margin-left:-200px;
margin-top:-125px;

border: solid 1px grey;
border-radius: 5px;

padding: 30px;
`

const StDetailHeader = styled.div`
display: flex;
max-height: 30px;
align-items: center;
justify-content: space-between;
`

const StDetailBtn = styled.button`
background-color: white;
border: 1px solid;
border-radius: 10px;
`