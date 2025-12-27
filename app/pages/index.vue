<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useTodos, useTodo } from "~/composables/useTodos";
import { CheckCircle2Icon } from "lucide-vue-next";
import { toast } from "vue-sonner";

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
  <UiAspectRatio :ratio="16 / 9" class="bg-muted rounded-lg">
    <img
      src="https://placehold.jp/150x150.png"
      alt="Photo by Drew Beamer"
      fill
      class="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
    />
  </UiAspectRatio>
  <UiAvatar>
    <UiAvatarImage src="https://github.com/shadcn.png" />
    <UiAvatarFallback>CN</UiAvatarFallback>
  </UiAvatar>
  <UiSlider :default-value="[33]" :max="100" :step="1" />
  <UiSkeleton class="w-25 h-5 rounded-full" />
  <UiPopover>
    <UiPopoverTrigger>Open</UiPopoverTrigger>
    <UiPopoverContent>Place content for the popover here.</UiPopoverContent>
  </UiPopover>
  <UiScrollArea class="h-50 w-87.5 rounded-md border p-4">
    Jokester began sneaking into the castle in the middle of the night and
    leaving jokes all over the place: under the king's pillow, in his soup, even
    in the royal toilet. The king was furious, but he couldn't seem to stop
    Jokester. And then one day, the king tripped over one of Jokester's whoopee
    cushions and fell into the moat. He was so embarrassed that he decided to
    make Jokester the official court jester.
  </UiScrollArea>
  <UiTooltipProvider>
    <UiTooltip>
      <UiTooltipTrigger>Hover</UiTooltipTrigger>
      <UiTooltipContent>
        <p>Add to library</p>
      </UiTooltipContent>
    </UiTooltip>
  </UiTooltipProvider>
  <UiButton @click.prevent="toast('Event has been created')">Sonner</UiButton>
  <UiNativeSelect>
    <UiNativeSelectOption value=""> Select a fruit </UiNativeSelectOption>
    <UiNativeSelectOption value="apple"> Apple </UiNativeSelectOption>
    <UiNativeSelectOption value="banana"> Banana </UiNativeSelectOption>
    <UiNativeSelectOption value="blueberry"> Blueberry </UiNativeSelectOption>
    <UiNativeSelectOption value="grapes" disabled>
      Grapes
    </UiNativeSelectOption>
    <UiNativeSelectOption value="pineapple"> Pineapple </UiNativeSelectOption>
  </UiNativeSelect>
  <UiAlertDialog>
    <UiAlertDialogTrigger>Open</UiAlertDialogTrigger>
    <UiAlertDialogContent>
      <UiAlertDialogHeader>
        <UiAlertDialogTitle>Are you absolutely sure?</UiAlertDialogTitle>
        <UiAlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </UiAlertDialogDescription>
      </UiAlertDialogHeader>
      <UiAlertDialogFooter>
        <UiAlertDialogCancel>Cancel</UiAlertDialogCancel>
        <UiAlertDialogAction>Continue</UiAlertDialogAction>
      </UiAlertDialogFooter>
    </UiAlertDialogContent>
  </UiAlertDialog>
  <UiDrawer>
    <UiDrawerTrigger>Open</UiDrawerTrigger>
    <UiDrawerContent>
      <UiDrawerHeader>
        <UiDrawerTitle>Are you absolutely sure?</UiDrawerTitle>
        <UiDrawerDescription>
          This action cannot be undone.
        </UiDrawerDescription>
      </UiDrawerHeader>
      <UiDrawerFooter>
        <UiButton>Submit</UiButton>
        <UiDrawerClose>
          <UiButton variant="outline"> Cancel </UiButton>
        </UiDrawerClose>
      </UiDrawerFooter>
    </UiDrawerContent>
  </UiDrawer>
</template>
