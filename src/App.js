// 라이브러리
import React from 'react';
import styled from 'styled-components';
// Hook
import { useSelector, useDispatch } from 'react-redux';
// Action Creator
import { addFlower } from './redux/moduels/flower';
// component
import './App.css';
import TodoListContainer from './components/TodoListContainer';
import AddForm from './components/AddForm';
import { Route, Routes } from 'react-router-dom';
import TodoDetail from './components/TodoDetail';



function App() {
  const dispatch = useDispatch();

  const flower = useSelector((state)=>state.flower.flower);
  // console.log(flower);

  const { todos } = useSelector((state) => state.todos)
  // console.log(todos)
  return (
    <>
    <Routes>
      <Route path='/' element={
          <StContainer>
          <Nav>
            <div style={{ fontWeight: "bold" }}>My Todo List {flower}</div>
            <div>
              <button onClick={()=>{
                dispatch(addFlower())}}
              >🌼</button>
            </div>
          </Nav>
          <AddForm/>
          <TodoListContainer/>
        </StContainer>
      }></Route>
      <Route path='/:id' element={<TodoDetail todos={todos}/>}></Route>
    </Routes>
    </>
  )
}

export default App;


const StContainer = styled.section`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;

  border-radius: 3px;

`

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  font-size: 1em;
  
  border-radius: 5px;
  border: solid 1px lightgray;

  height: 30px;
  padding: 10px;
`