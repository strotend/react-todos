import React, { useState } from "react";
import { fetchCreateTodo } from "./api";

interface PropsType {
  todos: TodoType[];
  onCreate: () => void;
}

const TodoCreateInput: React.FunctionComponent<PropsType> = props => {
  const [todoTitle, setTodoTitle] = useState<string>("");

  const createTodo = async () => {
    if (todoTitle) {
      await fetchCreateTodo(todoTitle);
      props.onCreate();
      setTodoTitle("");
    }
  };

  const handleKeyPress: React.KeyboardEventHandler = async event => {
    if (event.key === "Enter") {
      createTodo();
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
