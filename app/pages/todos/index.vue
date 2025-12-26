<script setup lang="ts">
import { onMounted, computed, watch, ref } from "vue";
import { useTodos } from "~/composables/useTodos";

const { todos, getTodos } = useTodos();

// const todosComputed = computed(() => todos.value);

// watch(todos, () => {
//   console.log("watch");
// });

onMounted(() => {
  getTodos();
});
</script>

<template>
  <!-- <p>{{ JSON.stringify(todos) }}</p>
  <p>{{ JSON.stringify(todos?.length) }}</p> -->
  <template v-if="todos?.length">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <NuxtLink :href="`/todos/${todo.id}`">{{ todo.title }}</NuxtLink>
      </li>
    </ul>
  </template>
  <template v-else>
    <p>データ読み込み中</p>
  </template>
</template>
