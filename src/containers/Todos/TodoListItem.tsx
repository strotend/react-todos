import React from "react";

interface PropsType {
  todo: TodoType;
  updateTodo: (id: number, todo: Partial<TodoType>) => void;
  removeTodo: (id: number) => void;
}

const TodoListItem: React.FunctionComponent<PropsType> = props => (
  <li className={props.todo.completed ? "completed" : undefined}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        onChange={event =>
          props.updateTodo(props.todo.id, { completed: event.target.checked })
        }
      />
      <label>{props.todo.title}</label>
      <button
        className="destroy"
        style={{ cursor: "pointer" }}
        onClick={() => props.removeTodo(props.todo.id)}
      />
    </div>
    <input className="edit" value={props.todo.title} readOnly />
  </li>
);

export default TodoListItem;
