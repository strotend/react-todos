import { useState } from "react";

import {
  requestGetTodos,
  requestDeleteCompletedTodos,
  requestToggleTodosCompleted
} from "./api";

const useTodosStore = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  return {
    todos,
    getTodos: async () => {
      const todos = await requestGetTodos();
      setTodos(todos);
    },
    deleteCompletedTodos: async () => {
      const todos = await requestDeleteCompletedTodos();
      setTodos(todos);
    },
    toggleTodosCompleted: async () => {
      const todos = await requestToggleTodosCompleted();
      setTodos(todos);
    }
  };
};

export default useTodosStore;
