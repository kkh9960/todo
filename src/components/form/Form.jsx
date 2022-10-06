import React, { useState } from "react";
import "./style.css";

function Form({ todoList, setTodoList }) {
  //props로 받아야겠지만, 구조분해 할당을 사용해 todo와 setTodo로 나눔
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
    // default value 써준대로
  };

  const [todo, setTodo] = useState(initialState);
  // const todo = {odj} 는 initialState 초기값이라고 지정
  // 그러나 바꾸고싶기 때문에 useState 사용
  const onChangeHandler = (event) => {  //이벤트 핸들러로 실행
    const { name, value } = event.target; // 변경된 Todo(지금은 initialState)
    // 에 넣어줄 값은 = 이벤트가 일어난 onCh fn의 name과 value를 넣어줌
    setTodo({ ...todo, [name]: value });
    // 새로 붙일 Todo는 전개구문 사용해 새로 붙이는데 todo에서
    // name을 키값으로 넣어주고 : value를 넣어준다.
    // 첫번째 핸들러를 예시로 보면 name안에 "title"이 들어가있는데
    // 위에 todo의 property에는 name이 없으니까 []를 써서 넣어준다.

  };
  function onSubmitHandler(event) {
    //작성 이벤트 핸들러
    event.preventDefault();
    // // 이벤트를 명시적으로 시행하지 않으면 실행하지 않도록 지정
    if (todo.title.trim() === "" || todo.body.trim() === "") return alert("제목과 내용 모두 입력하세요!");
    // todo에 타이틀과 바디에 띄어쓰기 빼고 아무것도 없으면 리턴해라
    setTodoList([...todoList, { ...todo, id: todoId }]);
    // todoList에 전개구문써서 붙여준다. TodoList랑, 아이디 번호
    setTodo(initialState); // 빈칸 초기화
    // todo에는 기본구문 써 넣어준다.
    };
    let todoId = todoList.length ? todoList[todoList.length-1].id + 1 : 0
    // id값을 추가해야 하는데 todoList는 배열이니까 배열의 인덱스는
    // 0부터시작하니까 길이에서 1을 빼줘야 지금까지 있는 배열의 마지막
    // 인덱스가 나오게 되고 그 인덱스의 id값에서 1을 더해주면 된다.


  return (
    <form className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          className="add-input input-body"
          value={todo.title} //todo.title을 밸류에 넣어준다. 
          // todo.title 값을 아직 입력하지 않아 기본값에 ""가 입력
          onChange={onChangeHandler} // input에 값이 들어오면 onCh fn 실행
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          className="add-input"
          onChange={onChangeHandler}
        />
      </div>
      <button className="add-button" onClick={onSubmitHandler}>추가하기</button>
    </form>
  );
}

export default Form;
