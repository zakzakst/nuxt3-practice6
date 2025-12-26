<script setup lang="ts">
import { useTodos2, useTodo } from "~/composables/useTodos";

const { getTodos } = useTodos2();
const { data, pending, refresh } = await getTodos();

const { putTodo, deleteTodo } = useTodo2();

const onPut = async (id: number) => {
  try {
    const data = await putTodo(id, { title: "編集タイトル" });
    console.log(data);
  } catch (e) {
    // APIからのエラーメッセージをログに表示
    // @ts-ignore
    if (e.response?.status === 404) {
      // @ts-ignore
      console.error("404エラー:", e.data?.message);
    } else {
      console.error("サーバー以外のエラー");
    }
  }
};

const onDelete = async (id: number) => {
  try {
    await deleteTodo(id);
  } catch (e) {
    // APIからのエラーメッセージをログに表示
    // @ts-ignore
    if (e.response?.status === 404) {
      // @ts-ignore
      console.error("404エラー:", e.data?.message);
    } else {
      console.error("サーバー以外のエラー");
    }
  }
};
</script>

<template>
  <!-- <p><button @click="refresh()">再読み込み</button></p> -->
  <template v-if="pending">
    <p>データ読み込み中</p>
  </template>
  <template v-else-if="data?.items.length">
    <ul>
      <li v-for="item in data.items" :key="item.id">
        <NuxtLink :href="`/todos2/${item.id}`">{{ item.title }}</NuxtLink>
        <button @click="onPut(item.id)">■</button>
        <button @click="onDelete(item.id)">×</button>
      </li>
    </ul>
  </template>
  <template v-else>
    <p>データが見つかりませんでした</p>
  </template>
</template>
