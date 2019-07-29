import "todomvc-app-css/index.css";

import React, { useRef, useState } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

const Todos: React.FunctionComponent = () => {
  const refTodoCounter = useRef<number>(0);
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (title: string) => {
    const todo = {
      id: ++refTodoCounter.current,
      completed: false,
      title
    };
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <TodoInput todos={todos} addTodo={addTodo} />
      <TodoList todos={todos} />
      <TodoFilter todos={todos} />
    </div>
  );
};

export default Todos;
