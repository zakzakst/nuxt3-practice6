import { z } from "zod";

export const postTodoFormSchema = z.object({
  title: z.string().min(8, "8文字以上入力してください"),
  detail: z.string().optional(),
  deadline: z.date().optional(),
});

export type PostTodoForm = z.infer<typeof postTodoFormSchema>;

export const putTodoFormSchema = z.object({
  title: z.string().min(8, "8文字以上入力してください"),
  detail: z.string().optional(),
  deadline: z.date().optional(),
  status: z.enum(["title", "detail", "deadline", "status"]).optional(),
});

export type PutTodoForm = z.infer<typeof putTodoFormSchema>;
