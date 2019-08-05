import React from "react";

interface PropsType {
  todos: TodoType[];
  filter: "ALL" | "ACTIVE" | "COMPLETED";
  setFilter: (filter: "ALL" | "ACTIVE" | "COMPLETED") => void;
}

const TodoFilter: React.FunctionComponent<PropsType> = props =>
  props.todos.length ? (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.todos.length}</strong>
        <span> </span>
        <span>items</span>
        <span> left</span>
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
    </footer>
  ) : null;

export default TodoFilter;
