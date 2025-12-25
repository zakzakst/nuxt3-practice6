import { HttpResponse, http } from "msw";
import type { PostTodoRequest, PutTodoRequest } from "~/types/todos";
import {
  GetTodosResponseMock,
  GetTodoResponseMock,
  PostTodoResponseMock,
  PutTodoResponseMock,
} from "~/mocks/todos";
import { host } from "~/utils/host";

export const todosHandler = [
  http.get(host("/todos"), () => {
    return HttpResponse.json(GetTodosResponseMock);
  }),

  http.get<{ id: string }>(host("/todos/:id"), ({ params }) => {
    const { id } = params;
    console.log(`id: ${id}`);
    return HttpResponse.json(GetTodoResponseMock);
  }),

  http.post<{}, PostTodoRequest>(host("/todos"), async ({ request }) => {
    const requestData = await request.clone().json();
    console.log(`requestData: ${requestData}`);
    return HttpResponse.json(PostTodoResponseMock);
  }),

  http.put<{ id: string }, PutTodoRequest>(
    host("/todos/:id"),
    async ({ params, request }) => {
      const { id } = params;
      console.log(`id: ${id}`);
      const requestData = await request.clone().json();
      console.log(`requestData: ${requestData}`);
      return HttpResponse.json(PutTodoResponseMock);
    }
  ),

  http.delete<{ id: string }>(host("/todos/:id"), ({ params }) => {
    const { id } = params;
    console.log(`id: ${id}`);
    // TODO: deleteの時のレスポンスの方法のセオリー調べる
    return HttpResponse.json();
  }),
];
