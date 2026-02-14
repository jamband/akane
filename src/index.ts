import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("akane");
});

export default app;
