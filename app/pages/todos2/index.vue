<script setup lang="ts">
import { watch, ref } from "vue";
import { useTodos2, useTodo } from "~/composables/useTodos";

// const params = ref<{ keyword?: string }>({});
const inputText = ref("");

const { params, getTodos } = useTodos2();
// params.value = {
//   keyword: "hoge",
// };
const { data, pending, refresh } = await getTodos();

watch(inputText, () => {
  params.value = {
    keyword: inputText.value,
  };
  // refresh(); // 不要: queryがリアクティブなので自動再フェッチ
});

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
  <p><button @click="refresh()">再読み込み</button></p>
  <p><input type="text" v-model="inputText" /></p>
  <p>{{ inputText }}</p>
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
