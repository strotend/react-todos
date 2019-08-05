import React from "react";

interface PropsType {
  todo: TodoType;
  update: (todoProperties: Partial<TodoType>) => void;
  delete: () => void;
}

const TodoListItem: React.FunctionComponent<PropsType> = props => (
  <li className={props.todo.completed ? "completed" : undefined}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        onChange={event => props.update({ completed: event.target.checked })}
      />
      <label>{props.todo.title}</label>
      <button
        className="destroy"
        style={{ cursor: "pointer" }}
        onClick={() => props.delete()}
      />
    </div>
    <input className="edit" value={props.todo.title} readOnly />
  </li>
);

export default TodoListItem;
