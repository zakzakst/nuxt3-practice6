<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useTodo } from "~/composables/useTodos";

const route = useRoute();

const { todo, getTodo } = useTodo();

onMounted(() => {
  getTodo(Number(route.params.id));
});
</script>

<template>
  <template v-if="todo">
    <p>{{ todo.title }}</p>
    <p>{{ todo.detail || "--" }}</p>
    <p>{{ todo.status }}</p>
  </template>
  <template v-else>
    <p>該当するTODOが見つかりませんでした</p>
  </template>
</template>
