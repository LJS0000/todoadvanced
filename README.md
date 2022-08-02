# React Redux를 활용한 To Do List 만들기

### 컴포넌트 구조

TODOADVANCED  // 기능과 뷰를 기준으로 분류
- SRC
-- components                   
--- AddForm.jsx              
    --◽ TodoDetail.jsx
    --◽ TodoListContainer.jsx
--◻ redux
  --◾ config
    --◽ configStore.js
  --◾ moduels
    --◽ flower.js
    --◽ todos.js
⬜ App.js
⬜ index.js

✅ 뷰에서 영역별로 컴포넌트 분류
![](../todo.png)

✅ 모듈은 기능별로 분류
1. flower
상단에 꽃 이모지를 누를 때마다 헤더에 하나씩 추가
2. todos
투두리스트에 필요한 액션크리에이터, 리듀서 등을 다 모아놓은 곳
(☝ 데이터 출력에 오류가 생겼을 때 모아서 볼 수 있음 )
