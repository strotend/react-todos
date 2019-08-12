let todosCount: number = 0;
let todos: TodoType[] = [];

export const requestGetTodos = (): Promise<TodoType[]> =>
  new Promise((resolve, reject) => {
    resolve([...todos]);
  });

export const requestDeleteCompletedTodos = (): Promise<TodoType[]> =>
  new Promise((resolve, reject) => {
    todos = todos.filter(todo => !todo.completed);
    resolve(todos);
  });

export const requestToggleTodosCompleted = (): Promise<TodoType[]> =>
  new Promise((resolve, reject) => {
    const completed = !todos.every(todo => todo.completed);
    todos = todos.map(todo => ({ ...todo, completed }));
    resolve(todos);
  });

export const requestCreateTodo = (todoTitle: string): Promise<TodoType> =>
  new Promise((resolve, reject) => {
    const todo = {
      id: todosCount + 1,
      title: todoTitle,
      completed: false
    };
    todos.push(todo);
    todosCount = todosCount + 1;
    resolve(todo);
  });

export const requestUpdateTodo = (
  todoId: number,
  todoProperties: Partial<TodoType>
): Promise<TodoType> => {
  return new Promise((resolve, reject) => {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (0 <= todoIndex) {
      const todo = { ...todos[todoIndex], ...todoProperties, id: todoId };
      todos[todoIndex] = todo;
      resolve(todo);
    }
  });
};

export const requestDeleteTodo = (todoId: number): Promise<TodoType> => {
  return new Promise((resolve, reject) => {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (0 <= todoIndex) {
      const todo = { ...todos[todoIndex] };
      todos = todos.filter(todo => todo.id !== todoId);
      resolve(todo);
    }
  });
};
