import React, { useState } from "react";

import { TodoType } from "./types";

interface PropsType {
  todos: TodoType[];
  createTodo: (toodTitle: string) => void;
}

const TodoCreateInput: React.FunctionComponent<PropsType> = props => {
  const [todoTitle, setTodoTitle] = useState<string>("");

  const handleKeyPress: React.KeyboardEventHandler = async event => {
    if (todoTitle && event.key === "Enter") {
      props.createTodo(todoTitle);
      setTodoTitle("");
    }
  };

  return (
    <div className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={todoTitle}
        onChange={event => setTodoTitle(event.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default TodoCreateInput;
