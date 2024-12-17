import { test, expect } from "@jest/globals";
// const api = require("./api.js");
import * as api from "./api.js";
import emotions from "./assets/emotions.json";

function rand() {
  const n = Math.floor(Math.random() * emotions.length);
  return emotions[n];
}

test("test1", () => {
  console.log(rand());
  const response = api.getWiki(rand(), "https://localhost:3000/");
  expect(response).resolves.toBeInstanceOf(Object);
});
