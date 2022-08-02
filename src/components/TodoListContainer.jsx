import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, toggleStatusTodo } from "../redux/moduels/todos";

const TodoListContainer = (props) => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();


  // console.log(todos)

  return (
    <>
      <h1>Working</h1>
      <StTodos>
          {todos
          .filter((todo)=>todo.isDone===false)
          .map((todo) => ( 
            <StTodo key={todo.id}>
              <a href={todo.id}>상세보기</a> 
              <h2>{todo.title}</h2>  
              <p>{todo.body}</p>
              <StBtn color="mistyrose" 
                onClick={()=>{
                  dispatch(deleteTodo(todo.id));
                }}
              > 삭제 </StBtn>
              <StBtn color="lightcyan" 
                onClick={()=>{
                 dispatch(toggleStatusTodo(todo.id));
                }}
              > 
              완료</StBtn>
            </StTodo>
          ))} 
      </StTodos>

      <h1>Done</h1>
      <StTodos>
          {todos
          .filter((todo)=>todo.isDone===true)
          .map((todo) => ( 
            <StTodo key={todo.id}>
              <a href={todo.id}>상세보기</a>
              <h2>{todo.title}</h2>  
              <p>{todo.body}</p>
              <StBtn color="mistyrose" onClick={()=>{
                dispatch(deleteTodo(todo.id));
              }}> 삭제 </StBtn>
              <StBtn color="lightcyan">
              취소</StBtn>
            </StTodo>
          ))} 
      </StTodos>
    </>
  );
};

export default TodoListContainer;



const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const StTodo = styled.div`
  background-color: wheat;
  min-width: 25%;
  min-height: 200px;
  padding: 0 24px;
  border-radius: 3px;
  box-shadow: 3px 3px;
  padding-top: 10px;
`;

const StBtn = styled.button`
  width: 120px;
  padding: 10px;
  margin: 5px 0px 0px 20px;
  border: 2px solid white;
  border-radius: 10px;
  background-color: ${props=>props.color};
`;


// {todos
//   .filter((todo) => !todo.isDone)
//   .map((todo) => {
//     return (
//       <div className="todo" key={todo.id}>
//         <h2>{todo.title}</h2>
//         <h4>{todo.body}</h4>
//         <div className="buttons">
//           <button className="todo-delete-button button"
//             onClick={()=>
//               setTodos((prev)=>
//               prev.filter((prev)=>prev.id!==todo.id))}> 
//             삭제
//           </button>

//           <button
//             className="todo-complete-button button"
//             onClick={()=>
//               setTodos((prevs)=>
//               prevs.map((prev)=> {
//                 if (prev.id === todo.id) {
//                   return {...prev, isDone: true}
//                 }
//                 return prev;
//               })
//             )}
//           >
//             완료
//           </button>
//         </div>
//       </div>
//               )
//   })}