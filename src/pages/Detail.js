import styled from 'styled-components';

let Box = styled.div`
    background-color: green;
    width: 600px;
    height: 400px;

    position:absolute;
    left:50%;
    top:50%;
    margin-left:-300px;
    margin-top:-200px;
    
`

function Detail(){
    return(
        <>
            <Box>
                <div>
                    <p>ID:1</p>
                    <button>이전으로</button>
                </div>
                <h1>투두리스트 만들기</h1>
                <p>어렵다 어려워</p>
            </Box>
        </>        
    )
}

export default Detail