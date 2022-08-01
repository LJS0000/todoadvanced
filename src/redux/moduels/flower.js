import { type } from "@testing-library/user-event/dist/type";

// 액션 value를 상수들로 만들어 줍니다.
const ADD_FLOWER = 'ADD_FLOWER';

// Action Creator를 만들어 줍니다.
export const addFlower = () => {
  return {
    type: ADD_FLOWER,
  }
}

// 초기 상태값
const initialState = {
    flower: '',
};
  
// 리듀서
const flower = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case ADD_FLOWER:  // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다. 
      return {
        flower: state.flower + '🌼'
      }
    default:
      return state;
  }
};
  
// 모듈파일에서는 리듀서를 export default 한다.
export default flower;