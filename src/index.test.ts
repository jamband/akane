import { expect, test } from "vitest";
import app from ".";
import MOCK_ENV from "./tests/env";

test("GET /", async () => {
  const res = await app.request("/", {}, MOCK_ENV);
  expect(res.status).toBe(200);
  expect(await res.text()).toBe("testfoobar");
});
