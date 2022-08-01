import './App.css'

import { Route, Routes, Link } from "react-router-dom";

import Detail from './pages/Detail';
import List from './pages/List';
import Input from './pages/Input';

function App() {

  return (
    <div className='App'>
      
      <Routes>
          <Route path='/' element={
            <>
              <Input/>
              <List/>
            </>
          }/>
          <Route path='/1' element={<Detail/>} />
      </Routes>
      </div>
    
  );
}

export default App;
