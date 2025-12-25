export const todoStatus = ["completed", "progress", "planned"] as const;

export type TodoStatus = (typeof todoStatus)[number];

export type Todo = {
  id: number;
  title: string;
  detail: string | null;
  deadline: string | null;
  status: TodoStatus;
  createdAt: string;
  updatedAt: string;
};

export type TodosItem = Omit<Todo, "detail">;

export type GetTodosResponse = {
  items: TodosItem[];
};

export type GetTodoResponse = Todo;

export type PostTodoRequest = {
  title: Todo["title"];
  detail?: Todo["detail"];
  deadline?: Todo["deadline"];
};

export type PostTodoResponse = Todo;

export type PutTodoRequest = Partial<
  Pick<Todo, "title" | "detail" | "deadline" | "status">
>;

export type PutTodoResponse = Todo;
