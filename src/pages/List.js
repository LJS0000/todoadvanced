import '../App.css'
import styled from 'styled-components';

let Box = styled.div`
    background-color: rgb(245, 245, 245);
  
    width: 300px;
    min-height: 200px;
  
    padding: 5px 24px 24px 24px;
  
    border-radius: 10px;
  
    box-shadow: 3px 3px rgb(187, 187, 187);
`


let Todobtn =  styled.button`
  background : white; 
  padding : 10px 20px 10px 20px;
  margin : 10px;

  border: 3px solid ${props => props.color};
  border-radius: 3px;
`

function List(props) {
    return (
    <div>
        <h1>Working</h1>
        <Box>
            <a href='/1'>상세보기</a>
            <h2>투두리스트 만들기</h2>
            <p>어렵다 어려워</p>
        
            <Todobtn color='red'>삭제</Todobtn>
            <Todobtn color='green'>완료</Todobtn>
        </Box>
    </div>
    )
}

export default List