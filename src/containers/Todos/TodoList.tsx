import React from "react";

interface PropsType {
  todos: TodoType[];
}

const TodoList: React.FunctionComponent<PropsType> = props => (
  <section className="main">
    <input id="toggle-all" className="toggle-all" type="checkbox" />
    <label />
    <ul className="todo-list">
      {props.todos.map(todo => (
        <li key={todo.id} className={todo.completed ? "completed" : undefined}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>{todo.title}</label>
            <button className="destroy" />
          </div>
          <input className="edit" value={todo.title} readOnly />
        </li>
      ))}
    </ul>
  </section>
);

export default TodoList;
