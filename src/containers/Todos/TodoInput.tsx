import React, { useRef } from "react";

interface PropsType {
  todos: TodoType[];
  addTodo: (title: string) => void;
}

const TodoInput: React.FunctionComponent<PropsType> = props => {
  const refInput = useRef<HTMLInputElement>(null);

  const handleKeyDown: React.KeyboardEventHandler = event => {
    if (refInput.current instanceof HTMLElement) {
      if (event.key === "Enter") {
        const title = refInput.current.value;
        refInput.current.value = "";
        props.addTodo(title);
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
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default TodoInput;
