import React, { useRef } from "react";

interface PropsType {
  todos: TodoType[];
  createTodo: (todoTitle: string) => void;
}

const TodoInput: React.FunctionComponent<PropsType> = props => {
  const refInput = useRef<HTMLInputElement>(null);

  const handleKeyPress: React.KeyboardEventHandler = event => {
    if (refInput.current instanceof HTMLElement) {
      if (event.key === "Enter") {
        const todoTitle = refInput.current.value;
        props.createTodo(todoTitle);
        refInput.current.value = "";
      }
    }
  };

  return (
    <div className="header">
      <h1>todos</h1>
      <input
        ref={refInput}
        className="new-todo"
        placeholder="What needs to be done?"
        defaultValue=""
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default TodoInput;
