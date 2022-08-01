import '../App.css'
import { useState } from 'react';
import styled from 'styled-components';

function Input() {

    const [title, setTitle] = useState();
    const [body, setBody] = useState();

  return (
    <>
      <div className="nav">
        <div style={{ fontWeight: "bold" }}>My Todo List</div>
        <div>Lee Jisu</div>
      </div>
      <div>
        <input
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <input
          onChange={(e) => {
            setBody(e.target.value)
          }}
        />
        <button>등록하기</button>
      </div>
    </>
  )
}

export default Input