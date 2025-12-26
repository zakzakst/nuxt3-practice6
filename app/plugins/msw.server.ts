export default defineNuxtPlugin(async () => {
  if (process.env.NODE_ENV === "development") {
    const { server } = await import("../mocks/msw/server");
    await server.listen();
  }
});
