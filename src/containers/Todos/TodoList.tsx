import React from "react";

import TodoListItem from "./TodoListItem";

interface PropsType {
  todos: TodoType[];
  updateTodo: (todoId: number, todoProperties: Partial<TodoType>) => void;
  deleteTodo: (todoId: number) => void;
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
          update={todoProperties => props.updateTodo(todo.id, todoProperties)}
          delete={() => props.deleteTodo(todo.id)}
        />
      ))}
    </ul>
  </section>
);

export default TodoList;
