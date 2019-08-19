import "todomvc-app-css/index.css";

import React, { useState, useEffect, useMemo } from "react";

import { TodoFilterType, TodoType, TodosStateType } from "./types";
import TodoCreateInput from "./TodoCreateInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

const TODOS_STATE_KEY = "todos-app/todosState";
const initialTodosState: TodosStateType = { todosCount: 0, todos: [] };
const loadTodosState = (): TodosStateType => {
  try {
    const todosState = localStorage.getItem(TODOS_STATE_KEY);
    return todosState ? JSON.parse(todosState) : initialTodosState;
  } catch {
    return initialTodosState;
  }
};
const saveTodosState = (todosState: TodosStateType): void => {
  try {
    localStorage.setItem(TODOS_STATE_KEY, JSON.stringify(todosState));
  } catch {}
};

const Todos: React.FunctionComponent = () => {
  const [filter, setFilter] = useState<TodoFilterType>("ALL");

  const todosState = useMemo(loadTodosState, []);
  const [todosCount, setTodosCount] = useState<number>(todosState.todosCount);
  const [todos, setTodos] = useState<TodoType[]>(todosState.todos);

  const deleteCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };
  const toggleTodosCompleted = async () => {
    const completed = !todos.every(todo => todo.completed);
    setTodos(todos.map(todo => ({ ...todo, completed })));
  };

  const createTodo = (todoTitle: string) => {
    const todo = {
      id: todosCount + 1,
      title: todoTitle,
      completed: false,
      stared: false
    };
    setTodosCount(todosCount + 1);
    setTodos([...todos, todo]);
  };
  const deleteTodo = (todoId: number) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };
  const updateTodo = (todoId: number, todoProperties: Partial<TodoType>) => {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (0 <= todoIndex) {
      const todo = todos[todoIndex];
      if (todoProperties.hasOwnProperty("stared")) {
        setTodos(
          [
            { ...todo, ...todoProperties, id: todoId },
            ...todos.slice(0, todoIndex),
            ...todos.slice(todoIndex + 1)
          ].sort((todoA, todoB) => Number(todoB.stared) - Number(todoA.stared))
        );
      } else {
        setTodos([
          ...todos.slice(0, todoIndex),
          { ...todo, ...todoProperties, id: todoId },
          ...todos.slice(todoIndex + 1)
        ]);
      }
    }
  };

  useEffect(() => {
    const todosState = { todosCount, todos };
    saveTodosState(todosState);
  }, [todosCount, todos]);

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
