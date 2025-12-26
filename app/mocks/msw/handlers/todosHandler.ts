import { HttpResponse, http } from "msw";
import type {
  GetTodosResponse,
  GetTodoResponse,
  PostTodoRequest,
  PostTodoResponse,
  PutTodoRequest,
  PutTodoResponse,
} from "~/types/todos";
import {
  GetTodosResponseMock,
  GetTodoResponseMock,
  PostTodoResponseMock,
  PutTodoResponseMock,
} from "~/mocks/todos";
import type { ApiError } from "~/types/error";
import { host } from "~/utils/host";

export const todosHandler = [
  http.get<never, never, GetTodosResponse | ApiError>(host("/todos"), () => {
    const status: number = 200;
    if (status === 200) {
      return HttpResponse.json(GetTodosResponseMock, { status: 200 });
    }
    // 予期せぬエラー
    return HttpResponse.json(
      { message: "予期せぬエラーが発生しました" },
      { status: 500 }
    );
  }),

  http.get<{ id: string }, never, GetTodoResponse | ApiError>(
    host("/todos/:id"),
    ({ params }) => {
      const { id } = params;
      console.log(`id: ${id}`);
      const status: number = 404;
      if (status === 200) {
        return HttpResponse.json(GetTodoResponseMock, { status: 200 });
      }
      if (status === 404) {
        return HttpResponse.json(
          { message: "該当するデータが見つかりませんでした" },
          { status: 404 }
        );
      }
      // 予期せぬエラー
      return HttpResponse.json(
        { message: "予期せぬエラーが発生しました" },
        { status: 500 }
      );
    }
  ),

  http.post<never, PostTodoRequest, PostTodoResponse | ApiError>(
    host("/todos"),
    async ({ request }) => {
      const requestData = await request.clone().json();
      console.log(`requestData: ${requestData}`);
      const status: number = 500;
      if (status === 201) {
        return HttpResponse.json(PostTodoResponseMock, { status: 201 });
      }
      // 予期せぬエラー
      return HttpResponse.json(
        { message: "予期せぬエラーが発生しました" },
        { status: 500 }
      );
    }
  ),

  http.put<{ id: string }, PutTodoRequest, PutTodoResponse | ApiError>(
    host("/todos/:id"),
    async ({ params, request }) => {
      const { id } = params;
      console.log(`id: ${id}`);
      const requestData = await request.clone().json();
      console.log(`requestData: ${requestData}`);
      const status: number = 404;
      if (status === 200) {
        return HttpResponse.json(PutTodoResponseMock, { status: 200 });
      }
      if (status === 404) {
        return HttpResponse.json(
          { message: "該当するデータが見つかりませんでした" },
          { status: 404 }
        );
      }
      // 予期せぬエラー
      return HttpResponse.json(
        { message: "予期せぬエラーが発生しました" },
        { status: 500 }
      );
    }
  ),

  http.delete<{ id: string }, never, null | ApiError>(
    host("/todos/:id"),
    ({ params }) => {
      const { id } = params;
      console.log(`id: ${id}`);
      const status: number = 404;
      if (status === 204) {
        // DELETE成功時はボディなしが一般的
        return HttpResponse.json(null, { status: 204 });
      }
      if (status === 404) {
        return HttpResponse.json(
          { message: "該当するデータが見つかりませんでした" },
          { status: 404 }
        );
      }
      // 予期せぬエラー
      return HttpResponse.json(
        { message: "予期せぬエラーが発生しました" },
        { status: 500 }
      );
    }
  ),
];
