<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { ButtonVariants } from "./variants";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./variants";

interface Props {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>

<template>
  <button :class="cn(buttonVariants({ variant, size }), props.class)">
    <slot />
  </button>
</template>
