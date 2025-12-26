<script setup lang="ts">
import type { NuxtError } from "#app";
import type { PageError } from "~/types/error";

const props = defineProps<{ error: NuxtError<PageError> }>();
</script>

<template>
  <div>
    <!-- <h1>{{ JSON.stringify(props.error) }}</h1> -->
    <h1>{{ props.error.data?.status }}</h1>
    <h1>{{ props.error.data?.message }}</h1>
    <h1>{{ props.error.data?.details }}</h1>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>
