import React from "react";

const TodoInput: React.FunctionComponent = () => (
  <div className="header">
    <h1>todos</h1>
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      defaultValue=""
    />
  </div>
);

export default TodoInput;
