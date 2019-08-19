import "./TodoListItem.css";

import React, { useState } from "react";

import { TodoType } from "./types";

interface PropsType {
  todo: TodoType;
  deleteTodo: (todoId: number) => void;
  updateTodo: (todoId: number, todoProperties: Partial<TodoType>) => void;
}

const TodoListItem: React.FunctionComponent<PropsType> = props => {
  const [editing, setEditing] = useState<boolean>(false);
  const [todoTitle, setTodoTitle] = useState<string>(props.todo.title);

  const updateTodoTitle = () => {
    if (todoTitle) {
      props.updateTodo(props.todo.id, { title: todoTitle });
    } else {
      setTodoTitle(props.todo.title);
    }
  };

  const handleChangeCompletedCheckbox: React.ChangeEventHandler<
    HTMLInputElement
  > = event => {
    if (event.target.checked) {
      props.updateTodo(
        props.todo.id,
        props.todo.starred
          ? { completed: true, starred: false }
          : { completed: true }
      );
    } else {
      props.updateTodo(props.todo.id, { completed: false });
    }
  };

  const handleDoubleClickLabel: React.MouseEventHandler = () => {
    setEditing(true);
  };

  const handleClickDeleteButton: React.MouseEventHandler = () => {
    props.deleteTodo(props.todo.id);
  };

  const handleClickStarButton: React.MouseEventHandler = () => {
    props.updateTodo(props.todo.id, { starred: !props.todo.starred });
  };

  const handleChangeEditingInput: React.ChangeEventHandler<
    HTMLInputElement
  > = event => {
    setTodoTitle(event.target.value);
  };
  const handleBlurEditingInput: React.FocusEventHandler = () => {
    updateTodoTitle();
    setEditing(false);
  };
  const handleKeyPressEditingInput: React.KeyboardEventHandler = event => {
    if (event.key === "Enter") {
      updateTodoTitle();
      setEditing(false);
    }
  };

  const classNames = [
    props.todo.completed ? "completed" : "",
    editing ? "editing" : ""
  ];

  return (
    <li className={classNames.join(" ")}>
      <div className="view">
        <input
          className="toggle"
          style={{ height: "40px" }}
          type="checkbox"
          checked={props.todo.completed}
          onChange={handleChangeCompletedCheckbox}
        />
        <label
          style={{
            backgroundImage: props.todo.completed
              ? "url(data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E)"
              : "url(data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E)",
            backgroundSize: "40px 40px"
          }}
          onDoubleClick={handleDoubleClickLabel}
        >
          {props.todo.title}
        </label>
        {!props.todo.completed && (
          <button
            className={props.todo.starred ? "star" : "unstar"}
            onClick={handleClickStarButton}
          />
        )}
        <button
          className="destroy"
          style={{ cursor: "pointer" }}
          onClick={handleClickDeleteButton}
        />
      </div>
      {editing && (
        <input
          autoFocus
          className="edit"
          value={todoTitle}
          onBlur={handleBlurEditingInput}
          onChange={handleChangeEditingInput}
          onKeyPress={handleKeyPressEditingInput}
        />
      )}
    </li>
  );
};

export default TodoListItem;
