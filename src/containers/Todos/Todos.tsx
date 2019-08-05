import "todomvc-app-css/index.css";

import React, { useRef, useState } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

const Todos: React.FunctionComponent = () => {
  const refTodoCounter = useRef<number>(0);

  const [filter, setFilter] = useState<"ALL" | "ACTIVE" | "COMPLETED">("ALL");
  const [todos, setTodos] = useState<TodoType[]>([]);

  const deleteCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const createTodo = (todoTitle: string) => {
    const todo = {
      id: ++refTodoCounter.current,
      completed: false,
      title: todoTitle
    };
    setTodos([...todos, todo]);
    setFilter("ALL");
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

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case "ALL":
        return true;
      case "ACTIVE":
        return todo.completed === false;
      case "COMPLETED":
        return todo.completed === true;
    }
  });

  return (
    <div>
      <TodoInput todos={todos} createTodo={createTodo} />
      <TodoList
        todos={filteredTodos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
      <TodoFilter
        todos={todos}
        filter={filter}
        setFilter={setFilter}
        deleteCompletedTodos={deleteCompletedTodos}
      />
    </div>
  );
};

export default Todos;
