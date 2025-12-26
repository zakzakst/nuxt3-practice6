<script setup lang="ts">
import { useRoute } from "vue-router";
import { useTodo2 } from "~/composables/useTodos";

const route = useRoute();

const { getTodo } = useTodo2();
const { data, status, error, refresh } = await getTodo(Number(route.params.id));
</script>

<template>
  <template v-if="status === 'pending'">
    <p>データ読み込み中</p>
  </template>
  <template v-else-if="error">
    <!-- NOTE: error.messageだと「[GET] "http://localhost:6000/todos/1": 404 Not Found」のほうが表示される -->
    <!-- <p>{{ error.message }}</p> -->
    <p>{{ error.data.message }}</p>
  </template>
  <template v-else-if="data">
    <p>{{ data.title }}</p>
    <p>{{ data.detail || "--" }}</p>
    <p>{{ data.status }}</p>
  </template>
  <template v-else>
    <p>該当するTODOが見つかりませんでした</p>
  </template>
</template>
