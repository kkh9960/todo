import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ todoList, setTodoList }) {
  const Delete = (v) => {
    const deleteList = todoList.filter((todo) => {
      return todo.id !== v;
      // 새로운리스트에 넣어줌
      // v는 todo component의 todo.id임 즉 id값을 가져와서
      // todoList에서 보면 내가 가져온 해당 todo.id 값이 있을 것임
      // 그러나 return은 내가 가져온 id값이 todo에 없을때만 내보내는것
      // 하지만 내 id값은 todo에 있으므로 filter에 해당하는 값은 없음
      // 빈값을 넣어주면 삭제하는 것처럼 보인다.
    });
    setTodoList(deleteList)
  };

  const Move = (v) => {
    const moveList = todoList.map((todo) => {
      if (todo.id === v) {
        return {...todo, isDone: !todo.isDone,};
      } else {
        return { ...todo };
        // map을 써서 해당 todo component의 id값을 가져옴
        // map은 안의 값으로 새로 배열 만들기
        // 내 id값이 todoList의 todo.id와 같은게 있으면
        // 전개구문으로 그 todo의 isDone 상태를 현재 todo.isDone의 반대로
        // todo component에서 올라온값이 f or t로 바뀌면
        // list component에 return에서 조건에 갈리기 때문에
        // 출력을 바꾸게 된다.
      }
    });

    setTodoList(moveList);
  };

  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {todoList.map((todo) => {
          if (!todo.isDone) {
            // todo 각각의 isDone이 T(기본값)가 (!)아니면
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodoList={setTodoList}
                Delete={Delete}
                Move={Move}
              />
              // todo component에 위의 값을 넘겨준다.
            );
          } else {
            return null;
            // 반대의 경우(T일때) 는 넘겨 주지 않는다.
          }
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {todoList.map((todo) => {
          if (todo.isDone) {
            // todo 각각의 isDone이 T(기본값)면
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodoList={setTodoList}
                Delete={Delete}
                Move={Move}
              />
              // todo component에 위의 값을 넘겨준다.
            );
          } else {
            return null;
            // 반대일 경우(F일때) 는 넘겨 주지 않는다.
          }
        })}
      </div>
    </div>
  );
}

export default List;
