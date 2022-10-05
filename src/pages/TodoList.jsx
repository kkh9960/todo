import React, { useState } from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";

function TodoList() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
    {
      id: 2,
      title: "리액트2 공부하기",
      body: "리액트 심화를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 3,
      title: "리액트3 공부하기",
      body: "리액트와 가상DOM을 공부해봅시다.",
      isDone: false,
    },
  ]);
  // const todoList = {odj}라고 선언한 것을 바꾸기위해서는 state 사용

  return (
    <Layout> 
      <Header/>
      <Form todoList={todoList} setTodoList = {setTodoList}/>
      <List todoList={todoList} setTodoList = {setTodoList}/>
    </Layout>
    // <Layout>
    // props.children을 사용해서 Layout사이에 있는 값을 모두 넘겨줌
    // </Layout>
  );
};

export default TodoList;
