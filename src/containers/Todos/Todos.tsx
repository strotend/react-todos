import "./Todos.css";

import React from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

const Todos: React.FunctionComponent = () => (
  <div>
    <TodoInput />
    <TodoList />
    <TodoFilter />
  </div>
);

export default Todos;
