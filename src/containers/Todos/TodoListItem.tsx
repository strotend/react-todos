import "./TodoListItem.css";

import React, { useState } from "react";

import { TodoType } from "./types";

interface PropsType {
  todo: TodoType;
  deleteTodo: (todoId: number) => void;
  updateTodo: (todoId: number, todoProperties: Partial<TodoType>) => void;
}

const TodoListItem: React.FunctionComponent<PropsType> = props => {
  const handleChangeCompleted: React.ChangeEventHandler<
    HTMLInputElement
  > = event => {
    if (event.target.checked) {
      props.updateTodo(
        props.todo.id,
        props.todo.stared
          ? { completed: true, stared: false }
          : { completed: true }
      );
    } else {
      props.updateTodo(props.todo.id, { completed: false });
    }
  };

  const handleClickDelete: React.MouseEventHandler = () => {
    props.deleteTodo(props.todo.id);
  };

  const handleClickStar: React.MouseEventHandler = () => {
    props.updateTodo(props.todo.id, { stared: !props.todo.stared });
  };

  return (
    <li className={props.todo.completed ? "completed" : undefined}>
      <div className="view">
        <input
          className="toggle"
          style={{ height: "40px" }}
          type="checkbox"
          checked={props.todo.completed}
          onChange={handleChangeCompleted}
        />
        <label
          style={{
            backgroundImage: props.todo.completed
              ? "url(data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E)"
              : "url(data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E)",
            backgroundSize: "40px 40px"
          }}
        >
          {props.todo.title}
        </label>
        <button
          className={props.todo.stared ? "star" : "unstar"}
          onClick={handleClickStar}
        />
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
