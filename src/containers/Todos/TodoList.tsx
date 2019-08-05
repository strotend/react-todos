import React from "react";

import TodoListItem from "./TodoListItem";

interface PropsType {
  todos: TodoType[];
  filter: "ALL" | "ACTIVE" | "COMPLETED";
  getTodos: () => void;
  toggleTodosCompleted: () => void;
}

const TodoList: React.FunctionComponent<PropsType> = props => {
  const filterVisibleTodo = (todo: TodoType) => {
    switch (props.filter) {
      case "ALL":
        return true;
      case "ACTIVE":
        return !todo.completed;
      case "COMPLETED":
        return todo.completed;
    }
  };

  const visibleTodos = props.todos.filter(filterVisibleTodo);

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={
          Boolean(props.todos.length) &&
          props.todos.every(todo => todo.completed)
        }
        readOnly
      />
      <label onClick={() => props.toggleTodosCompleted()} />
      <ul className="todo-list">
        {visibleTodos.map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onDelete={props.getTodos}
            onUpdate={props.getTodos}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
