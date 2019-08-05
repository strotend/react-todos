import React from "react";

import TodoListItem from "./TodoListItem";

interface PropsType {
  todos: TodoType[];
  filterBy: "ALL" | "ACTIVE" | "COMPLETED";
  toggleTodosCompleted: () => void;
  updateTodo: (todoId: number, todoProperties: Partial<TodoType>) => void;
  deleteTodo: (todoId: number) => void;
}

const TodoList: React.FunctionComponent<PropsType> = props => {
  const filterVisibleTodo = (todo: TodoType) => {
    switch (props.filterBy) {
      case "ALL":
        return true;
      case "ACTIVE":
        return todo.completed === false;
      case "COMPLETED":
        return todo.completed === true;
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
            update={todoProperties => props.updateTodo(todo.id, todoProperties)}
            delete={() => props.deleteTodo(todo.id)}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
