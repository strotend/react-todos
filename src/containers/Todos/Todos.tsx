import "todomvc-app-css/index.css";

import React, { useRef, useState } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

const Todos: React.FunctionComponent = () => {
  const refTodoCounter = useRef<number>(0);
  const [todos, setTodos] = useState<TodoType[]>([]);

  const createTodo = (todoTitle: string) => {
    const todo = {
      id: ++refTodoCounter.current,
      completed: false,
      title: todoTitle
    };
    setTodos([...todos, todo]);
  };

  const updateTodo = (
    todoId: number,
    todoProperties: Partial<TodoType> = {}
  ) => {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (0 <= todoIndex) {
      setTodos([
        ...todos.slice(0, todoIndex),
        { ...todos[todoIndex], ...todoProperties, id: todoId },
        ...todos.slice(todoIndex + 1)
      ]);
    }
  };

  const deleteTodo = (todoId: number) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  return (
    <div>
      <TodoInput todos={todos} createTodo={createTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      <TodoFilter todos={todos} />
    </div>
  );
};

export default Todos;
