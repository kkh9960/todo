import React from "react";
import "./style.css";

function Layout (props) {
  return <div className="layout">{props.children}</div>;
  // props.children을 사용해 받는다. TodoList.jsx의 
  // Layout 사이에 있는 값들을 넣어준다.
};

export default Layout;
