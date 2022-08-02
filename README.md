# React Redux를 활용한 To Do List 만들기

### 컴포넌트 구조 > 기능과 뷰를 기준으로 분류 <br>

## TODOADVANCED  
### SRC <br>
#### components  
--- AddForm.jsx             
--- TodoDetail.jsx <br>
--- TodoListContainer.jsx<br>

#### redux
config<br>
---configStore.js

#### moduels<br>
--- flower.js<br>
--- todos.js

### App.js
### index.js

✅ 뷰에서 영역별로 컴포넌트 분류<br>
![todo](https://user-images.githubusercontent.com/108878872/182343003-b051d75b-81dd-4d13-a8b5-117167b0b4cc.png)<br>

✅ 모듈은 기능별로 분류<br>
1. flower<br>
상단에 꽃 이모지를 누를 때마다 헤더에 하나씩 추가<br>
2. todos<br>
투두리스트에 필요한 액션크리에이터, 리듀서 등을 다 모아놓은 곳<br>
(☝ 데이터 출력에 오류가 생겼을 때 모아서 볼 수 있음 )<br>
