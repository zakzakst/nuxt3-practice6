export default defineNuxtPlugin(async () => {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("../mocks/msw/browser");
    await worker.start();
  }
});
