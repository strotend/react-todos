import React from "react";
import { requestUpdateTodo, requestDeleteTodo } from "./api";

interface PropsType {
  todo: TodoType;
  onDelete: () => void;
  onUpdate: () => void;
}

const TodoListItem: React.FunctionComponent<PropsType> = props => {
  const handleChangeCompleted: React.ChangeEventHandler<
    HTMLInputElement
  > = async event => {
    await requestUpdateTodo(props.todo.id, { completed: event.target.checked });
    props.onUpdate();
  };

  const handleClickDelete: React.MouseEventHandler = async event => {
    await requestDeleteTodo(props.todo.id);
    props.onDelete();
  };

  return (
    <li className={props.todo.completed ? "completed" : undefined}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.todo.completed}
          onChange={handleChangeCompleted}
        />
        <label>{props.todo.title}</label>
        <button
          className="destroy"
          style={{ cursor: "pointer" }}
          onClick={handleClickDelete}
        />
      </div>
      <input className="edit" value={props.todo.title} readOnly />
    </li>
  );
};

export default TodoListItem;
