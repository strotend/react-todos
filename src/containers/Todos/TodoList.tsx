import React from "react";

import TodoListItem from "./TodoListItem";

interface PropsType {
  todos: TodoType[];
  updateTodo: (id: number, todo: Partial<TodoType>) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FunctionComponent<PropsType> = props => (
  <section className="main">
    <input id="toggle-all" className="toggle-all" type="checkbox" />
    <label />
    <ul className="todo-list">
      {props.todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          updateTodo={props.updateTodo}
          removeTodo={props.removeTodo}
        />
      ))}
    </ul>
  </section>
);

export default TodoList;
