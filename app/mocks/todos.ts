import type {
  GetTodosResponse,
  GetTodoResponse,
  PostTodoResponse,
  PutTodoResponse,
} from "~/types/todos";

export const GetTodosResponseMock: GetTodosResponse = {
  items: [
    {
      id: 1,
      title: "夕飯の材料を買う",
      deadline: "2025-12-31T03:04:30.155Z",
      status: "progress",
      createdAt: "2025-12-25T03:04:30.155Z",
      updatedAt: "2025-12-26T03:04:30.155Z",
    },
  ],
};

export const GetTodoResponseMock: GetTodoResponse = {
  id: 1,
  title: "夕飯の材料を買う",
  deadline: "2025-12-31T03:04:30.155Z",
  detail: `
    - 肉
    - 人参
    - 醤油
  `,
  status: "progress",
  createdAt: "2025-12-25T03:04:30.155Z",
  updatedAt: "2025-12-26T03:04:30.155Z",
};

export const PostTodoResponseMock: PostTodoResponse = {
  id: 2,
  title: "本を買う",
  deadline: null,
  detail: "『こころ』",
  status: "planned",
  createdAt: "2026-1-5T03:04:30.155Z",
  updatedAt: "2026-1-5T03:04:30.155Z",
};

export const PutTodoResponseMock: PutTodoResponse = {
  id: 1,
  title: "夕飯の材料を買う（内容更新）",
  deadline: "2025-12-31T03:04:30.155Z",
  detail: `
    - 肉
    - 人参
    - 醤油
  `,
  status: "completed",
  createdAt: "2025-12-25T03:04:30.155Z",
  updatedAt: "2025-12-30T03:04:30.155Z",
};
