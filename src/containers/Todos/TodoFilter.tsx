import React from "react";

interface PropsType {
  todos: TodoType[];
}

const TodoFilter: React.FunctionComponent<PropsType> = props => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{props.todos.length}</strong>
      <span> </span>
      <span>items</span>
      <span> left</span>
    </span>
    <ul className="filters">
      <li>
        <a href="/" className="selected">
          All
        </a>
      </li>
      <span> </span>
      <li>
        <a href="/active" className="">
          Active
        </a>
      </li>
      <span> </span>
      <li>
        <a href="/completed" className="">
          Completed
        </a>
      </li>
    </ul>
  </footer>
);

export default TodoFilter;
