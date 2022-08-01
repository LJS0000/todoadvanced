import { configureStore, createSlice } from '@reduxjs/toolkit'

let todo = createSlice({
    name : 'title',
    initialState :[ 	
      {
      id: 1, 
      title: '투두리스트 만들기',
      body: '어렵다 어려워',
      isDone: false
      },
      {
      id: 2, 
      title: '리덕스 공부하기',
      body: '졸리다 졸려',
      isDone: false
      }],
      //reducers : 
  })
  
  export default configureStore({
    reducer: {
      user : todo.reducer
    }
  }) 