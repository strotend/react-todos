export type TodoFilterType = "ALL" | "ACTIVE" | "COMPLETED";

export interface TodoType {
  id: number;
  title: string;
  completed: boolean;
  starred: boolean;
}

export interface TodosStateType {
  todosCount: number;
  todos: TodoType[];
}
