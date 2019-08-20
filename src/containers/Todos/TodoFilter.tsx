import React from "react";

import { TodoType, TodoFilterType } from "./types";

interface PropsType {
  todos: TodoType[];
  filter: TodoFilterType;
  deleteCompletedTodos: () => void;
  setFilter: (filter: TodoFilterType) => void;
}

const TodoFilter: React.FunctionComponent<PropsType> = props => {
  const completedTodos = props.todos.filter(todo => todo.completed);

  return props.todos.length ? (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {completedTodos.length}
          <> / </>
          {props.todos.length}
        </strong>
      </span>
      <ul className="filters">
        <li>
          <a
            className={props.filter === "ALL" ? "selected" : undefined}
            style={{ cursor: "pointer" }}
            onClick={() => props.setFilter("ALL")}
          >
            All
          </a>
        </li>
        <span> </span>
        <li>
          <a
            className={props.filter === "ACTIVE" ? "selected" : undefined}
            style={{ cursor: "pointer" }}
            onClick={() => props.setFilter("ACTIVE")}
          >
            Active
          </a>
        </li>
        <span> </span>
        <li>
          <a
            className={props.filter === "COMPLETED" ? "selected" : undefined}
            style={{ cursor: "pointer" }}
            onClick={() => props.setFilter("COMPLETED")}
          >
            Completed
          </a>
        </li>
      </ul>
      {Boolean(completedTodos.length) && (
        <button
          className="clear-completed"
          onClick={() => props.deleteCompletedTodos()}
        >
          Clear completed
        </button>
      )}
    </footer>
  ) : null;
};

export default TodoFilter;
