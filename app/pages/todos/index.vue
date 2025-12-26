<script setup lang="ts">
import { onMounted, computed, watch, ref } from "vue";
import { useTodos2 } from "~/composables/useTodos";

const { getTodos } = useTodos2();

// const todosComputed = computed(() => todos.value);

// watch(todos, () => {
//   console.log("watch");
// });

const { data, pending, refresh } = getTodos();

onMounted(() => {
  refresh();
});
</script>

<template>
  <!-- <p>{{ JSON.stringify(todos) }}</p>
  <p>{{ JSON.stringify(todos?.length) }}</p> -->
  <p><button @click="refresh()">再読み込み</button></p>
  <template v-if="pending">
    <p>データ読み込み中</p>
  </template>
  <template v-else-if="data?.items.length">
    <ul>
      <li v-for="item in data.items" :key="item.id">
        <NuxtLink :href="`/todos/${item.id}`">{{ item.title }}</NuxtLink>
      </li>
    </ul>
  </template>
  <template v-else>
    <p>データが見つかりませんでした</p>
  </template>
</template>
