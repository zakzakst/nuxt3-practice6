<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useTodos, useTodo } from "~/composables/useTodos";
import { CheckCircle2Icon } from "lucide-vue-next";

const { todos, getTodos } = useTodos();
const { todo, getTodo, postTodo, putTodo, deleteTodo } = useTodo();

const inputValue = ref("");
const checkValue = ref(false);

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
  <UiSeparator />
  <div>{{ checkValue }}</div>
  <UiCheckbox v-model="checkValue" />
  <UiSwitch v-model="checkValue" />
  <UiLabel for="email">Your email address</UiLabel>
  <UiTextarea v-model="inputValue" />
  <UiRadioGroup default-value="comfortable">
    <div class="flex items-center space-x-2">
      <UiRadioGroupItem id="r1" value="default" />
      <UiLabel for="r1">Default</UiLabel>
    </div>
    <div class="flex items-center space-x-2">
      <UiRadioGroupItem id="r2" value="comfortable" />
      <UiLabel for="r2">Comfortable</UiLabel>
    </div>
    <div class="flex items-center space-x-2">
      <UiRadioGroupItem id="r3" value="compact" />
      <UiLabel for="r3">Compact</UiLabel>
    </div>
  </UiRadioGroup>
  <UiBadge variant="destructive">Badge</UiBadge>
  <UiAlert>
    <CheckCircle2Icon />
    <UiAlertTitle>Success! Your changes have been saved</UiAlertTitle>
    <UiAlertDescription>
      This is an alert with icon, title and description.
    </UiAlertDescription>
  </UiAlert>
  <UiTabs default-value="account">
    <UiTabsList>
      <UiTabsTrigger value="account"> Account </UiTabsTrigger>
      <UiTabsTrigger value="password"> Password </UiTabsTrigger>
    </UiTabsList>
    <UiTabsContent value="account">
      Make changes to your account here.
    </UiTabsContent>
    <UiTabsContent value="password"> Change your password here. </UiTabsContent>
  </UiTabs>
  <UiBreadcrumb>
    <UiBreadcrumbList>
      <UiBreadcrumbItem>
        <UiBreadcrumbLink href="/"> Home </UiBreadcrumbLink>
      </UiBreadcrumbItem>
      <UiBreadcrumbSeparator />
      <UiBreadcrumbItem>
        <UiBreadcrumbLink href="/components"> Components </UiBreadcrumbLink>
      </UiBreadcrumbItem>
      <UiBreadcrumbSeparator />
      <UiBreadcrumbItem>
        <UiBreadcrumbPage>Breadcrumb</UiBreadcrumbPage>
      </UiBreadcrumbItem>
    </UiBreadcrumbList>
  </UiBreadcrumb>
  <UiProgress :model-value="33" />
  <UiSpinner />
  <UiCard>
    <UiCardHeader>
      <UiCardTitle>Card Title</UiCardTitle>
      <UiCardDescription>Card Description</UiCardDescription>
    </UiCardHeader>
    <UiCardContent>
      <p>Card Content</p>
    </UiCardContent>
    <UiCardFooter>
      <p>Card Footer</p>
    </UiCardFooter>
  </UiCard>
  <!-- NOTE: ページネーション表示崩れしているので、タイミングみて修正 -->
  <!-- <UiPagination :itemsPerPage="5">
    <UiPaginationContent>
      <UiPaginationItem :value="1">
        <UiPaginationPrevious href="#" />
      </UiPaginationItem>
      <UiPaginationItem :value="2">
        <UiPaginationLink href="#"> 1 </UiPaginationLink>
      </UiPaginationItem>
      <UiPaginationItem :value="3">
        <UiPaginationLink href="#" is-active> 2 </UiPaginationLink>
      </UiPaginationItem>
      <UiPaginationItem :value="4">
        <UiPaginationLink href="#"> 3 </UiPaginationLink>
      </UiPaginationItem>
      <UiPaginationItem :value="5">
        <UiPaginationEllipsis />
      </UiPaginationItem>
      <UiPaginationItem :value="6">
        <UiPaginationNext href="#" />
      </UiPaginationItem>
    </UiPaginationContent>
  </UiPagination> -->
  <UiAccordion type="single" collapsible>
    <UiAccordionItem value="item-1">
      <UiAccordionTrigger>Is it accessible?</UiAccordionTrigger>
      <UiAccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </UiAccordionContent>
    </UiAccordionItem>
  </UiAccordion>
</template>
