let todosCount: number = 0;
let todos: TodoType[] = [];

export const fetchGetTodos = (): Promise<TodoType[]> =>
  new Promise((resolve, reject) => {
    resolve([...todos]);
  });

export const fetchDeleteCompletedTodos = (): Promise<TodoType[]> =>
  new Promise((resolve, reject) => {
    todos = todos.filter(todo => !todo.completed);
    resolve(todos);
  });

export const fetchToggleTodosCompleted = (): Promise<TodoType[]> =>
  new Promise((resolve, reject) => {
    const completed = !todos.every(todo => todo.completed);
    todos = todos.map(todo => ({ ...todo, completed }));
    resolve(todos);
  });

export const fetchCreateTodo = (todoTitle: string): Promise<TodoType> =>
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

export const fetchUpdateTodo = (
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

export const fetchDeleteTodo = (todoId: number): Promise<TodoType> => {
  return new Promise((resolve, reject) => {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (0 <= todoIndex) {
      const todo = { ...todos[todoIndex] };
      todos = todos.filter(todo => todo.id !== todoId);
      resolve(todo);
    }
  });
};
