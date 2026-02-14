import { Hono } from "hono";

type Bindings = {
  FOO_BAR: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => {
  const FOO_BAR = c.env.FOO_BAR;
  return c.text(FOO_BAR);
});

export default app;
