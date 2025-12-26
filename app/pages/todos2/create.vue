<script setup lang="ts">
import type { PageError } from "~/types/error";
const { postTodo } = useTodo2();

const createTodo = async () => {
  try {
    const data = await postTodo({
      title: "create todo",
    });
    console.log(data);
  } catch (e) {
    // APIからのエラーメッセージをログに表示
    // @ts-ignore
    if (e.response?.status === 500) {
      // @ts-ignore
      // console.error("サーバーのエラー:", e.data?.message);
      // showError({
      //   status: 500,
      //   statusText: e.data?.message,
      // });
      showError<PageError>({
        // status: 500,
        // message: e.data?.message,
        data: {
          status: 500,
          message: e.data?.message,
          details: "備考",
        },
      });
    } else {
      console.error("サーバー以外のエラー");
    }
  }
};
</script>

<template>
  <button @click="createTodo">TODO作成</button>
</template>
