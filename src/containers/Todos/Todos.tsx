import "todomvc-app-css/index.css";

import React, { useState, useEffect } from "react";

import TodoCreateInput from "./TodoCreateInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

const Todos: React.FunctionComponent = () => {
  const [filter, setFilter] = useState<"ALL" | "ACTIVE" | "COMPLETED">("ALL");
  const [todosCount, setTodosCount] = useState<number>(0);
  const [todos, setTodos] = useState<TodoType[]>([]);

  const deleteCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };
  const toggleTodosCompleted = async () => {
    const completed = !todos.every(todo => todo.completed);
    setTodos(todos.map(todo => ({ ...todo, completed })));
  };

  const createTodo = (todoTitle: string) => {
    const todo = { id: todosCount + 1, title: todoTitle, completed: false };
    setTodosCount(todosCount + 1);
    setTodos([...todos, todo]);
  };
  const deleteTodo = (todoId: number) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };
  const updateTodo = (todoId: number, todoProperties: Partial<TodoType>) => {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (0 <= todoIndex) {
      setTodos([
        ...todos.slice(0, todoIndex),
        { ...todos[todoIndex], ...todoProperties, id: todoId },
        ...todos.slice(todoIndex + 1)
      ]);
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <TodoCreateInput todos={todos} createTodo={createTodo} />
      <TodoList
        filter={filter}
        todos={todos}
        toggleTodosCompleted={toggleTodosCompleted}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
      <TodoFilter
        todos={todos}
        filter={filter}
        deleteCompletedTodos={deleteCompletedTodos}
        setFilter={setFilter}
      />
    </div>
  );
};

export default Todos;
