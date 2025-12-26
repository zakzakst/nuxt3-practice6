<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useTodos, useTodo } from "~/composables/useTodos";

const { todos, getTodos } = useTodos();
const { todo, getTodo, postTodo, putTodo, deleteTodo } = useTodo();

const inputValue = ref("");

onMounted(() => {
  getTodos();
});
</script>

<template>
  <div class="text-3xl font-bold underline">top page</div>
  <div>{{ JSON.stringify(todos) }}</div>
  <hr />
  <div>
    <button @click="getTodo(1)">get</button>
    <button @click="postTodo({ title: '作成テキスト' })">post</button>
    <button @click="putTodo(1, { title: '修正テキスト' })">put</button>
    <button @click="deleteTodo(1)">delete</button>
  </div>
  <div>{{ JSON.stringify(todo) }}</div>
  <UiButton variant="secondary" size="lg" as-child>
    <a href="/">link</a>
  </UiButton>
  <UiInput v-model="inputValue" />
  <div>{{ inputValue }}</div>
  <UiSelect>
    <UiSelectTrigger>
      <UiSelectValue placeholder="Select a fruit" />
    </UiSelectTrigger>
    <UiSelectContent>
      <UiSelectItem value="apple"> Apple </UiSelectItem>
      <UiSelectItem value="banana"> Banana </UiSelectItem>
      <UiSelectItem value="blueberry"> Blueberry </UiSelectItem>
      <UiSelectItem value="grapes"> Grapes </UiSelectItem>
      <UiSelectItem value="pineapple"> Pineapple </UiSelectItem>
    </UiSelectContent>
  </UiSelect>
</template>
