import "todomvc-app-css/index.css";

import React, { useState, useEffect } from "react";

import useTodosStore from "./useTodosStore";
import TodoCreateInput from "./TodoCreateInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

const Todos: React.FunctionComponent = () => {
  const [filter, setFilter] = useState<"ALL" | "ACTIVE" | "COMPLETED">("ALL");
  const todosStore = useTodosStore();

  useEffect(() => {
    todosStore.getTodos();
  }, []);

  return (
    <div>
      <TodoCreateInput
        todos={todosStore.todos}
        onCreate={todosStore.getTodos}
      />
      <TodoList
        filter={filter}
        todos={todosStore.todos}
        getTodos={todosStore.getTodos}
        toggleTodosCompleted={todosStore.toggleTodosCompleted}
      />
      <TodoFilter
        filter={filter}
        setFilter={setFilter}
        todos={todosStore.todos}
        deleteCompletedTodos={todosStore.deleteCompletedTodos}
      />
    </div>
  );
};

export default Todos;
