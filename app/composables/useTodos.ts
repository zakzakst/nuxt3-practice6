import type {
  Todo,
  TodosItem,
  GetTodosResponse,
  GetTodoResponse,
  PostTodoRequest,
  PostTodoResponse,
  PutTodoRequest,
  PutTodoResponse,
} from "~/types/todos";
import { ref } from "vue";
// import { useFetch } from "nuxt/app";
import { useAsyncData, useFetch } from "nuxt/app";
import { host } from "~/utils/host";
// import { useHost as host } from "~/composables/useHost";

export const useTodos = () => {
  const todos = ref<TodosItem[] | null>(null);

  const getTodos = async () => {
    // const asyncData = await useFetch<GetTodosResponse>(host("/todos"), {
    //   key: "getTodos",
    // });
    const asyncData = await useAsyncData<GetTodosResponse>("getTodos", () =>
      $fetch(host("/todos"))
    );
    console.log("test", asyncData);
    todos.value = asyncData.data.value?.items || null;
  };

  return {
    todos,
    getTodos,
  };
};

export const useTodos2 = () => {
  const getTodos = () => {
    // const asyncData = useAsyncData<GetTodosResponse>("getTodos", () =>
    //   $fetch(host("/todos"))
    // );
    const asyncData = useFetch<GetTodosResponse>(host("/todos"), {
      key: "getTodos",
    });
    console.log("test", asyncData.data.value);
    return asyncData;
  };

  return {
    getTodos,
  };
};

export const useTodo = () => {
  const todo = ref<Todo | null>(null);

  const getTodo = async (id: number) => {
    const asyncData = await useFetch<GetTodoResponse>(host(`/todos/${id}`), {
      key: "getTodo",
    });
    todo.value = asyncData.data.value || null;
  };

  const postTodo = async (
    request: PostTodoRequest
  ): Promise<PostTodoResponse | undefined> => {
    const asyncData = await useFetch<PostTodoResponse>(host("/todos"), {
      key: "postTodo",
      method: "POST",
      body: request,
    });
    return asyncData.data.value;
  };

  const putTodo = async (id: number, request: PutTodoRequest) => {
    const asyncData = await useFetch<PutTodoResponse>(host(`/todos/${id}`), {
      key: "putTodo",
      method: "PUT",
      body: request,
    });
    todo.value = asyncData.data.value || null;
  };

  const deleteTodo = async (id: number) => {
    await useFetch(host(`/todos/${id}`), {
      key: "deleteTodo",
      method: "DELETE",
    });
    todo.value = null;
  };

  return {
    todo,
    getTodo,
    postTodo,
    putTodo,
    deleteTodo,
  };
};
