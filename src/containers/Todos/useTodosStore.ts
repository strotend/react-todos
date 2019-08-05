import { useState } from "react";

import {
  fetchGetTodos,
  fetchDeleteCompletedTodos,
  fetchToggleTodosCompleted
} from "./api";

const useTodosStore = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = async () => {
    const todos = await fetchGetTodos();
    setTodos(todos);
  };
  const deleteCompletedTodos = async () => {
    await fetchDeleteCompletedTodos();
    getTodos();
  };
  const toggleTodosCompleted = async () => {
    await fetchToggleTodosCompleted();
    getTodos();
  };

  return {
    todos,
    getTodos,
    deleteCompletedTodos,
    toggleTodosCompleted
  };
};

export default useTodosStore;
