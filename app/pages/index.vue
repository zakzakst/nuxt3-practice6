<script setup lang="ts">
import { onMounted, ref } from "vue";
import UiInput from "~/components/ui/input/UiInput.vue";
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
  <UiButton variant="secondary" size="lg">test</UiButton>
  <UiInput v-model="inputValue" />
  <div>{{ inputValue }}</div>
  <!-- <Button>test</Button> -->
</template>
