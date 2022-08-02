import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/moduels/todos";
import styled from "styled-components";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  // console.log(todos)
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === '' || body ==='') return; 
    dispatch(
      addTodo({
        id: Math.floor(Math.random() * 101),
        title,
        body,
        isDone: false,
      })
    );
    setTitle('');
    setBody('');

  };


  return (
    <StFormContainer>
      <form onSubmit={onSubmitHandler}>
        <StInput
          id="input"
          placeholder="제목"
          type="text"
          value={title}
          input
          onChange={(e)=>{setTitle(e.target.value)}}
        />
         <StInput
          placeholder="내용"
          type="text"
          value={body}
          onChange={(e)=>{setBody(e.target.value)}}
        />
        <StButton>추가하기</StButton>
      </form>
    </StFormContainer>
  );
};

export default AddForm;

const StFormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  margin: 20px auto;
`;

const StButton = styled.button`
  border: none;
  background-color: transparent;
  height: 44px;
  cursor: pointer;
  width: 120px;
  border: solid 2px gray;
  border-radius: 5px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 40px;
  width: 200px;
  border: solid 2px gray;
  border-radius: 5px;
  padding: 0 10px;
`;
